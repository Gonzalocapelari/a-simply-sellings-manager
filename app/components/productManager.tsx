'use client'
import { useEffect, useState } from "react"
import ProductCarousel from "./ProductCarousel"
import "@/app/styles/productManager.css"
import {load_Cards, removeProduct, storingManager, type productProps} from "../components/storingManager"

export default function Productmanager(){
    //for INPUTS
const [title, setTitle] = useState(''); 
const [price, setPrice] = useState('');
const [bprice, setBprice] = useState('');
const [description, setDescription] = useState('');
const [stock, setStock] = useState('');




// so all those are for inputs and now i gotta create one useState for an array of productItem(s)
const [Cards, setCards] = useState<productProps[]>([]);

useEffect(() => {
  queueMicrotask(() => {
    setCards(load_Cards());
  });
}, []);

function handleRemove(id: number) {
  removeProduct(id);
  setCards((prevProducts) => {
    return prevProducts.filter((product) => product.id !== id);
  });
}
function getNextId(cards: productProps[]): number {
    if (cards.length === 0) return 1;

    const ids = cards.map(p => p.id);
    return Math.max(...ids) + 1;
}
function handleInputs(event:React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    
    const numericPrice = Number(price);
    const numericBasePrice = Number(bprice);
    const numericStock = Number(stock);

    if (!title.trim() || !description.trim()) return;
    if (!price.trim() || !Number.isFinite(numericPrice) || numericPrice < 0) return;
    if (!bprice.trim() || !Number.isFinite(numericBasePrice) || numericBasePrice < 0) return;
    if (!stock.trim() || !Number.isInteger(numericStock) || numericStock < 0) return;

  const newProduct: productProps = {
    id: getNextId(Cards),
    p_name: title,
    p_price: numericPrice,
    p_bprice: numericBasePrice,
    p_description: description,
    p_stock: numericStock,
  };

storingManager(newProduct);

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
        <form onSubmit={handleInputs} className="w-full flex flex-col gap-3"> 
    <input className="inputsManager" required value={title} type="text" placeholder="Product title or name" onChange={(event)=>setTitle(event.target.value)}/>
    <input className="inputsManager" required value={price} type="text" placeholder="Selling price ($)" onChange={(e)=>setPrice(e.target.value)}/>
    <input className="inputsManager" required value={bprice} type="text" placeholder="Base cost price ($)" onChange={(x)=>setBprice(x.target.value)}/>
    <input className="inputsManager" required value={description} type="text" placeholder="Product description" onChange={(x)=>setDescription(x.target.value)}/>
    <input className="inputsManager" required value={stock} type="text" placeholder="Stock quantity" onChange={(x)=>setStock(x.target.value)}/>
  
     <div className="buttonDiv">
    <button type="submit" className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 text-white font-medium text-sm tracking-wide transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] shadow-sm cursor-pointer">Add Product</button>
     </div> </form>

   </div>
    <div className="section">
      <ProductCarousel products={Cards} onRemove={handleRemove} />
    </div>

   
 
     </div>);
}

//<Product id={product.getId()} name={product.getName()} description={product.getDesc()} price={product.getPrice()} baseprice={product.getBaseprice()} imagePath={product.getImagePath()}/>