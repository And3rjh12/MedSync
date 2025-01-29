import { StyleSheet } from "react-native";

const appointmentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#4CAF50",
    borderWidth: 1.5,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    marginTop: 12,
    color: "green",
    textAlign: "center",
    fontSize: 16,
  },
});

export default appointmentStyles;
