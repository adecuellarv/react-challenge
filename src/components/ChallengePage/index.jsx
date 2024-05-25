import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../../store/actions/word";
import { getWord } from "../../store/reselect";

function ChallangePage() {
    const dispatch = useDispatch();
    const word = useSelector(getWord);
    return (
        <div>
            <button onClick={() => dispatch(setWord('ade'))}>Set word</button>
        </div>
    )
}

export default ChallangePage