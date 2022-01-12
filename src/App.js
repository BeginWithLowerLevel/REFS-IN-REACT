import React, { Component } from "react";

const MyInput = (props) => {
  return (
    <>
      <input type="text" ref={props.inputRef} />
    </>
  );
};

const FuncCustomComp = () => {
  let inputRef = null;

  const onClick = () => {
    inputRef.focus();
  };

  return (
    <div>
      My input :
      <MyInput
        inputRef={(input) => {
          inputRef = input;
        }}
      />
      <input type={"submit"} value={"submit"} onClick={onClick} />
    </div>
  );
};

class App extends Component {
  onClick = () => {
    console.log(this.firstName.value);
  };

  onKeyUp = (target, e) => {
    //key pressing
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };

  render() {
    return (
      <div className="App">
        <center>
          <FuncCustomComp />
          <table>
            <tbody>
              <tr>
                <td>First Name : </td>
                <td>
                  <input
                    type="text"
                    ref={(input) => {
                      this.firstName = input;
                    }} //referencing goes here... callback function
                    onKeyUp={this.onKeyUp.bind(this, "firstName")}
                  />
                  <br /> {/*when enter key pressed, bind data*/}
                </td>
              </tr>
              <tr>
                <td> Last Name :</td>
                <td>
                  <input
                    type="text"
                    ref={(input) => {
                      this.lastName = input;
                    }}
                    onKeyUp={this.onKeyUp.bind(this, "lastName")}
                  />
                  <br />
                </td>
              </tr>
              <tr>
                <td>Age :</td>
                <td>
                  <input
                    type="text"
                    ref={(input) => {
                      this.age = input;
                    }}
                    onKeyUp={this.onKeyUp.bind(this, "age")}
                  />
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <input
                      type="submit"
                      value={"submit"}
                      ref={(input) => {
                        this.submit = input;
                      }}
                      onClick={this.onClick}
                    />
                  </center>
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default App;
