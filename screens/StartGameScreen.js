import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onChooseNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: {
              backgroundColor: Colors.primary400,
              borderRadius: 28,
              paddingVertical: 8,
              paddingHorizontal: 16,
              margin: 4,
              elevation: 2,
            },
            onPress: setEnteredNumber(""),
          },
        ]
      );
      return;
    }
    onChooseNumber(chosenNumber);
  }

  const padding = height < 480 ? 50 : 12;
  const marginTop = height < 480 ? StatusBar.currentHeight : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView behavior="position" style={styles.screen}>
        <View
          style={[
            styles.screen,
            { paddingHorizontal: padding, marginTop: marginTop },
          ]}
        >
          <Title style={styles.title}>Guess my number</Title>
          <Card>
            <Title style={{ color: "white" }}>Enter a number</Title>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={setEnteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onClickButton={setEnteredNumber.bind("")}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onClickButton={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

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
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    color: "#fff",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
