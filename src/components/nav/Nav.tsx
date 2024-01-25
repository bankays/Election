import "./Nav.scss";
import Logo from "../../images/logo.svg";
import { Button } from "../../utils";
import Link from "antd/es/typography/Link";
import UserLogo from "../../images/userlogo.svg";
import LikeLogo from "../../images/heart.svg";
import CartLogo from "../../images/shopping-cart.svg";
const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__contand1">
          <img src={Logo} alt="" />
          <div className="search__input">
            <input
              className="input"
              type="text"
              placeholder="Serach any things"
            />
            <Button className="btn" type="button" btn-size="lg" mode="p">
              Search
            </Button>
          </div>
        </div>
        <div className="nav__contand2">
          <div className="link__item">
            <img src={UserLogo} alt="" />
            <Link className="links">
              <p className="link">Sign in</p>
            </Link>
          </div>
          <div className="link__item">
            <div className="count">
              <img src={LikeLogo} alt="" />
              <p className="like__count">0</p>
            </div>
            <Link className="links">
              <p className="link">Sign in</p>
            </Link>
          </div>
          <div className="link__item">
            <div className="count">
              <img src={CartLogo} alt="" />
              <p className="like__count">0</p>
            </div>
            <Link className="links">
              <p className="link">Cart</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
