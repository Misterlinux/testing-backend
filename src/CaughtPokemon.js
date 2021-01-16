import React, { useState } from "react"

const Catturato = () => {

    const pokemi = ["scrappy", "camerupt", "livanny", "omastay", "cacturne", "sudowoodo"];

    let [caught, setcaught] = useState([]);
    let [indi, setindi] = useState(0);

    function accresce(){
        const random = Math.floor(Math.random() * pokemi.length);
        setcaught(caught.concat(pokemonName))
        setname("")
        setindi( indi + 1 )
    }

    const [pokemonName, setname] = useState("")

    return <div>
        <input
            type="text"
            placeholder="pressalo"
            value={pokemonName}
            onChange={ (event) => setname(event.target.value) } 
        />

        <button onClick={accresce}> Real botton </button>

        {caught.map( (uni, indic) => {
            return <div>
            <li key={indic}> here the {uni} 
            </li>
            <p> and you clicked {indi} times </p>
            </div>
        })
        }
        <Sole />
    </div>
}

const Sole = () => {

    const [tempen, settempen] = useState(0)

    function upping(){
        settempen(tempen +1 )
    }

    function downing(){
        settempen( tempen - 1 )
    }

    return <div>
        <p>right now the temperature is {tempen} C</p>

        <button onClick={upping}> + </button>
        <button onClick={downing}> - </button>
    </div>
}

export default Catturato