import React, { Component } from "react";
import { Container, Content, View } from "native-base";
import styles from "./styles";

import Modal from "../modal/modal";
import FooterScreen from "../footer/footer";
import Skeleton from "../skeleton/skeleton";
import HeaderScreen from "../header/header";
import Newslist from "../newslist/newslist";
import { fetchData } from "../../api/api";
const newsURI =
  "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ad56a8b4ed7343d5962addccc3e77b13";

class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      news: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData(newsURI);
    this.setState({ news: fetchedData });
    this.setState({ isLoading: false });
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
      <Container style={styles.container}>
        <HeaderScreen navigation={this.props.navigation} title="Sports" />
        <Content style={{ backgroundColor: "#fff" }}>
          {this.state.isLoading ? (
            <View style={{ marginTop: 20 }}>
              <Skeleton />
            </View>
          ) : (
            <Newslist news={this.state.news} />
          )}
        </Content>
        <FooterScreen navigation={this.props.navigation} />
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

export default Sport;
