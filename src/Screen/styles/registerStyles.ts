import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fc",
    paddingTop: 20,
  },
  scrollContainer: {
    padding: 10,
    flexGrow: 1,
    justifyContent: "center",
  },
  medSyncTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 5,
  },
  createAccountTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
    paddingLeft: 12,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#333",
  },
  inputIcon: {
    marginRight: 10,
  },
  pickerContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  picker: {
    height: "100%",
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  button: {
    height: 45,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
    color: "green",
  },
});

export default registerStyles;
