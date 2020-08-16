import React, { Component } from "react";
import { Button, Footer, FooterTab, Text, Icon } from "native-base";
import styles from "./styles";

class FooterScreen extends Component {
  toggleTab1() {
    this.props.navigation.navigate("Home");
  }
  toggleTab2() {
    this.props.navigation.navigate("About");
  }
  toggleTab4() {
    this.props.navigation.navigate("Contact");
  }
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={this.props.active === "home" ? true : false}
            onPress={() => this.toggleTab1()}
          >
            <Icon
              active={this.props.active === "home" ? true : false}
              name="home"
            />
            <Text>Home</Text>
          </Button>
          <Button
            active={this.props.active === "about" ? true : false}
            onPress={() => this.toggleTab2()}
          >
            <Icon
              active={this.props.active === "about" ? true : false}
              name="paper"
            />
            <Text>About</Text>
          </Button>
          <Button
            active={this.props.active === "contact" ? true : false}
            onPress={() => this.toggleTab4()}
          >
            <Icon
              active={this.props.active === "contact" ? true : false}
              name="contact"
            />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterScreen;
