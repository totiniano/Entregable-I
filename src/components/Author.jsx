import React from "react";

const Author = ({ pharseRandom }) => {
    console.log(pharseRandom.author);
    return <p className="App__pharse">Autor: {pharseRandom.author}</p>;
};

export default Author;
