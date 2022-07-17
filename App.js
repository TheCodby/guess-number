import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState([]);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  let screen = <StartGameScreen onChooseNumber={setUserNum} />;

  if (userNum) {
    screen = (
      <GameScreen
        userNumber={userNum}
        showGameOver={setGameIsOver.bind(this, true)}
        guessRounds={guessRounds}
        setGuessRounds={setGuessRounds}
      />
    );
  }
  if (gameIsOver && userNum) {
    screen = (
      <GameOverScreen
        userNumber={userNum}
        onStartNewGame={restartGame}
        guessRounds={guessRounds}
      />
    );
  }
  function restartGame() {
    setUserNum(null);
    setGameIsOver(false);
    setGuessRounds([]);
    screen = <StartGameScreen onChooseNumber={setUserNum} />;
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#E5E6E4", "#fff"]} style={styles.rootContainer}>
        <ImageBackground
          source={require("./assets/background.png")}
          style={styles.rootContainer}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
