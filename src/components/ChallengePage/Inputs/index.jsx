import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setWord1, setWord2 } from "../../../store/actions/word";
import "../styles.css";

function Inputs() {
    const dispatch = useDispatch();
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    useEffect(() => {
        if (input1?.length) dispatch(setWord1(input1));
    }, [input1]);

    useEffect(() => {
        if (input2?.length) dispatch(setWord2(input2));
    }, [input2]);

    return (
        <div className="flex flex-row div-inputs">
            <div>
                <input
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                />
            </div>
            <div>
                <input
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Inputs;