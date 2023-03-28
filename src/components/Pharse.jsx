import React from "react";

const Pharse = ({ pharseRandom, author }) => {
    return (
        <p className="App__pharse">
            {pharseRandom.phrase}
            <br />
            <br />
            Autor: {pharseRandom.author}
        </p>
    );
};

export default Pharse;
