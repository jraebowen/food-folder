import { useLocation, useNavigate } from "react-router-dom";

import "./Navigation.css";

import FoodFolderLogo from "../../assets/foodfolderlogo.png";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isRecipesPage = location.pathname === "/recipes";
  const isMealPlanPage = location.pathname === "/meal-plan";

  const goToHomepage = () => {
    if (!isHomePage) navigate("/");
  };

  const goToRecipes = () => {
    if (!isRecipesPage) navigate("/recipes");
  };

  const goToMealPlan = () => {
    if (!isMealPlanPage) navigate("/meal-plan");
  };

  return (
    <nav className="nav">
      <div className="nav__content">
        <button className="nav__logo" type="button" onClick={goToHomepage}>
          <img
            src={FoodFolderLogo}
            alt="food folder logo"
            className="nav__logo-image"
          />
        </button>
        <ul className="nav__links">
          <li className="nav__item">
            <button
              className="nav__item-button"
              type="button"
              onClick={goToHomepage}
            >
              home
            </button>
          </li>
          <li className="nav__item">
            <button
              className="nav__item-button"
              type="button"
              onClick={goToRecipes}
            >
              recipes
            </button>
          </li>
          <li className="nav__item">
            <button
              className="nav__item-button"
              type="button"
              onClick={goToMealPlan}
            >
              meal plan
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
