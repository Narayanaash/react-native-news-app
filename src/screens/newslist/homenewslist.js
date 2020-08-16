import React from "react";
import {
  Text,
  Left,
  Right,
  Body,
  Thumbnail,
  List,
  ListItem,
} from "native-base";
import moment from "moment";

import Modal from "../modal/modal";

export default class Homenewslist extends React.Component {
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
        <List
          dataArray={this.props.news}
          renderRow={(item) => (
            <ListItem
              thumbnail
              onPress={() => this.handleItemDataOnPress(item)}
            >
              <Left>
                <Thumbnail
                  style={{
                    width: 95,
                    height: 65,
                    borderRadius: 2,
                    backgroundColor: "#eee",
                  }}
                  source={{
                    uri: item.urlToImage !== "" ? item.urlToImage : listOne,
                  }}
                />
              </Left>
              <Body>
                <Text numberOfLines={2}>{item.title}</Text>
                <Text numberOfLines={1} note>
                  {`Source: ${item.source.name} | ${moment(
                    item.publishedAt || moment.now()
                  ).fromNow()}`}
                </Text>
              </Body>
              <Right />
            </ListItem>
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
