import React, {useState} from 'react';

const HookCounterThree = () => {
    const [name, setName] = useState([
        {
            firstName: '',
            lastName: ''
        }
    ])


    return (
        <div>
            <input value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})}></input>
            <input value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}></input>
            <h1> Your Name is {name.firstName}</h1>
            <h1> Your Last Name is {name.lastName}</h1>
        </div>
    );
}

export default HookCounterThree;
