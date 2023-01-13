 import React from 'react'
 import "./button.css"
 
 function Button({props}) {
   return (
        <button className="btn" type="button">{props}</button>
   )
 }
 
 export default Button