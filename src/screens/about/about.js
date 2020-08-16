import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Content, Body, Text, Card, CardItem } from "native-base";
import styles from "./styles";

const aboutImage = require("../../../assets/about.png");
import FooterScreen from "../footer/footer";
import HeaderScreen from "../header/header";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <HeaderScreen navigation={this.props.navigation} title="About" />

        <Content padder>
          <Image
            source={aboutImage}
            style={{
              flex: 1,
              height: 60,
              width: 195,
              marginLeft: 82,
              marginTop: 18,
            }}
          />
          <Card style={{ marginTop: 25, borderRadius: 5 }}>
            <CardItem style={{ borderRadius: 5 }}>
              <Body>
                <Text>
                  Web designers generally have nothing to do with creating
                  content for their projects. Even so, the look of a site can be
                  incomplete if no words are included. Web designers need to
                  find ways to incorporate copyright-free content into their
                  designs to provide clients with a look that is as finished as
                  possible. Not all people can afford to pay for content
                  immediately after creating their website, so that’s not a
                  condition you can demand from your clients. Instead, you can.
                  {"\n"}
                </Text>
                <Text>
                  Bew designers generally have nothing to do with creating
                  content for their projects. Even so, the look of a site can be
                  incomplete if no words are included. Web designers need to
                  find ways to incorporate copyright-free content into their
                  designs to provide clients with a look that is as finished as
                  possible. Not all people can afford to pay for content
                  immediately after creating.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <FooterScreen navigation={this.props.navigation} active="about" />
      </Container>
    );
  }
}

export default About;
