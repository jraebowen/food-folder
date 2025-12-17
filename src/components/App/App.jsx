//library imports
import { Routes, Route } from "react-router-dom";

//css import
import "./App.css";

//component import
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Recipes from "../Recipes/Recipes";
import MealPlan from "../MealPlan/MealPlan";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/meal-plan" element={<MealPlan />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
