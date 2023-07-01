import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count} </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
