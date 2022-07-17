import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Text,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ userNumber, onStartNewGame, guessRounds }) => {
  const { width, height } = useWindowDimensions();

  const imageSize = height < 480 ? 240 : 300;
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View
        style={[styles.imageContainer, { width: imageSize, height: imageSize }]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Title style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{Object.keys(guessRounds).length}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Title>
      <PrimaryButton onClickButton={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 17,
  },
  highlight: {
    color: Colors.primary500,
  },
});
