import './Home.scss';
import { Link } from 'react-router-dom';
import Recipes from '../../Recipes';

function Home() {
    console.log(Recipes)
  return (
    <div className="Home content"> 
        <h1 className="home-title">Recipes</h1> 
        <div className="recipes_container">
            {Recipes.map((recipe, i) => (
            <Link 
                to={`/recipe/${recipe.id}`}
                className="cardRecipe"
                state={{recipe}}
                key={i}
            >
                <img className="recipe-image" src={recipe.src} alt="" /> 
                <h2 className="recipe-title">{recipe.name}</h2>
            </Link>
            ))}
        </div>          
    </div>
  );
}

export default Home;