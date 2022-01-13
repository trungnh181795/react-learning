import React  from "react";

class WrapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstComponentName: "DefaultComponent",
            secondComponentName: "PureComponent",
            counter: 0
        }
    }
    handleIncrement = () => {
        this.setState(prevState => ({
          counter: prevState.counter + 1
        }));
    };
    
      render() {
        return (
          <div className="WrapComponent">
            <p>You click: {this.state.counter} time</p>
            <DefaultComponent componentName={this.state.firstComponentName} />
            <PureComponent componentName={this.state.secondComponentName} />
    
            <button onClick={this.handleIncrement}>Increment</button>
          </div>
        );
      }
}

class DefaultComponent extends React.Component {

    componentDidUpdate() {
      console.log("Re-render DefaultComponent");
    }
  
    render() {
      return <h1>{this.props.componentName}</h1>;
    }
  }
  
  class PureComponent extends React.PureComponent {

    componentDidUpdate() {
      console.log("Re-render PureComponent");
    }
  
    render() {
      return <h1>{this.props.componentName}</h1>;
    }
  }

export default WrapComponent