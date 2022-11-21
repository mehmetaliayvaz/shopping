import SearchIcon from "./icon/SearchIcon";
import UserIcon from "./icon/UserIcon";
import BasketIcon from "./icon/BasketIcon";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="shadow-md">
      <div className="container">
        <div className="flex justify-between items-center h-[100px]">
          <div>
            <Link to="/">
              <h1 className="font-semibold text-[40px]">shopping</h1>
            </Link>
          </div>
          <div className="bg-gray-100 rounded-lg w-5/12 flex justify-between p-3">
            <input type="text" className="placeholder:text-gray-600 text-xs bg-transparent w-full" placeholder="Aradığınız ürünü yazınız" />
            <SearchIcon size="20" color="black" />
          </div>
          <div>
            <ul className="text-sm font-semibold flex space-x-8">
              <li>
                <a href="/" className="flex items-center">
                  <UserIcon size="16" color="black" className="mr-1" />
                  <span>Hesabım</span>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center">
                  <BasketIcon size="16" color="black" className="mr-1" />
                  <span>Sepetim</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
