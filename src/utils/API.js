import axios from "axios";

export default {
  //hacker news search api
  getHackerNews: function(searchTerm) {
    console.log(searchTerm);
      return axios.get("http://hn.algolia.com/api/v1/search?query=" + searchTerm);
  },
};
