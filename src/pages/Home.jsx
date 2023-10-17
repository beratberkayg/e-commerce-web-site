import Category from "../components/home/Category";
import Product from "../components/home/Product";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";

const Home = () => {
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Category />
        <Product />
      </div>
    </div>
  );
};

export default Home;
