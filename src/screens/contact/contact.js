import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  Text,
  Textarea,
  List,
  ListItem,
  Toast,
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles";

const contactImage = require("../../../assets/contacts/contact.png");
import FooterScreen from "../footer/footer";
import HeaderScreen from "../header/header";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      emailError: false,
    };
  }

  submitForm = async () => {
    const { name, email, phone, subject, message } = this.state;
    if (!name || !email || !phone || !subject || !message) {
      Toast.show({
        text: "Incomplete form!",
        buttonText: "Okay",
        type: "danger",
      });
    } else if (phone.length < 10) {
      Toast.show({
        text: "Invalid phone number!",
        buttonText: "Okay",
        type: "danger",
      });
    } else {
      try {
        // POST request using fetch()
        fetch("https://formspree.io/xyynwjpa", {
          // Adding method type
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            subject: this.state.subject,
            message: this.state.message,
          }),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          // Converting to JSON
          .then((response) => response.json())

          // Displaying results to console
          .then((json) => console.log(json));
        Toast.show({
          text: "Submitted successfully",
          buttonText: "Okay",
          type: "success",
        });
        this.setState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        Toast.show({
          text: "Submitted successfully",
          buttonText: "Okay",
          type: "success",
          duration: 4000,
        });
      }
    }
  };

  render() {
    const { emailError } = this.state;
    return (
      <Container style={styles.container}>
        <HeaderScreen navigation={this.props.navigation} title="Contact" />

        <Content padder>
          <Image
            source={contactImage}
            style={{
              resizeMode: "cover",
              width: null,
              flex: 1,
              height: 130,
            }}
          />
          <List style={{ marginLeft: -5 }}>
            <ListItem thumbnail>
              <Left
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderWidth: 1,
                  borderRadius: 4,
                }}
              >
                <Icon name="home" style={{ fontSize: 23 }} />
              </Left>
              <Body>
                <Text>Address</Text>
                <Text note numberOfLines={1}>
                  Beltola Tiniali Guwahati-781028, Assam
                </Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem thumbnail>
              <Left
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderWidth: 1,
                  borderRadius: 4,
                }}
              >
                <Icon name="call" style={{ fontSize: 23 }} />
              </Left>
              <Body>
                <Text>Phone</Text>
                <Text note numberOfLines={1}>
                  +91 98540 98540
                </Text>
              </Body>
              <Right />
            </ListItem>
            <ListItem thumbnail>
              <Left
                style={{
                  backgroundColor: "#eee",
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderWidth: 1,
                  borderRadius: 4,
                }}
              >
                <Icon name="mail" style={{ fontSize: 23 }} />
              </Left>
              <Body>
                <Text>Email</Text>
                <Text note numberOfLines={1}>
                  info@feknews.com
                </Text>
              </Body>
              <Right />
            </ListItem>
          </List>
          <Grid style={{ marginLeft: 18, marginTop: 20 }}>
            <Col>
              <Icon name="logo-facebook" style={{ fontSize: 35 }} />
            </Col>
            <Col>
              <Icon name="logo-twitter" style={{ fontSize: 35 }} />
            </Col>
            <Col>
              <Icon name="logo-github" style={{ fontSize: 35 }} />
            </Col>
            <Col>
              <Icon name="logo-whatsapp" style={{ fontSize: 35 }} />
            </Col>
          </Grid>
          <Form>
            <Text style={{ marginTop: 25, marginLeft: 10 }}>
              Have a Question? Ask below.
            </Text>
            <Item rounded style={[styles.item, styles.firstItem]}>
              <Icon active name="person" />
              <Input
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}
                placeholder="Enter your name"
              />
            </Item>
            <Item
              rounded
              style={[
                styles.item,
                { borderColor: emailError ? "red" : "lightgrey" },
              ]}
            >
              <Icon active name="mail" />
              <Input
                onChangeText={(text) => {
                  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
                  reg.test(text) === true
                    ? this.setState({ email: text, emailError: false })
                    : this.setState({ email: text, emailError: true });
                }}
                value={this.state.email}
                placeholder="Enter your email"
              />
            </Item>
            <Item rounded style={styles.item}>
              <Icon active name="call" />
              <Input
                keyboardType="numeric"
                onChangeText={(text) => this.setState({ phone: text })}
                value={this.state.phone}
                placeholder="Enter your phone"
              />
            </Item>
            <Item rounded style={styles.item}>
              <Icon active name="question" />
              <Input
                onChangeText={(text) => this.setState({ subject: text })}
                value={this.state.subject}
                placeholder="Enter subject"
              />
            </Item>
            <Item rounded>
              <Icon style={{ position: "absolute", top: 10 }} name="book" />
              <Textarea
                onChangeText={(text) => this.setState({ message: text })}
                value={this.state.message}
                rowSpan={5}
                style={{ width: "100%", paddingLeft: 40 }}
                placeholder="Enter your message..."
              />
            </Item>
            <Button
              rounded
              block
              style={{ marginTop: 20, marginBottom: 25 }}
              onPress={this.submitForm}
            >
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
        <FooterScreen navigation={this.props.navigation} active="contact" />
      </Container>
    );
  }
}

export default Contact;
