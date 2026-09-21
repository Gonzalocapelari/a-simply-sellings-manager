'use client'
import { useState } from "react"
import Product from "@/app/components/productComponent"
import "@/app/styles/productManager.css"

const productList = [];


export default function Productmanager(){
const [state, setState] = useState('');

  
    return(<div className="greatContainer">
    <div className="productManager">
    <input className= "inputsManager" type="text" placeholder="nombre del producto"/>
    <input className= "inputsManager" type="text" placeholder="precio"/>
    <input className= "inputsManager" type="text" placeholder="precio base"/>
    <input className= "inputsManager" type="text" placeholder="descripcion"/>
    <input className= "inputsManager" type="text" placeholder="stock inicial"/>
  
     <div className="buttonDiv">
    <button onClick={()=>{setState("add")}} className="px-6 py-2.5 rounded-full bg-zinc-100 text-zinc-600 font-medium tracking-wide transition-all duration-200 ease-out hover:bg-zinc-200 hover:text-zinc-800 hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-200/50 active:duration-75 active:scale-[0.98] active:translate-y-0 active:shadow-none">Add Product</button>
     </div>

   </div>
    <div className="section">
        {state==="add" ? <div className="text-blue"> ACA VAN INSERTANDOSE LOS PRODUCTOS </div> : <div> VACIO </div>}
   
    </div>

   
   
     </div>);
}

//<Product id={product.getId()} name={product.getName()} description={product.getDesc()} price={product.getPrice()} baseprice={product.getBaseprice()} imagePath={product.getImagePath()}/>