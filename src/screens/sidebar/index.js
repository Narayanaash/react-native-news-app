import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Switch,
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    bg: "#AB6AED"
  },
  {
    name: "Entertainment",
    route: "Anatomy",
    icon: "paper",
    bg: "#48525D"
  },
  {
    name: "Sports",
    route: "Anatomy",
    icon: "paper",
    bg: "#48525D"
  },
  {
    name: "Notification",
    route: "Anatomy",
    icon: "notifications",
    bg: "red",
    types: "3"
  },
  {
    name: "Dark Theme",
    route: "Anatomy",
    icon: "eye",
    bg: "",
    theme: "1"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Text style={styles.fakenews}>
            <Icon name="globe" style={{color: "#fff", fontSize: 35}} /> FEKNEWS
          </Text>

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 25/2,
                        height: 25,
                        width: 25,
                        backgroundColor: data.bg,
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
                  {data.theme &&
                  <Right style={{flex: 1}}>
                    <Switch value={false} />
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
