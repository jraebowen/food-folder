import "./Navigation.css";

import FoodFolderLogo from "../../assets/foodfolderlogo.png";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__content">
        <button className="nav__logo" type="button">
          <img
            src={FoodFolderLogo}
            alt="food folder logo"
            className="nav__logo-image"
          />
        </button>
        <ul className="nav__links">
          <li className="nav__item">
            <button className="nav__item-button" type="button">
              home
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__item-button" type="button">
              recipes
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__item-button" type="button">
              meal plan
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
