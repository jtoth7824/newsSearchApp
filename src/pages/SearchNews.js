import React, { useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardBtn from "../components/CardBtn";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import { Row, Container } from "../components/Grid";
import { useTodoContext} from "../utils/store";

function Search() {
    // set state for news array, the searchterm
    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm]= useState();
    const [state, dispatch] = useTodoContext();

    // function that retrieves news based upon searchterm when user clicks Search button
    function handleBtnClick(event) {
      var searchHistory = [];

      searchHistory = state.searchTerms;
      event.preventDefault();
      // call hacker news api to retrieve articles based upon searchTerm
      API.getHackerNews(searchTerm)
        .then(news => {
           // store returned list into state variable of news
           setNews(news.data.hits);
           console.log(news.data.hits[3].url);
         })
       .catch(err => console.log(err));
       searchHistory.push(searchTerm);
       // store new search term into "store" for state management
       dispatch({
        type: "searchTerms",
        searchTerms: searchHistory
      });
    }

    // function to update searchterm in state as user changes the input box value
    function onChangeSearchTerm(e) {
      return setSearchTerm(e.target.value);
    }

    // return the rendered search results page
    return (
      <Container fluid>
        <Jumbotron>
          <h3>Search for Hacker News articles</h3>
        </Jumbotron>
        <Row>
          <UserContext.Provider value={{news, searchTerm, handleBtnClick}}>
            <div className="container-fluid">
              <div className="card interiorCardColor">
                <h4 className="formPadding mytextColor"><strong>News Search</strong></h4>
                <form className="formPadding">
                  <input
                    value={searchTerm}
                    onChange={onChangeSearchTerm}
                    name="searchTerm"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search Term"
                  />
                <CardBtn /> 
                </form>
              </div>
            </div>
            <SearchResults newValue={news} change={setNews}/>
          </UserContext.Provider>
        </Row>
      </Container>
    );
}

export default Search;