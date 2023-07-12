import './Categories.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Categories() {
    /*<img className="category-image" src={category.image_url} alt="" /> 
                <h2 className="category-title">{category.name}</h2>*/
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/categories")
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
      <h1 className="categories_title">Categories</h1> 
        <div className="categories">
            {categories.map((category, i) => (
            <Link 
                to={`/category/${category.id}`}
                className="categoryCard"
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