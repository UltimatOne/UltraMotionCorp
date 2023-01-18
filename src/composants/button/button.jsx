import React from 'react'
 import "./button.css"

 /////////////////  BUTTON GENERIQUE /////////////////
 /**
  * 
  * utiliser le props pour paramétrer className, type & nom
  * @returns 
  */
 
 function Button({cssClass, type, children}) {
   return (
        <button className={cssClass} type={type}>{children}</button>
   )
 }
 
 export default Button