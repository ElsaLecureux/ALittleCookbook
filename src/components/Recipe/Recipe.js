import './Recipe.scss';
import { useLocation } from 'react-router-dom'

function Recipe() {
    const location = useLocation();
    const { recipe } = location.state;
    console.log(recipe);
  return (
    <div className="recipe_container content">
       <h1 className="recipe_title"> {recipe.name}</h1> 
       <div className="ingredientsAndImage_container">
            <img className="recipe_image" src={recipe.src} alt="" /> 
            <ul className="ingredients-list_container">
            <h2 className="ingredients_title">Ingredients</h2>
                {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="ingredient">
                        {ingredient.name} : {ingredient.quantity}
                    </li>
                ))}       
            </ul>
       </div>
       <div className="timing_container">
            <div>Preparation Time: {recipe.timeToMake}</div>
            <div>Cooking Time: {recipe.timeToBake}</div>            
       </div>
       <div>
            <h2>Preparation</h2>
            <p>{recipe.instructions}</p>
       </div>
    </div>
  );
}

export default Recipe;