import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getWord1, getWord2, getStatusBreakify } from "../../../store/reselect";
import { getArrayWords } from "../../../functions";
import "../styles.css";

function TexView() {
    const word1 = useSelector(getWord1);
    const word2 = useSelector(getWord2);
    const isBreakify = useSelector(getStatusBreakify);
    const [listWords1, setListWords1] = useState([]);
    const [listWords2, setListWords2] = useState([]);

    const lookForWord = () => {
        const arrayWord1 = getArrayWords(word1);
        setListWords1([...arrayWord1]);
        const arrayWord2 = getArrayWords(word2);
        setListWords2([...arrayWord2]);
    };

    useEffect(() => {
        if (isBreakify) {
            lookForWord();
        }
    }, [isBreakify]);

    useEffect(() => {
        if(listWords1?.length) console.log("#lus1", listWords1);
    }, [listWords1]);

    useEffect(() => {
        if(listWords2?.length) console.log("#lus2", listWords2);
    }, [listWords2]);

    return (
        <div className="flex flex-column div-textView">
            <h1>{word1}</h1>
            <h1>{word2}</h1>
        </div>
    );
}

export default TexView;