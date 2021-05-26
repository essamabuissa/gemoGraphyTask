import React from "react";

import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import Stars from "@expo/vector-icons/AntDesign";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    padding: 20,
    borderColor: "rgb(120,120,120)",
  },
  description: {
    marginTop: 5,
  },
  ownerName: {
    paddingLeft: 5,
  },
  repoName: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const RepoCard = ({ name, description, ownerName, stars, ownerImage }) => {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  return (
    <View style={styles.card}>
      <Text style={styles.repoName}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Image
            source={{ uri: ownerImage }}
            style={{
              width: width * 0.1,
              height: height * 0.03,
              borderWidth: 0,
            }}
          />
          <Text style={styles.ownerName}> {ownerName}</Text>
        </View>
        <View style={styles.row}>
          <Stars name={"star"} />
          <Text> {kFormatter(stars)}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepoCard;
