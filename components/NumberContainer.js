import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../constants/colors";
import React from "react";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    borderColor: Colors.primary400,
    margin: deviceWidth < 380 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontFamily: "open-sans",
    fontSize: deviceWidth < 380 ? 32 : 48,
    color: Colors.primary400,
  },
});
