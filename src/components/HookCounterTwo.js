import React,{useState} from 'react';

const HookCounterTwo = () => {

    const InitialCount = 0;
    const [count, setcount] = useState(InitialCount)

const increament = () => {
    setcount(prevcount => prevcount + 1)
}

const decreament= () => {
    setcount(prevcount=> prevcount - 1)
}

    return (
        <div>
            <p> {count}</p>

            {/* not safe */}
            {/* <button onClick={() => setcount(count + 1)}> Increament </button>
            <button onClick={() => setcount(count -1)}> Decreament </button>
            <button onClick={() => setcount(InitialCount)}> Reset </button> */}


    <button onClick={() => increament()} > Increament </button>
    <button onClick={() => decreament()}>Decreament</button>
    <button onC lick ={() => setcount(InitialCount)}> Reset </button>

        </div>
    );
}

export default HookCounterTwo;
