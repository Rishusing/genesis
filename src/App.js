import Filter from "./components/Filter";
import FilterItem from "./components/FilterItem";
import Navbar from "./components/Navbar";
import Path from "./components/Path";
import Products from "./components/Products";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <Path />
      <Search />
      <FilterItem />
      <div className="landing_page">
        <Filter/>
        <Products/>
      </div>
    </>
  );
}

export default App;
