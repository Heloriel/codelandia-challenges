import { Discount } from "./components/Discount/Discount";
import { ItemList } from "./components/ItemList/ItemList";
import { Layout } from "./components/Layout/Layout";
import { Slider } from "./components/Slider/Slider";
import "./styles/global.css";

function App() {
  return (
    <main>
      <Discount value={"10,00"} />
      <Layout>
        <div>
          <Slider />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="p-16 flex flex-1 flex-col justify-center items-center">
            <span className="font-montserrat text-3xl font-bold mb-4">Destaques</span>
            <span className="font-montserrat text-center">Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</span>
          </div>
          <div className="flex flex-row flex-1 px-5 md:px-20 mb-24">
            <ItemList />
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default App;
