import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F0F2",
    alignItems: "center",
    padding: 20,
  },
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
  logo: {
    width: "90%",  
    height: "160%",  
    resizeMode: "contain", 
  },
  headerTextContainer: {
    marginLeft: 15,  
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#6E6E6E",
    letterSpacing: 1,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  gridItem: {
    width: "42%",
    height: 120,
    backgroundColor: "#ffffff",
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  gridText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  botImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  
});

export default homeStyles;