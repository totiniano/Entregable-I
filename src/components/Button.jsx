import getRamdomArray from "../utils/getRandomArray";
import pharses from "../utils/phrases.json";

const Button = ({ setPharseRandom, setnumberImg }) => {
    const handleChangePharse = () => {
        const newPharse = getRamdomArray(pharses);
        setPharseRandom(newPharse);
        setnumberImg(getRamdomArray([1, 2, 3, 4]));
    };

    return (
        <button className="App__btn" onClick={handleChangePharse}>
            Probar mi suerte
        </button>
    );
};

export default Button;
