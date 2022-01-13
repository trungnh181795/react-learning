import React from "react";
import DataSource from "./DataSource";

class TextBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state.post = this.props.text
    }

    render() {
        return(
            <div className="TextBlock">
                {this.state.post}
            </div>
        )
    }
}


class BlogPost extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        blogPost: DataSource.getBlogPost(props.id)
      };
    }
  
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      this.setState({
        blogPost: DataSource.getBlogPost(this.props.id)
      });
    }
  
    render() {
      return <TextBlock text={this.state.blogPost} />;
    }
  }

export default BlogPost