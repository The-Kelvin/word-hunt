import React from 'react';
import './Definitions.css';

function Definitions({ word, meanings, category, LightMode }) {
    return (
        <div className="meanings">

            {
                meanings[0] && word && category === 'en' && (
                    <audio
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{backgroundColor: "#fff", borderRadius: 10}}
                        controls
                    >
                        Your Browser doesn't support audio element.
                    </audio>
                )
            }

            {word === "" ? (
                <span className="subTitle">Start by typing a word in search</span>
            ) : (
                meanings.map((meaning) => meaning.meanings.map(item => (
                    item.definitions.map(def => (
                        <div
                            className="singleMean"
                            style={{
                                backgroundColor: LightMode ? "#282c34" : "white",
                                color: LightMode ? "white" : "black"
                            }}
                        >
                            <b>{def.definition}</b>
                            {
                                def.example && (
                                    <span>
                                        <br/><br/><strong>Example : </strong>
                                        {def.example}
                                    </span>
                                )
                            }
                            {
                                def.synonyms && (
                                    <span>
                                        <br/><br/><strong>Synonyms : </strong>
                                        {def.synonyms.map(s => `${s}, `)}
                                    </span>
                                )
                            }
                            <hr style={{backgroundColor: "black", width: "100%"}}/>
                        </div>
                    ))
                )))
            )}
        </div>
    );
}

export default Definitions;