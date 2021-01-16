import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  const[email, setcorreo] = useState("")

  function setted(event){
    if(event.target.name === "primo"){
      setCity(event.target.value)
    }else if(event.target.name === "secondo"){
      setcorreo(event.target.value)
    }
  }

  function mandando(event){
    event.preventDefault();

    console.log("sending stuff")

    fetch( "https://httpstat.us/200" , {
      method:"POST",
      body: JSON.stringify({
        primo: city,
        secondo: email
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <div>

      <form onSubmit={mandando}  >
        < input 
          type="text" 
          name="primo"
          placeholder="here some random"
          value={city}
          onChange={setted}
        /> 
      <input
        type="password"
        name="secondo"
        placeholder="here the email"
        value={email}
        onChange={setted}
      />
      <button> indeed</button>
      <button> welcoming </button>
    </form>

    <p>Welcome to the city of {city.toUpperCase()} set by {email} </p>

    </div>
  );
}

export default PokemonCity;