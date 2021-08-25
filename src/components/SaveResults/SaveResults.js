import React from "react";

function SaveResults (props) {

    return (
        <div>
            <div className="col-xs-12 col-sm-12  marginBottomCol" key={props.id}>
                <div className="card h-100">
                   <div className="card-body bookCardColor cardBodyBorder">
                        <div className="row" style={{display: 'inline-block'}}>
                            <h5 className="card-title">{props.history}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaveResults;