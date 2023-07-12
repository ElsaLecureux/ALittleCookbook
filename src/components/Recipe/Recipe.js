import './Recipe.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, React } from 'react';
import axios from 'axios';

function Recipe() {
    const location = useLocation();
    console.log('location.state', location.state);
    const recipeId = location.state;
    const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [instructions_titles, setInstructions_titles] = useState([]);
    const getInfosAPI = async () => {
        try {
            console.log('recipeId',recipeId);
            const response = await axios.get(`http://localhost:5000/recipe/${recipeId}`)
            console.log('response:',response);
            const data = response.data[0];
            setRecipe(data);
            setIngredients(data.ingredient_name);
            setQuantities(data.ingredient_quantity);
            setInstructions(data.instruction_description);
            setInstructions_titles(data.instruction_name);
        } catch (error) {
            console.log('error :', error);
        }
        
    }
    useEffect(() => {
      
      getInfosAPI();
    }, []);
    
  return (
    <div className="recipe_container content">
       <h1 className="recipe_title"> {recipe.name}</h1> 
       <div className="ingredientsAndImage_container">
            <img className="recipe_image" src={recipe.image_url} alt="" /> 
            <div className="ingredients-quantities_container">
            <h2 className="ingredients_title">Ingredients</h2>
            { ingredients ? (
              <div className="lists_container">
                  <ul className='ingredients-list'>
                    { ingredients.map((ingredient, i) => (
                      <li className='ingredient' key={i}>{ingredient}</li>
                      ))}
                  </ul>            
                  <ul className="quantities-list">
                    { quantities.map ((quantity, i) => (
                      <li className='quantity' key={i}>{quantity}</li>
                    ))}
                  </ul>           
                </div>  
              ): ( 
                <h3>Sorry this recipe is incomplete, we are still working on it</h3>
              )}
              </div>
            </div>
        <div className="timing_container">
              <div className="timing"><span className="timing_title">Preparation Time:</span> {recipe.preparation_time}</div>
              <div className="timing"><span className="timing_title">Cooking Time:</span> {recipe.cooking_time}</div>            
        </div>
        <div className="preparation_container">
          <h2 className="instruction_title">Preparation</h2>
          { instructions ? (
            <div className='instructions_container'>
              <ul className="instructions-titles-list">
                { instructions_titles.map((instruction_title, i) => (
                    <li className='instruction-title' key={i}>{instruction_title}</li>
                ))}
              </ul> 
              <ul className="instructions-list">
              { instructions.map ((instruction, i) => (
                  <li className='instruction' key={i}>{instruction}</li>
                ))}
              </ul>                
            </div>  
              ): ( 
                <h3>Sorry this recipe is incomplete, we are still working on it</h3>
              )}
              </div>
      </div>
    );
  }

export default Recipe;