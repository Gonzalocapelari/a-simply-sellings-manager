
interface propsForProducts { // I GUESS ITS JUST FOR DEFINING TYPES
id: number,
name: string;
des: string;
price: number;
costprice: number;
stock: number;
imagePath: string;
shown: boolean;
}
export default function Storingmanager({id, name, des, price, costprice, stock, imagePath}:propsForProducts){
// 1. Obj definition to store
const objectToSave = {
id: id,
name: name,
description: des,
price: price,
costPrice: costprice,
stock: stock,
imagePath: imagePath
};

// 2. Convert to JSON and save
localStorage.setItem("productData", JSON.stringify(objectToSave));
//------------------------------------------------------------------------
// // 3. Read and parse back into an object
// const savedData = localStorage.getItem("productData");
// const parsedSettings = savedData ? JSON.parse(savedData) : null;
}
