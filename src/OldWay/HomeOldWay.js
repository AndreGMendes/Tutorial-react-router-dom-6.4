import React from 'react'
import { useState, useEffect } from 'react';

const Home = () => {

    let [name, setName] = useState ('Zé');
    let [age, setAge] = useState(12);

    const handleclick = () => {
        setName('Manel');
        setAge(43);
    }




    return (
        <div className='Home'>
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick = {handleclick}>Click me</button>

        </div>
    )
}

export default Home










// EXAMPLES ('useState' and 'UseEffect' together)
function MyToggleFunction(name, setName) {
    const handleclick = () => {
        name === 'Zé' ? setName('Manel') : setName('Zé');
    };

    useEffect(() => {
        console.log(name);

        let myParagraph = document.querySelector("#root > div > div > div > p");
        name === 'Zé' ? myParagraph.style.color = 'white' : myParagraph.style.color = 'red';

    }, [name]); // Only re-run the effect if 'name' changes
    return handleclick;
}

// const handleclickX = MyToggleFunction(name, setName); // Only re-run the effect if 'name' changes