import {
  StyleSheet,
  useWindowDimensions,
  View,
  StatusBar,
  Alert,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { AntDesign } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import RoundLogger from "../components/ui/RoundLogger";

function generateRandomNumberBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({
  userNumber,
  showGameOver,
  setGuessRounds,
  guessRounds,
}) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === userNumber) {
      showGameOver();
    }
  }, [currentGuess, userNumber, showGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "higher") {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    setCurrentGuess(newRndNumber);
    console.log(guessRounds);
  }
  const paddingHorizontal = height < 480 ? 0 : 30;
  const marginTop = height < 480 ? 15 : 100;
  const flexDirection = height < 480 ? "row" : "column";
  return (
    <View
      style={[
        styles.screen,
        {
          paddingHorizontal: paddingHorizontal,
          marginTop: marginTop,
          flexDirection: flexDirection,
        },
      ]}
    >
      <View>
        <Title>Oppenent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <Title style={{ color: "white" }}>Higher or lower ..?</Title>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onClickButton={nextGuessHandler.bind(this, "higher")}
              >
                <AntDesign name="pluscircleo" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onClickButton={nextGuessHandler.bind(this, "lower")}
              >
                <AntDesign name="minuscircleo" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
      <View style={{ margin: 24, flex: 1 }}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <RoundLogger roundNumber={itemData}></RoundLogger>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
