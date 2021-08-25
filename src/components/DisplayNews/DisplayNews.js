import React from "react";

function Project (props) {

    return (
        <div>
            <div className="col-xs-12 col-sm-12  marginBottomCol" key={props.id}>
                <div className="card h-100">
                    <div className="card-body bookCardColor cardBodyBorder">
                        <div className="row" style={{display: 'inline-block'}}>
                            <h5 className="card-title">{props.title}</h5>
                            <h5>Written by {props.author}</h5>
                        </div>
                        <div style={{ float: 'right'}}>
                            <a  href={props.link} target="_blank" className="btn myButton buttonMargin" rel="noreferrer noopener"><button className="myButton" target={props.link} rel="noreferrer noopener" >View Article</button></a>
                        </div>
                        <br />
                        <div className="row" style={{display: 'inline-block'}}>
                            <p className="card-text card-padding">{props.url}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;