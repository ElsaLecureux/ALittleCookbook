import './App.scss';
import Footer from './footer/footer';
import Header from './header/header';
import {Routes, Route} from 'react-router-dom';
import Recipe from './Recipe/Recipe';
import Home from './Home/Home';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Recipe />} />
          <Route path="/connection" element={<Signin />} />
          <Route path="/inscription" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
