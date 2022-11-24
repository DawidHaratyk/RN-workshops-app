import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputWithSubmitOption } from "../components/InputWithSubmitOption/InputWithSubmitOption";
import { Header } from "../components/Typography/Header/Header";
import { PostsList } from "../components/PostsList/PostsList";
import { UserImageCircle } from "../components/UserImageCircle/UserImageCircle";
import { Body } from "../components/Typography/Body/Body";

export const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchInputContainer}>
        <InputWithSubmitOption
          value=""
          onChangeText={() => null}
          placeholder="search"
        />
      </View>
      <View style={styles.postsListContainer}>
        <Header
          title="Posts"
          variant="h5"
          additionalStyles={{
            textAlign: "left",
            marginLeft: 15,
            marginBottom: 3,
          }}
        />
        {/* <PostsList data={postsData} postDisplayType="show-image-only" /> */}
      </View>
      <View style={styles.paddingWrapper}>
        <Header
          title="People"
          variant="h5"
          additionalStyles={{ textAlign: "left", marginBottom: 3 }}
        />
        {/* {usersData.map((userObj) => (
          <View style={styles.userContainer}>
            <UserImageCircle image={userObj.image} size="small" />
            <Body title={userObj.name} variant="small" />
          </View>
        ))} */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  paddingWrapper: {
    marginHorizontal: 15,
  },
  postsListContainer: {
    marginVertical: 20,
  },
});
