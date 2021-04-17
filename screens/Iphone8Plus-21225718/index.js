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
      <View style={styles.View_1_26} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43cf/9226/9fc6c59ccb18071396ff46ce83c88bf3"
        }}
        style={styles.ImageBackground_1_28}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3043/8340/aaa6fda71c7b2c2ded79b6eef6b3adf0"
        }}
        style={styles.ImageBackground_1_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1406/ae5f/01a36eeba208925cf28e95faafcbe2ec"
        }}
        style={styles.ImageBackground_1_31}
      />
      <View style={styles.View_1_34}>
        <Text style={styles.Text_1_34}>Connection Status:</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9537/5426/a2394b3b80b85f841ae6e4e26cce807c"
        }}
        style={styles.ImageBackground_1_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/102b/53bb/50337c3528019e56602e1a7d84d347d3"
        }}
        style={styles.ImageBackground_1_49}
      />
      <View style={styles.View_1_50}>
        <Text style={styles.Text_1_50}>Mode:</Text>
      </View>
      <View style={styles.View_1_51}>
        <Text style={styles.Text_1_51}>Autonomous</Text>
      </View>
      <View style={styles.View_1_52}>
        <Text style={styles.Text_1_52}>Manual</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_26: {
    width: wp("66.9836956521739%"),
    minWidth: wp("66.9836956521739%"),
    height: hp("60.38647342995169%"),
    minHeight: hp("60.38647342995169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.342391304347828%"),
    top: hp("19.806763285024154%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_1_28: {
    width: wp("9.103260869565217%"),
    minWidth: wp("9.103260869565217%"),
    height: hp("15.458937198067632%"),
    minHeight: hp("15.458937198067632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.51086956521739%"),
    top: hp("79.46859903381642%")
  },
  ImageBackground_1_29: {
    width: wp("21.331525885540508%"),
    minWidth: wp("21.331525885540508%"),
    height: hp("0.0012847818749178435%"),
    minHeight: hp("0.0012847818749178435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.30978260869566%"),
    top: hp("87.19678132430367%")
  },
  ImageBackground_1_31: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("41.54589371980676%"),
    minHeight: hp("41.54589371980676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.152173913043478%"),
    top: hp("47.82608695652174%")
  },
  View_1_34: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    minHeight: hp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6304347826086956%"),
    top: hp("5.314009661835748%")
  },
  Text_1_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_48: {
    width: wp("5.163043478260869%"),
    minWidth: wp("5.163043478260869%"),
    height: hp("11.594202898550725%"),
    minHeight: hp("11.594202898550725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.989130434782609%"),
    top: hp("16.425120772946862%")
  },
  ImageBackground_1_49: {
    width: wp("5.163043478260869%"),
    minWidth: wp("5.163043478260869%"),
    height: hp("11.594202898550725%"),
    minHeight: hp("11.594202898550725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.152173913043478%"),
    top: hp("14.009661835748794%")
  },
  View_1_50: {
    width: wp("11.684782608695652%"),
    minWidth: wp("11.684782608695652%"),
    minHeight: hp("6.763285024154589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.95652173913044%"),
    top: hp("5.072463768115942%")
  },
  Text_1_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_51: {
    width: wp("11.548913043478262%"),
    minWidth: wp("11.548913043478262%"),
    minHeight: hp("4.830917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.09239130434783%"),
    top: hp("13.768115942028986%")
  },
  Text_1_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_52: {
    width: wp("11.820652173913043%"),
    minWidth: wp("11.820652173913043%"),
    minHeight: hp("5.072463768115942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.82065217391305%"),
    top: hp("20.531400966183575%")
  },
  Text_1_52: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
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
