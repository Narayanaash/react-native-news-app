import React, { Component } from "react";
import { Body, Card, CardItem } from "native-base";
import { Image } from "react-native";

class DeckSkeleton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ elevation: 2, borderRadius: 6 }}>
        <CardItem
          style={{
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            height: 55,
          }}
        >
          <Body style={{ backgroundColor: "#e0e0e0" }} />
        </CardItem>
        <CardItem cardBody>
          <Image
            style={{
              resizeMode: "cover",
              width: null,
              flex: 1,
              height: 185,
              backgroundColor: "#e0e0e0",
              marginLeft: 15,
              marginRight: 15,
            }}
          />
        </CardItem>
        <CardItem
          style={{
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            height: 50,
          }}
        >
          <Body style={{ backgroundColor: "#e0e0e0" }} />
        </CardItem>
      </Card>
    );
  }
}

export default DeckSkeleton;
