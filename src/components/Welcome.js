import React from "react";
import Button from "./Button";
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Bilal",
      lastName: "Hekim",
    };
  }
  render() {
    console.log(this.props);
    return (
      <>
        <h1>
          Hello {this.state.firstName} {this.state.lastName}
        </h1>
        <Button
          title="Change full name"
          fun={() => {
            this.setState({
              firstName: "Ahmed",
              lastName: "Mahmood",
            });
          }}
        />
      </>
    );
  }
}
export default Welcome;
