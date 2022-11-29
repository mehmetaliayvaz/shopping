import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "./icon/SearchIcon";
import { Link } from "react-router-dom";

function HeaderSearch() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [delayTimer, setDelayTimer] = useState(null);
  const [showResultBox, setShowResultBox] = useState(false);
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
            setShowResultBox(true);
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
    <>
      {
        showResultBox && (
          <div className="fixed z-10 w-full h-full top-o left-0" onClick={() => setShowResultBox(false)}></div>
        )
      }
      <div className="bg-gray-100 rounded-lg w-5/12 flex justify-between p-3 relative z-[11]">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="placeholder:text-gray-600 text-xs bg-transparent w-full"
          placeholder="Aradığınız ürünü yazınız"
        />
        {
          showResultBox && (
            <div className="bg-white w-full absolute top-12 text-xs left-0 z-10 rounded py-5 shadow-md">
              <ul>
                {
                  products.length > 0 ? (
                    products.map((productItem, productIndex) => {
                      return (
                        <li key={productIndex}>
                          <Link to={`/product/${productItem.id}`} className="px-6 py-3 hover:bg-gray-50 block" onClick={() => setShowResultBox(false)}>
                            {productItem.title}
                          </Link>
                        </li>
                      )
                    })
                  ) : (
                    <p className="px-6 py-3">Sonuç bulunamadı...</p>
                  )
                }
              </ul>
            </div>
          )
        }
        <SearchIcon size="20" color="black" />
      </div>
    </>
  );
}

export default HeaderSearch;
