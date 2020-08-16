import { Vibration } from "react-native";
import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Thumbnail,
  List,
  ListItem,
  Spinner,
  Item,
  Input,
} from "native-base";
import styles from "./styles";

const listOne = require("../../../assets/contacts/news.jpg");
import Modal from "../modal/modal";
import FooterScreen from "../footer/footer";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isLoading: false,
      news: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  getNews = async () => {
    const DURATION = 50;
    Vibration.vibrate(DURATION);
    this.setState({ isLoading: true });
    try {
      let articles = await fetch(
        `http://newsapi.org/v2/everything?q=${this.state.search}&language=en&sortBy=publishedAt&apiKey=ad56a8b4ed7343d5962addccc3e77b13`
      );

      let result = await articles.json();
      articles = null;

      const news = result.articles;

      this.setState({ news: news });
      this.setState({ isLoading: false });
    } catch (error) {
      throw error;
    }
  };

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
    const { search } = this.state;
    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
          <Item rounded>
            <Input
              style={{ paddingLeft: 15 }}
              placeholder="Search"
              value={this.state.search}
              onChangeText={(val) => this.setState({ search: val })}
            />
            <Button transparent onPress={() => this.getNews()}>
              <Icon active name="search" />
            </Button>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <Button
            style={{
              marginHorizontal: 15,
              marginVertical: 15,
            }}
            rounded
            block
            onPress={() => this.props.navigation.goBack()}
          >
            <Text>Back</Text>
          </Button>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <List
              dataArray={this.state.news}
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
                      {`Source: ${item.source.name}`}
                    </Text>
                  </Body>
                  <Right />
                </ListItem>
              )}
            />
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

export default Searchbar;
