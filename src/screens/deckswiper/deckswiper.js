import React from "react";
import {
  Text,
  Button,
  Left,
  Right,
  Body,
  DeckSwiper,
  Card,
  CardItem,
} from "native-base";
import moment from "moment";
import { Image, TouchableWithoutFeedback } from "react-native";

import Modal from "../modal/modal";

const cardOne = require("../../../assets/news.jpg");

export default class Deckswiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setModalVisible: false,
      modalArticleData: {},
    };
  }
  handleItemDataOnPress = (item) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: item,
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  render() {
    return (
      <>
        <DeckSwiper
          dataSource={this.props.news2}
          looping={true}
          renderItem={(item) => (
            <TouchableWithoutFeedback
              onPress={() => this.handleItemDataOnPress(item)}
            >
              <Card style={{ elevation: 2, borderRadius: 6 }}>
                <CardItem
                  style={{
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                >
                  <Left>
                    <Body>
                      <Text
                        style={{ fontSize: 18, marginLeft: -15 }}
                        numberOfLines={2}
                      >
                        {item.title}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 180,
                      backgroundColor: "#eee",
                    }}
                    source={{
                      uri: item.urlToImage !== "" ? item.urlToImage : cardOne,
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
                  <Left>
                    <Button transparent>
                      <Text style={{ marginLeft: -15 }} numberOfLines={1}>
                        {`Source: ${item.source.name}`}
                      </Text>
                    </Button>
                  </Left>
                  <Right>
                    <Text numberOfLines={1}>
                      {moment(item.publishedAt || moment.now()).fromNow()}
                    </Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableWithoutFeedback>
          )}
        />
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </>
    );
  }
}
