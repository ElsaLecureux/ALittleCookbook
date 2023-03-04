import './Recipe.scss';
import { useLocation } from 'react-router-dom'

function Recipe() {
    const location = useLocation();
    const { recipe } = location.state;
    //console.log(recipe);
    console.log (recipe.instructions)
  return (
    <div className="recipe_container content">
       <h1 className="recipe_title"> {recipe.name}</h1> 
       <div className="ingredientsAndImage_container">
            <img className="recipe_image" src={recipe.src} alt="" /> 
            <ul className="ingredients-list_container">
            <h2 className="ingredients_title">Ingredients</h2>
                {recipe.ingredients.map((ingredient, i) => (
                    <li key={i} className="ingredient-quantity">
                        <span className="ingredient">{ingredient.name}:</span> {ingredient.quantity}
                    </li>
                ))}       
            </ul>
       </div>
       <div className="timing_container">
            <div className="timing"><span className="timing_title">Preparation Time:</span> {recipe.timeToMake}</div>
            <div className="timing"><span className="timing_title">Cooking Time:</span> {recipe.timeToBake}</div>            
       </div>
       <ul className="instructions_container">      
            <h2 className="instruction_title">Preparation</h2>
              {recipe.instructions.map((instruction, i) => (
                <li key={i} className="instruction">
                    <span className="step_name">{instruction.title}:</span> {instruction.details}
                </li>
                ))}             
       </ul>
    </div>
  );
}

export default Recipe;