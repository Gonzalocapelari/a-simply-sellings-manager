
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
  const resolvedImagePath = imagePath && imagePath.length > 0 ? imagePath : "/testimage.jpg";
return(
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between h-full">
    <div className="flex flex-col flex-1 justify-center items-center p-3 text-center bg-gray-50 border-b border-gray-100">
      <h4 className="font-semibold text-base text-gray-900 leading-tight truncate w-full mb-2" title={name}>{name}</h4>
      <img className="w-36 h-28 object-cover rounded shadow-sm" src={resolvedImagePath} alt={name || "Product image"} />
    </div>
    <div className="p-4 flex flex-col justify-between flex-1">
      <div>
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <span className="text-xs text-gray-500 font-medium">Cost: ${baseprice}</span>
        </div>
        <div className="mt-1 text-gray-600 text-xs line-clamp-2 min-h-[32px]">
          {description}
        </div>
        <div className="mt-1 text-right">
          <span className="text-[10px] text-gray-400 font-mono">ID: #{id}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onRemove(id)}
        className="mt-3 w-full py-1.5 px-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-medium text-xs rounded transition-colors cursor-pointer shadow-sm"
      >
        REMOVE
      </button>
    </div>
  </div>
);

// Use flex-col to position flex items vertically (Usefull)

}



{/* <div className="flex flex-col items-center justify-center p-4 min-w-48 h-min-w-10 border-double border-3 rounded-xl bg-black text-white text-bold border shadow-lg opacity-50 cursor-pointer text-center">
    <h1 className="md:text-lg">PRODUCT TITLE</h1>
    
   <div className="text-lg font-bold">$99.99</div>
</div> */}