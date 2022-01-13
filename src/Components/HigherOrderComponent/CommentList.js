import React from "react";
import DataSource from "./DataSource";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state.comment = this.props.comment
  }

  render() {
    return (
      <div className="Comment">
        {this.state.comment}  
      </div>
    )
  }
}

class CommentList extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        // "DataSource" là nguồn dữ liệu từ bên ngoài
        comments: DataSource.getComments()
      };
    }
  
    componentDidMount() {
      // Lắng nghe các thay đổi
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      // Dọn dẹp listener
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      // Cập nhật lại component khi nguồn dữ liệu thay đổi
      this.setState({
        comments: DataSource.getComments()
      });
    }
  
    render() {
      return (
        <div>
          {this.state.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }
  }

export default CommentList