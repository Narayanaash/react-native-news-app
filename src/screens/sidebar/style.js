const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  fakenews: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 14 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 14 : deviceHeight / 12,
    fontSize: 35,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  }
};
