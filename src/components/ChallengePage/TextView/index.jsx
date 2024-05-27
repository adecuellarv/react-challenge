import React from "react";
import { useSelector } from "react-redux";
import { getWord1, getWord2 } from "../../../store/reselect";
import "../styles.css";

function TexView() {
    const word1 = useSelector(getWord1);
    const word2 = useSelector(getWord2);

    return (
        <div className="flex flex-column div-textView">
            <h1>{word1}</h1>
            <h1>{word2}</h1>
        </div>
    );
}

export default TexView;