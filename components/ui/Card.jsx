import { StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/colors";

const Card = ({ children, style }) => {
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.primary400]}
      style={[styles.card, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: deviceWidth < 380 ? 8 : 16,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
