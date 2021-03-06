import React, {useState, useEffect} from 'react';

const HookMouse = () => {
    const [x, setx]=useState(0)
    const[y,sety] =useState(0)


    const logMousePosition = e => {
        console.log('Mouse Event')
        setx(e.clientX)
        sety(e.clientY)
        }
    
    useEffect(()=> {
        window.addEventListener('mousemove', logMousePosition)
    },[] ) //Only rerender once
            //mimic Component didmount
    return (
        <div>
             X- {x} Y-{y}
        </div>
    );
}

export default HookMouse;
