import { Text, View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  orange: "#E85D04",
  orangeLight: "#F48C06",
  orangeWarm: "#DC2F02",
  cream: "#FFF8F0",
  peach: "#FFE5D9",
  brown: "#5C4033",
  brownLight: "#8B7355",
};

export default function Index() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orangeWarm} />
      <View style={styles.content}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Recipes Collect</Text>
          <Text style={styles.tagline}>
            Your cozy place for recipes you love
          </Text>
        </View>
        <View style={styles.decorativeCircle} />
        <View style={styles.decorativeCircleSmall} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  titleBlock: {
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: COLORS.orangeWarm,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  tagline: {
    marginTop: 12,
    fontSize: 18,
    color: COLORS.brownLight,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 26,
  },
  decorativeCircle: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.peach,
    opacity: 0.8,
    top: "25%",
    right: -60,
  },
  decorativeCircleSmall: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.orangeLight,
    opacity: 0.25,
    bottom: "30%",
    left: -40,
  },
});
