import React, { useState } from "react"
import Passshow from "./Passshow";

export default function Main() {

    // first of all I want to make a state for the password😊
    const [password, setpassWord] = useState("");

    // Second see how much length I need for the password😊
    const [lenght, setRangeValue] = useState(0);

    // Now I want to make a state for all of my checkbox if they are checked then I proceed further

    const [includeUpperChars, setIncludeUpperChars] = useState(false);
    const [includeLowerChars, setIncludeLowerChars] = useState(false);
    const [includeNumber, setIncludeNumbers] = useState(false);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

    const [strength, setStrength] = useState("");


    const handleUpperChange = (event) => {
        setIncludeUpperChars(event.target.checked);
    }
    const handleLoweerChange = (event) => {
        setIncludeLowerChars(event.target.checked);

    }
    const handleNumberChange = (event) => {
        setIncludeNumbers(event.target.checked);

    }
    const handleSpecialChange = (event) => {
        setIncludeSpecialChars(event.target.checked);
    }



    const handleChages = (event) => {
        setRangeValue(event.target.value)
        // console.log(lenght)
    };

    function generatePassword() {

        let characters = "";
        let newPassword = "";

        if (includeUpperChars) {
            let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            characters += upperCase;


        }

        if (includeLowerChars) {
            let lowerCase = "abcdefghijklmnopqrstuvwxyz";

            characters += lowerCase;

        }

        if (includeNumber) {
            let number = "0123456789";

            characters += number;


        }

        if (includeSpecialChars) {
            let specialChar = "!@#$%&*";
            characters += specialChar;


        }

        for (let i = 0; i < lenght; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters.charAt(randomIndex);
        }

        setpassWord(newPassword);
        let strength = "LOW";
        if (password.length >= 8 ) {
            strength = "STRONG";
        }
        else if (password.length >= 6 ) {
            strength = "MEDIUM";

        }
        setStrength(strength);


    }

    return (
        <div className="main">

            <Passshow password={password} />
            <div className="maincontainer">

                <div className="allcheckbox">
                    <div className="rangediv">
                        <label><span className="chlength">Length</span>

                            <input onChange={handleChages} className="range" type="range" min="0" max="10" value={lenght} ></input>
                        </label>
                    </div>

                    <label>
                        <input checked={includeUpperChars} onChange={handleUpperChange} className="checkbox" type="checkbox"></input>Include Uppercase Letters
                    </label>

                    <label>
                        <input checked={includeLowerChars} onChange={handleLoweerChange} className="checkbox" type="checkbox"></input>Include Lowercase Letters
                    </label>


                    <label>
                        <input checked={includeNumber} onChange={handleNumberChange} className="checkbox" type="checkbox"></input>Include Numbers
                    </label>



                    <label>
                        <input checked={includeSpecialChars} onChange={handleSpecialChange} className="checkbox" type="checkbox"></input>Include Symbols
                    </label>


                </div>

                <div className="strength">
                    <h1 className="strength--h1">STRENGTH</h1>
                    <p className="strength--type">{strength}</p>
                </div>
                <div>
                    <button onClick={generatePassword} className="generate-btn">GENERATE</button>
                </div>


            </div>
        </div>

    )
}

