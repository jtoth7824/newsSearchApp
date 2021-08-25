import React, { useContext} from "react";
import UserContext from "../../utils/userContext";
import DisplayNews from "../DisplayNews";

function SearchResults (props) {
    // set context to the news search results
    const {news} = useContext(UserContext);

    return (
        <div className="container-fluid containerColor marginBottomCont">
            {news.length ? (       
                <div className="row">     
                    <div className="container-fluid">
                        <div className="card ">
                            <div className="card-body interiorCardColor h-100">
                                <h2 className="card-title mytextColor"><strong>Search Results</strong></h2>
                                <div className="row row-cols-1">
                                    <div>
                                        {news.map(result => (
                                            <div key={result.objectID}>
                                                <DisplayNews 
                                                    newValueNews={props.newValue}
                                                    newSetNewsMethod={props.change}
                                                    id = {result.objectID}
                                                    author = {result.author}
                                                    title = {result.title}
                                                    link = {result.url}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="row text-center h-100">
                        <div className="col-md-12 text-center my-auto">
                            <br />
                            <br />
                            <h3><strong>No Results to Display.</strong></h3>
                        </div>
                    </div>
                </div>
            )}                    
        </div>
    )
}

export default SearchResults;