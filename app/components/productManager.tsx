'use client'
import { ReactHTMLElement, useState } from "react"
import Product from "@/app/components/productComponent"
import "@/app/styles/productManager.css"
import { Titan_One } from "next/font/google";
// import {Storingmanager} from "@app/components/Storingmanager"
interface productItem {
p_name:string,
p_price:number,
p_bprice:number,
p_description:string,
p_stock:number,
}

let id:number = 0;
export default function Productmanager(){
    //for INPUTS
const [title, setTitle] = useState(''); 
const [price, setPrice] = useState('');
const [bprice, setBprice] = useState('');
const [description, setDescription] = useState('');
const [stock, setStock] = useState('');




// so all those are for inputs and now i gotta create one useState for an array of productItem(s)
const [Cards, setCards] = useState<productItem[]>([]);




function handleInputs(event:React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    if(!title.trim()) return;

id++;
  const newProduct: productItem = {
    p_name: title,
    p_price: Number(price),
    p_bprice: Number(bprice),
    p_description: description,
    p_stock: Number(stock),
  };

setCards((prevProducts) => {
    return [...prevProducts, newProduct];
    });


console.log(Cards[0]); //undefined even when its created...
console.log(title);
console.log(price);
console.log(bprice);
setTitle(''); setPrice(''); setBprice('');
setDescription('');
setStock('');

}
//  i called events differently because it makes fun to me
    return(<div className="greatContainer">
    <div className="productManager">
        <form onSubmit={handleInputs}> 
    <input required value={title} type="text" placeholder="product tittle or name" onChange={(event)=>setTitle(event.target.value)}/>
    <input required value={price} type="text" placeholder="selling price" onChange={(e)=>setPrice(e.target.value)}/>
    <input required value={bprice} type="text" placeholder="base price" onChange={(x)=>setBprice(x.target.value)}/>
    <input required value={description} type="text" placeholder="description" onChange={(x)=>setDescription(x.target.value)}/>
    <input required value={stock} type="text" placeholder="actual stock" onChange={(x)=>setStock(x.target.value)}/>
  
     <div className="buttonDiv">
    <button type="submit" className="px-6 py-2.5 rounded-full bg-zinc-100 text-zinc-600 font-medium tracking-wide transition-all duration-200 ease-out hover:bg-zinc-200 hover:text-zinc-800 hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-200/50 active:duration-75 active:scale-[0.98] active:translate-y-0 active:shadow-none">Add Product</button>
     </div> </form>

   </div>
    <div className="section">
            {
                     Cards.map((prod, index)=>( //need image path still
                         <Product key={index} id={id} name={prod.p_name} description={prod.p_description} price={prod.p_price} baseprice={prod.p_bprice} imagePath={""} />
                ))
            }
    </div>

   
   
     </div>);
}

//<Product id={product.getId()} name={product.getName()} description={product.getDesc()} price={product.getPrice()} baseprice={product.getBaseprice()} imagePath={product.getImagePath()}/>