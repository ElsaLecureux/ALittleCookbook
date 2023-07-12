import './Categories.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Categories() {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/categories")
            console.log('response:',response);
            const data = response.data;
            setCategories(data);
        } catch (error) {
            console.log('error :', error);
        }
        
    }
    useEffect(() => {
        getCategories();
    }, []);
  return (
    <div className="categories_container">
      <h1 className="home-title">Categories</h1> 
        <div className="recipes_container">
            {categories.map((category, i) => (
            <Link 
                to={`/category/${category.id}`}
                className="cardRecipe"
                state= {category.id}
                key={i}
            >
                <img className="category-image" src={category.image_url} alt="" /> 
                <h2 className="category-title">{category.name}</h2>
            </Link>
            ))}
        </div>
    </div>
  );
}

export default Categories;