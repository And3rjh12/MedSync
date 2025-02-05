import { StyleSheet } from "react-native";

const appointmentStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  darkText: {
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    color: "#000",
    backgroundColor: "#fff",
  },
  darkInput: {
    backgroundColor: "#333",
    color: "#fff",
    borderColor: "#555",
  },
  picker: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    color: "#000",
  },
  darkPicker: {
    backgroundColor: "#333",
    color: "#fff",
    borderColor: "#555",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  darkButton: {
    backgroundColor: "#1e8e3e",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  darkButtonText: {
    color: "#fff",
  },
  message: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginTop: 15,
  },
  darkMessage: {
    color: "#ff6666",
  },
  patientInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  darkPatientInfo: {
    backgroundColor: "#1e1e1e",
  },
  datePickerButton: {
    marginVertical: 10,
  },
  timePickerButton: {
    marginVertical: 10,
  },
  themeToggle: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  
});
export default appointmentStyles;
