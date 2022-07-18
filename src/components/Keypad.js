// Code Keypad Component Here
import React from "react";
function keypad() {
    function handle() {
        console.log('Entering password...')
    }
    return(
        <input type="password" onChange={handle}></input>
        )
}
export default keypad;