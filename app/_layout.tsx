import { Stack } from "expo-router";

const theme = {
  orange: "#E85D04",
  orangeWarm: "#DC2F02",
  cream: "#FFF8F0",
  brown: "#5C4033",
};

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.cream },
      }}
    />
  );
}
