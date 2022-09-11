import React, { useState } from "react";

export const PruebaUseState = () => {

    const [satateCar, setStateCar] = useState(false)    

    const encenderApagar = () =>{
        setStateCar(!satateCar);      
    }

    return (
        <>
            <h3>El conche está: {satateCar ? "Encedido":"Apagado"}</h3>
            <button onClick={encenderApagar}>Encender / Apagar</button>
        </>
        
    );

  }



