import React, {useEffect, useState} from 'react';

const Message = () => {
    const [ coords, setCoords] = useState({x:0, y: 0});
    const {x,y} = coords;

    useEffect( () => {
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords)
            console.log(coords);

        }

        window.addEventListener('mouseover', mouseMove)
        return () => {
            window.removeEventListener('mouseover', mouseMove);
        }

    },[]);

    return (
        <div>
            <h2 className='text-success '>Eres Genial</h2>
            <p> x:{x}, y: {y}</p>
        </div>
    );
};

export default Message;