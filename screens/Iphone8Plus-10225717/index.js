import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a81/fcf2/c75e6191220715fa1e8a9de82b2f9802"
        }}
        style={styles.ImageBackground_1_6}
      />
      <View style={styles.View_1_11} />
      <View style={styles.View_1_21}>
        <View style={styles.View_1_12}>
          <Text style={styles.Text_1_12}>Start</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_6: {
    width: wp("48.91304347826087%"),
    minWidth: wp("48.91304347826087%"),
    height: hp("60.38647342995169%"),
    minHeight: hp("60.38647342995169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.445652173913043%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_11: {
    width: wp("27.173913043478258%"),
    minWidth: wp("27.173913043478258%"),
    height: hp("19.32367149758454%"),
    minHeight: hp("19.32367149758454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.315217391304344%"),
    top: hp("70.77294685990339%"),
    backgroundColor: "rgba(39, 134, 246, 1)"
  },
  View_1_21: {
    width: wp("38.858695652173914%"),
    minWidth: wp("38.858695652173914%"),
    height: hp("32.850241545893724%"),
    minHeight: hp("32.850241545893724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.47282608695652%"),
    top: hp("64.00966183574879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_12: {
    flexGrow: 1,
    width: wp("38.858695652173914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 414 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
