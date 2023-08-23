import "./App.css";
import { ProductContainer } from "./modules/products/components/ProductContainer";

function App() {
  return (
    <>
      <header className="bg-white h-16 shadow-md text-center py-3">
        <h1 className="text-lg font-bold">Products</h1>
      </header>
      <div className="container px-6 md:px-20 lg:px-32 mx-auto flex flex-col gap-16 lg:gap-24 py-12 lg:py-20">
        <ProductContainer />
      </div>
    </>
  );
}

export default App;
