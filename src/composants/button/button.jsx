import React from 'react'
 import "./button.css"

 /////////////////  BUTTON GENERIQUE /////////////////
 /**
  * 
  * utiliser le props pour paramétrer className, type & nom
  * @returns 
  */
 
 function Button({className, type, children}) {
   return (
        <button className={className} type={type}>{children}</button>
   )
 }
 
 export default Button