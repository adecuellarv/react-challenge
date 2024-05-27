import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWord1, getWord2, getStatusBreakify } from "../../../store/reselect";
import { periodicTable } from "../../../constants";
import "../styles.css";

function TexView() {
    const word1 = useSelector(getWord1);
    const word2 = useSelector(getWord2);
    const isBreakify = useSelector(getStatusBreakify);

    const lookForWor1 = () => {
        periodicTable.map( i => {
            const regex = new RegExp(i?.symbol.toLowerCase());
            const resp =  regex.test(word1.toLowerCase());

            console.log("#res", resp);
        });
    };

    useEffect(() => {
        if(isBreakify){
            lookForWor1();
        }
    },[isBreakify]);

    return (
        <div className="flex flex-column div-textView">
            <h1>{word1}</h1>
            <h1>{word2}</h1>
        </div>
    );
}

export default TexView;