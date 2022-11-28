import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "./icon/SearchIcon";
import { Link } from "react-router-dom";

function HeaderSearch() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [delayTimer, setDelayTimer] = useState(null);
  // const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const searchText = search.toLowerCase().replaceAll(" ", "");
      if(delayTimer){
        clearTimeout(delayTimer);
      }
      // setSearchLoading(0)
      setDelayTimer(setTimeout(() => {
        
        if(searchText !== ""){
          axios.get(`https://shopping-api-ten.vercel.app/products/search/${searchText}`)
          .then((res) => {
            setProducts(res.data);
            // setSearchLoading(1)
          });
        }
        else{
          // setSearchLoading(1);
          setProducts([]);
        }

      }, 700))


  }, [search]);

  return (
    <div className="bg-gray-100 rounded-lg w-5/12 flex justify-between p-3 relative">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="placeholder:text-gray-600 text-xs bg-transparent w-full"
        placeholder="Aradığınız ürünü yazınız"
      />
      <div className="bg-white w-full absolute top-20 text-xs left-0 z-10 rounded p-5">
        <ul>
          {
            products.map((productItem, productIndex) => {
              return (
                <li key={productIndex} className="py-3">
                  <Link to={`/product/${productItem.id}`}>
                    {productItem.title}
                  </Link>
                </li>
              )
            }
            )
          }
        </ul>
      </div>
      <SearchIcon size="20" color="black" />
    </div>
  );
}

export default HeaderSearch;
