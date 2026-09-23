
// import {useEffect} from React;


//5 params
interface propsSacados{
id:number,
name:string,
description:string,
price:number,
baseprice:number,
imagePath:string,
onRemove:(id:number) => void,
}

export default function Product({id,name,description,price,baseprice,imagePath,onRemove}:propsSacados){
  imagePath = "testimage.jpg"
return(
  <div className="bg-white border rounded-lg overflow-hidden">
    <div className="flex flex-col flex-1 justify-center items-center p-1 text-center">
    <h4 className="font-semibold text-lg leading-tight truncate">{name}</h4>
   <img className="relative w-40 h-30" src={imagePath} alt="imagen del producto" />
    </div>
    <div className="p-3">
      <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
      </div>
      <div className="mt-1 text-bold">${price}<span className="text-gray-600 text-sm">
        <div className="text-lg">{baseprice}</div></span>
      </div>
      <div className="mt-2 flex items-center">
        <span className="ml-2 text-gray-600 text-sm">{description}</span>
        <span className="ml-2 text-gray-300 text-sm">{id}</span>
      </div>
      <button type="button" onClick={() => onRemove(id)}>REMOVE</button>
    </div>
  </div>
);

// Use flex-col to position flex items vertically (Usefull)

}



{/* <div className="flex flex-col items-center justify-center p-4 min-w-48 h-min-w-10 border-double border-3 rounded-xl bg-black text-white text-bold border shadow-lg opacity-50 cursor-pointer text-center">
    <h1 className="md:text-lg">PRODUCT TITLE</h1>
    
   <div className="text-lg font-bold">$99.99</div>
</div> */}