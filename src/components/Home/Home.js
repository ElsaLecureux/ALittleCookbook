import './Home.scss';
import { Link } from 'react-router-dom';
import Recipes from '../../Recipes';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const getInfosAPI = async () => {
        try {
            const response = await axios.get("http://localhost:5000")
            console.log('response:',response);
            const data = response.data;
            setRecipes(data);
        } catch (error) {
            console.log('error :', error);
        }
        
    }
    useEffect(() => {
        getInfosAPI();
    }, []); 
        
  return (
    <div className="Home content"> 
        <h1 className="home-title">Recipes</h1> 
        <div className="recipes_container">
            {recipes.map((recipe, i) => (
            <Link 
                to={`/recipe/${recipe.id}`}
                className="cardRecipe"
                state={{recipe}}
                key={i}
            >
                <img className="recipe-image" src={recipe.image_url} alt="" /> 
                <h2 className="recipe-title">{recipe.name}</h2>
            </Link>
            ))}
        </div>          
    </div>
  );
}

export default Home;