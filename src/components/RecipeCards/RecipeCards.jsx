import "./RecipeCards.css";

function RecipeCards() {
  return (
    <li className="recipe-card">
      <a
        href=""
        className="recipe-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="" alt="" className="recipe-card__image" />
        <div className="recipe-card__text">
          <p className="recipe-card__text-title">Recipe Title</p>
          <div className="recipe-card__positioning-container">
            <p className="recipe-card__text-description">TBD</p>
            <p className="recipe-card__text-source">Recipe Source</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default RecipeCards;
