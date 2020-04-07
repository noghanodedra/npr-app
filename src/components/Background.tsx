import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { theme } from "helpers";

const Background = ({ children, ...props }) => (
  <ImageBackground source={null} resizeMode="repeat" style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 2,
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(Background);
