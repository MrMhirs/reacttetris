import { useState } from "react";

import { randomTetromino } from "../tetrominos";


export const usePlayer = () => {
    // useState is ES6 if not it would be:
    //     const playerState = useState();
    //     const player = playerScore[0]
    //     const setPlayer = playerState[1]
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0},
        tetromino: randomTetromino().shape,
        collided: false,
    });


    return [player];

}