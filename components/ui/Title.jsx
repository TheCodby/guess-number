import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import React from "react";

const Title = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.primary400,
    textAlign: "center",
    padding: 12,
    fontFamily: "open-sans-bold",
  },
});
