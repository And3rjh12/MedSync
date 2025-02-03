import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  //main screen container
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  // login Form Container
  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3, // shadow
    alignItems: "center",
    width: "90%",
  },

  // title screem(MedSync)
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 15,
  },
  //login icon container
  iconContainer: {
    marginBottom: 15,
    borderRadius: 50,
    padding: 12,
    backgroundColor: "#e8f5e9", // Color de fondo suave para el icono
  },
  // Input container
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#4CAF50",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 10,
    width: "100%",
  },
  // text input field style
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  //icon spacing within input
  inputIcon: {
    marginRight: 10,
  },
  // main login button
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
    elevation: 5,
  },
  //text inside the login button
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  //error message
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 8,
  },
  //Success message
  success: {
    color: "green",
    textAlign: "center",
    marginBottom: 8,
  },
  //Redirect text to the registration screen
  registerText: {
    color: "#4CAF50",
    textAlign: "center",
    marginTop: 16,
  },
  //
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 16,
  },
  //
  socialIconButton: {
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 50,
    backgroundColor: "#f4f8f2",
    elevation: 5,
  },
});

export default loginStyles;