import React,{useState, useEffect} from 'react';

const HookCounter = () => {

    const [count, setcount] = useState(0)
    const [name, setname] = useState('')

useEffect(() => {
    document.title = `clicked  ${count} times`
    console.log('You Change the Document Title')
}, [count]) //only execute the useEffec with changes made in count

    return (
        <div>
            <input value={name} onChange={e => setname(e.target.value)}></input>
            <button onClick={()=> setcount(count +1 )}> Count {count}</button>
        </div>
    );
}

export default HookCounter;
