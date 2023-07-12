import './App.scss';
import Footer from './footer/footer';
import Header from './header/header';
import {Routes, Route} from 'react-router-dom';
import Recipe from './Recipe/Recipe';
import Home from './Home/Home';
import Categories from './Categories/Categories';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import NotFound from './NotFound/NotFound';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recipe/:id" element={<Recipe/>} />
          <Route path="/signIn" element={<Signin />} />
          <Route path="/signuP" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
