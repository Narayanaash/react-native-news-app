import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  View,
  DeckSwiper,
  Card,
  IconNB,
  CardItem,
  Thumbnail,
  List,
  ListItem,
  Toast,
} from "native-base";
import {Image} from 'react-native';

import styles from "./styles";


const cardOne = require("../../../assets/news.jpg");
const listOne = require("../../../assets/contacts/news.jpg");

const datas = [
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
  {
    img: listOne,
    text: "Search worldwide news with code",
    note: "Get breaking news headlines, and search for articles from news"
  },
];

const cards = [
  {
    name: "Search worldwide news with code",
    text: "Get breaking news headlines, and search for articles from news",
    image: cardOne
  },
  {
    name: "Search worldwide news with code",
    text: "Get breaking news headlines, and search for articles from news",
    image: cardOne
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    });
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
            <Button transparent onPress={() => alert('Ruko jara sabar karo!')}>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>

        <View style={{ flex: 1, padding: 5, paddingTop: 2, zIndex: 9, marginBottom: 20 }}>
          <DeckSwiper
            dataSource={cards}
            looping={true}
            renderItem={item =>
              <Card style={{ elevation: 2, borderRadius: 6 }}>
                <CardItem style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}>
                  <Left>
                    <Body>
                      <Text style={{fontSize: 20, marginLeft: -15}}>
                        {item.name}
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
                      height: 180
                    }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6 }}>
                  <Left>
                    <Button transparent>
                      <Icon name="thumbs-up" />
                      <Text>
                        12,521
                      </Text>
                    </Button>
                  </Left>
                  <Body>
                  <Button transparent>
                      <Icon name="chatbubbles" />
                      <Text>
                        12,521
                      </Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11 h ago</Text>
                  </Right>
                </CardItem>
              </Card>}
          />
        </View>
        
        <Content style={{backgroundColor: "#fff"}}>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail onPress={() =>
                Toast.show({
                  text: "Ruko jara sabar karo!",
                  buttonText: "Thik hai",
                  type: "danger"
                })}>
                <Left>
                  <Thumbnail style={{width: 80, borderRadius: 2}} source={data.img} />
                </Left>
                <Body>
                  <Text numberOfLines={1}>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                </Body>
                <Right />
              </ListItem>}
          />
        </Content>
      
        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="home" />
              <Text>Home</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="film" />
              <Text>Video</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="paper" />
              <Text>About</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
