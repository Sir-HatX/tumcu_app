import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Image,
  ActivityIndicator
} from "react-native";

const { width, height } = Dimensions.get("window");
const CODE_LENGTH = new Array(6).fill(0);

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      focused: false,
      isLoading: "none",
      timer: 60
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentWillUnmount() {
    this.mounted = false;
    clearTimeout(this.interval);
  }
  
  input = React.createRef();
  handlePress = () => {
    this.input.current.focus();
  };
  handleFocus = () => {
    this.setState({ focused: true });
  };
  handleBlur = () => {
    this.setState({
      focused: false
    });
  };
  handleChange = value => {
    this.setState(state => {
      if (state.value.length >= CODE_LENGTH.length) return null;
      return {
        value: (state.value + value).slice(0, CODE_LENGTH.length)
      };
    });
  };

  //   handle delete
  handleKeyPress = e => {
    if (e.nativeEvent.key === "Backspace") {
      this.setState(state => {
        return {
          value: state.value.slice(0, state.value.length - 1)
        };
      });
    }
  };

  
  //wait for server response
  _waitresponse = async => {
    this.setState({
      isLoading: "true"
    });
  };


  render() {
    this.state.timer === 0 ? this.props.navigation.navigate("welcome") : {};
    () => this.componentWillUnmount();
    const { value, focused } = this.state;
    const values = value.split("");
    const selectedIndex =
      values.length < CODE_LENGTH.length
        ? values.length
        : CODE_LENGTH.length - 1;
    const hideInput = !(values.length < CODE_LENGTH.length);

    return (
      <ImageBackground
        source={require("../../Assets/hex.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={[styles.veritext, {}]}>
          Enter the verification code from TUM CU message within
          <Text style={{ color: "black" }}>_{this.state.timer}_</Text>
          seconds!
        </Text>

        <View
          style={[
            styles.ActivityIndicatorcontainer,
            {
              display: this.state.isLoading
            }
          ]}
        >
          <ActivityIndicator size="large" color="white" />
        </View>
        <View style={styles.LogoContainer}>
          <Image
            source={require("../../Assets/tumcu_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.headertext}>Enter verification code</Text>

          <TouchableWithoutFeedback onPress={this.handlePress}>
            <View style={styles.wrap}>
              {CODE_LENGTH.map((v, index) => {
                const selected = values.length === index;
                const filled =
                  values.length === CODE_LENGTH.length &&
                  index === CODE_LENGTH.length - 1;
                const removeBorder =
                  index === CODE_LENGTH.length - 1
                    ? styles.noBorder
                    : undefined;
                return (
                  <View style={[styles.display, removeBorder]} key={index}>
                    <Text style={styles.text}>{values[index] || ""}</Text>
                    {(selected || filled) && focused && (
                      <View style={styles.shadows} />
                    )}
                  </View>
                );
              })}

              <TextInput
                keyboardType="numeric"
                autoFocus={true}
                value=""
                ref={this.input}
                onChangeText={this.handleChange}
                onKeyPress={this.handleKeyPress}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={[
                  styles.input,
                  {
                    left: selectedIndex * 32,
                    opacity: hideInput ? 0 : 1
                  }
                ]}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    );
  }
}
export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrap: {
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.5)",
    position: "relative",
    flexDirection: "row"
  },
  display: {
    borderRightWidth: 3,
    borderRightColor: "rgba(255, 255, 255, 0.5)",
    width: 32,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible"
  },
  text: {
    fontSize: 32,
    color: "white"
  },
  noBorder: {
    borderRightWidth: 0
  },
  input: {
    position: "absolute",
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "transparent",
    width: 32,
    top: 0,
    bottom: 0
  },
  shadows: {
    position: "absolute",
    left: -4,
    top: -4,
    bottom: -4,
    right: -4,
    borderColor: "rgba(0, 0, 100, 0.7)",
    borderWidth: 4
  },
  LogoContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  logo: {
    alignSelf: "center",
    width: "30%",
    height: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  headertext: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: "white",
    fontWeight: "500"
  },
  veritext: {
    position: "absolute",
    fontSize: 20,
    paddingHorizontal: 10,
    color: "white",
    fontWeight: "300",
    paddingTop: width / 2 - 20,
    paddingLeft: 20
  },
  ActivityIndicatorcontainer: {
    position: "absolute",
    top: height / 2,
    width: 60,
    height: 60,
    justifyContent: "center",
    paddingLeft: width / 2
  }
});
