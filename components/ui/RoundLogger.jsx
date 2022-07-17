import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const RoundLogger = ({ roundNumber }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>#{roundNumber.index}</Text>
      <Text style={styles.text}>{roundNumber.item}</Text>
    </View>
  );
};

export default RoundLogger;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 8,
    padding: 15,
    backgroundColor: Colors.primary400,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
