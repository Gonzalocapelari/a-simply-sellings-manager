// 'use client'
//LOOOL A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.
import Product from "../components/productComponent";
// import {ProductClass} from "@/app/product";
import Productmanager from "../components/productManager";

// This type tells TypeScript that the page component will receive
// a `params` object containing the dynamic URL value, for example: { id: "42" }.
type Props = {
  params: Promise<{ id: string }>;
};


export default async function Manager({ params }: Props) {

  // Wait for the params promise to resolve before reading the id.
  const { id } = await params;
  const resolved = await params; const stringId = resolved.id; //this way i got id, but i am not using it for a thing.
        //id field of the (params object)


  if(stringId == "manager") {
  return (
    <main>
        <div className="h-screen bg-gray-200 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Productmanager></Productmanager>
        </div>
    </main>
  )} else {
    return (
      <main>
        <h1>page {id}</h1>
        <p>This page is not defined yet</p>
      </main>
    )
  }
}
//IMPORT CLASS FOR PRODUCTS AND USE IT TO CREATE NEW PRODUCTS IN THE GRID. (create, gather data, and then display it in the grid)
/*
  1. i should look how to import classes from another file.
  2. make a little fill field so i can add a product.
  4. it needs a buttom that picks the information and it will call the CREATION function.
  3. make a function to make the PRODUCT appear on screen when i create it.
  
*/






//NEED A [JUSTSOLD] BUTTOM TO REMOVE STOCK FROM THE PRODUCT. []
//NEED AN [ADDSTOCK] BUTTOM []
//SHOW AND HIDE PRODUCTS (TOGGLE) []





//MAKE BATABASE OR JSON OR SOMETHING IDK
//MAKE THE NUMBERS AND PRODUCTS ADAPTABLE
