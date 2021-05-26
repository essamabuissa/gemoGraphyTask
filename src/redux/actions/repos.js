import axios from "axios";
import moment from "moment";
import { FETCH_REPOS } from "./actionTypes";

export const fetchRepos = (page) => async (dispatch) => {
  console.log(page);
  try {
    const last30Days = moment().subtract(30, "days").format("YYYY-MM-DD");
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${last30Days}&sort=stars&order=desc&page=${page}`
    );

    dispatch({
      type: FETCH_REPOS,
      payload: response.data.items,
    });
  } catch (error) {
    alert(error);
  }
};
