import './Recipe.scss';
import { useLocation } from 'react-router-dom'

function Recipe() {
    const location = useLocation();
    const { recipe } = location.state;
  return (
    <div className="recipe_container content">
       <h1 className="recipe_title"> {recipe.name}</h1> 
       <img className="recipe_image" src={recipe.src} alt="" /> 
    </div>
  );
}

export default Recipe;