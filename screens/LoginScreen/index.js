import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      justifyContent: "center"
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#cb6060"
  }
});
export default LoginScreen;