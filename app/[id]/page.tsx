import Product from "../components/productComponent";


// This type tells TypeScript that the page component will receive
// a `params` object containing the dynamic URL value, for example: { id: "42" }.
type Props = {
  params: Promise<{ id: string }>;
};

// This is the page component for a dynamic route like /123 or /abc.
// In the App Router, a page component can be async and can await params.
export default async function Manager({ params }: Props) {
  // Wait for the params promise to resolve before reading the id.
  const { id } = await params;
  const resolved = await params; const stringId = resolved.id;
        //id field of the (params object)

  // Return the page content using the current URL id.
  if(stringId == "manager") {
  return (
    <main>
        <div className="bg-gray-200 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>

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