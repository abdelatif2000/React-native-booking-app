import { Platform, StyleSheet ,StatusBar} from  "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 10,
  },
});
