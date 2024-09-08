import React from "react";
import C from "./C"

function B({np1},{np2}){

    //function return somethings
    //react function return jsx syntax

    return (
        <React.Fragment>
            <h4>{np1}</h4>
            <C />
        </React.Fragment>
    )
}

export default B;