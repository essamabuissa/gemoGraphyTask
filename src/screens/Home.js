import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import RepoCard from "../components/RepoCard";
import { fetchRepos } from "../redux/actions/repos";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

const Home = ({ repos }) => {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setPage(page + 1);
    dispatch(fetchRepos(page));
  };

  const _renderItem = (repo) => {
    return (
      <RepoCard
        name={repo.item.name}
        description={repo.item.description}
        stars={repo.item.stargazers_count}
        ownerName={repo.item.owner.login}
        ownerImage={repo.item.owner.avatar_url}
      />
    );
  };

  const _renderFooter = () => {
    return <ActivityIndicator size="large" />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={{ fontSize: 25 }}>Trending Repos</Text>
      <FlatList
        data={repos}
        re
        renderItem={_renderItem}
        keyExtractor={(repo) => repo.name}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={_renderFooter}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    repos: state.ReposReducer.repos,
  };
};

export default connect(mapStateToProps)(Home);
