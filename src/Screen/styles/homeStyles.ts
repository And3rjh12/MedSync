import { StyleSheet } from "react-native";


const homeStyles = StyleSheet.create({
  // main screen container
  container: {
    flex: 1,
    backgroundColor: "#E8F0F2",
    alignItems: "center",
    padding: 20,
  },

  // header with logo and text
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 120,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 5,
  },

  // style for the logo inside the header
  logo: {
    width: "90%",
    height: "160%",
    resizeMode: "contain",
  },

  // text container in the header
  headerTextContainer: {
    marginLeft: 15,
  },

  // container for grid elements
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },

  // style each item in the grid
  gridItem: {
    width: "42%",
    height: 120,
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },

  // text inside grid elements
  gridText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  

  // icons inside grid elements
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  // chat button
  chatButton: {
    marginTop: 20,
    backgroundColor: "#D1D1D1",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
    elevation: 2,
  },

  chatButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  skeletonGridItem: {
    width: "48%", // Tamaño para que entren dos en una fila
    height: 180,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },

  // floating button (bot)
  botButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  // image inside floating button (bot)
  botImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});

export default homeStyles;