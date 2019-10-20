import React,{useState, useEffect} from 'react';

const HookCounter = () => {

    const [count, setcount] = useState(0)

useEffect(() => {
    document.title = `clicked  ${count} times`
})

    return (
        <div>
            <button onClick={()=> setcount(count +1 )}> Count {count}</button>
        </div>
    );
}

export default HookCounter;
