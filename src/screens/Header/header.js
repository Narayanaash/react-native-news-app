import React, { Component } from "react";
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";
import styles from "./styles";

class HeaderScreen extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default HeaderScreen;
