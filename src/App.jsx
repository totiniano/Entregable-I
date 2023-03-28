import "./App.css";
import Button from "./components/Button";
import Pharse from "./components/Pharse";
import pharses from "./utils/phrases.json";
import getRamdomArray from "./utils/getRandomArray";
import { useState } from "react";

const imgs = [1, 2, 3, 4];

function App() {
    const [pharseRandom, setPharseRandom] = useState(getRamdomArray(pharses));
    const [numberImg, setnumberImg] = useState(getRamdomArray(imgs));

    const appStyle = {
        backgroundImage: `url('/backgrounds/fondo${numberImg}.png')`,
    };

    return (
        <div style={appStyle} className="App">
            <h1 className="App__title">Galletas de la Fortuna</h1>
            <Button
                setPharseRandom={setPharseRandom}
                setnumberImg={setnumberImg}
            />
            <div>
                <img
                    className="imgPharse"
                    src="/backgrounds/fondo5.png"
                    alt="Small Image"
                />
            </div>
            <Pharse pharseRandom={pharseRandom} />
        </div>
    );
}

export default App;
