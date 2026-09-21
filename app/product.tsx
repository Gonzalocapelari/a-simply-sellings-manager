//DEPRECATED CLASS (USELESS BAD LOGIC, i suck)
// export class ProductClass {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   costPrice: number;
//   stock: number;
//   imagePath: string;
//   shown: boolean;

//   constructor(
//     id: number,
//     name: string,
//     description: string,
//     price: number,
//     costPrice: number,
//     stock: number,

//   ) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.price = price;
//     this.costPrice = costPrice;
//     this.stock = stock;
//     this.imagePath = "/testimage.jpg";
//     this.shown = false;
//   }

//   justSold(quantity: number): void {
//     if (quantity <= 0) {
//       throw new Error("Quantity must be greater than zero.");
//     }

//   }
//   getProduct():void{
//     console.log("id: ",this.id, 
//       "name: ",this.name, 
//       "description: ",this.description, 
//       "price: ",this.price,
//        "stock: ",this.stock, 
//        "base cost: ",this.costPrice,
//         "price: ",this.price);
//   }
//   getImagePath():string{
//     return(this.imagePath)
//   }
//   getId(){ 
//     return this.id
//   }
//   getName(){
//     return this.name
//   }
//   getDesc(){
//     return this.description
//   } 
//   getPrice(){
//     return this.price
//   }
//   getBaseprice(){
//     return this.costPrice
//   } 
//   getStock(){
//     return this.stock
//   }

// }
//   //IMPORT CLASS FOR PRODUCTS AND USE IT TO CREATE NEW PRODUCTS IN THE GRID. (create, gather data, and then display it in the grid)
// /*
//   1. i should look how to import classes from another file.
//   2. make a little fill field so i can add a product.
//   4. it needs a buttom that picks the information and it will call the CREATION function.
//   3. make a function to make the PRODUCT appear on screen when i create it.
  
// */

