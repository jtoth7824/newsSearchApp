import React from "react";
import SaveResults from "../components/SaveResults";
import Jumbotron from "../components/Jumbotron";
import {Row, Container} from "../components/Grid";
import { useTodoContext} from "../utils/store";

function SavedNews () {

    const [state, dispatch] = useTodoContext();

    // return the rendered saved History page
    return (
            <Container fluid>
                <Jumbotron>
                  <h1><strong>Hacker News Search</strong></h1>
                  <br>
                  </br>
                  <h3>Search for Hacker News Articles</h3>
                </Jumbotron>
                <Row>
                <div className="container-fluid containerColor marginBottomCont">
                    {state.searchTerms.length ? (
                        <div className="row">
                            <div className="container-fluid">
                                <div className="card">
                                    <div className="card-body interiorCardColor">
                                        <h2 className="card-title mytextColor">Saved History</h2>
                                        <div className="row row-cols-1">
                                            <div>
                                                {state.searchTerms.map(result => (
                                                    <div >
                                                        <SaveResults 
                                                            history = {result}
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
                        <div className="row text-center h-100">
                            <div className="col-md-12 text-center my-auto">
                                <h3><strong>No Saved History</strong></h3>
                            </div>
                        </div>
                    )}
                </div>
                </Row>
            </Container>
    )
}

export default SavedNews;