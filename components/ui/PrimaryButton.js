import React, { useState } from "react";
import { StyleSheet, Text, Pressable, Animated } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onClickButton }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const pressHandler = () => {
    onClickButton();
  };
  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const scaleAnim = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const opacityAnim = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const animatedStyle = {
    scaleY: scaleAnim,
    scaleX: scaleAnim,
    opacity: opacityAnim,
  };
  return (
    <Pressable onPress={pressHandler} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View style={{ ...styles.container, ...animatedStyle }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary400,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans",
  },
});
