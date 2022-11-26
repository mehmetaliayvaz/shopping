import UserIcon from "./icon/UserIcon";
import BasketIcon from "./icon/BasketIcon";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";


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
          <HeaderSearch />
          <div>
            <ul className="text-sm font-semibold flex space-x-8">
              <li>
                <a href="/" className="flex items-center">
                  <UserIcon size="16" color="black" className="mr-1" />
                  <span>Hesabım</span>
                </a>
              </li>
              <li>
                <Link to="/shopping-cart" className="flex items-center">
                  <BasketIcon size="16" color="black" className="mr-1" />
                  <span>Sepetim</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
