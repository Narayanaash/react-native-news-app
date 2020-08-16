import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View,
  Thumbnail,
  List,
  ListItem,
} from "native-base";
import moment from "moment";

import styles from "./styles";

const listOne = require("../../../assets/contacts/news.jpg");
import FooterScreen from "../footer/footer";
import Skeleton from "../skeleton/skeleton";
import DeckSkeleton from "../skeleton/deckSkeleton";
import DeckSwiper from "../deckswiper/deckswiper";
import Homenewslist from "../newslist/homenewslist";
import { fetchData } from "../../api/api";
const swiperNewsURI =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=ad56a8b4ed7343d5962addccc3e77b13";
const newsURI =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=ad56a8b4ed7343d5962addccc3e77b13";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      news: null,
      isLoading2: true,
      news2: null,
    };
  }

  async componentDidMount() {
    const articles2 = await fetchData(swiperNewsURI);
    this.setState({ news2: articles2 });
    this.setState({ isLoading2: false });

    const articles = await fetchData(newsURI);
    this.setState({ news: articles });
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.logo}>
              <Icon name="globe" style={{ color: "#fff" }} /> FEKNEWS
            </Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Searchbar")}
            >
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        <View
          style={{
            flex: 1,
            padding: 5,
            paddingTop: 2,
            zIndex: 9,
            paddingBottom: 25,
            backgroundColor: "#ffffff",
          }}
        >
          {this.state.isLoading2 ? (
            <DeckSkeleton />
          ) : (
            <DeckSwiper news2={this.state.news2} />
          )}
        </View>

        <Content style={{ backgroundColor: "#fff" }}>
          {this.state.isLoading ? (
            <Skeleton />
          ) : (
            <Homenewslist news={this.state.news} />
          )}
        </Content>
        <FooterScreen navigation={this.props.navigation} active="home" />
      </Container>
    );
  }
}

export default Home;
