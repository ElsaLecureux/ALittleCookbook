import './Signin.scss';
import axios from 'axios';
/* const getInfosAPI = async () => {
  try {
      const response = await axios.get("http://localhost:5000/recipes")
     // console.log('response:',response);
      const data = response.data;
      setRecipes(data);
  } catch (error) {
      console.log('error :', error);
  }
  
}
useEffect(() => {
  getInfosAPI();
}, []);  */

function Signin() {
  const signInUser =  async (e) => {
    e.preventDefault();
    const email = e.target[0].value; 
    const password =  e.target[1].value;
    try {
      const response = await axios.post("http://localhost:5000/user", {email, password})
     // console.log('response:',response);
      const data = response.data;
      
  } catch (error) {
      console.log('error :', error);
  }
    
  }
  return (
    <div className="signin_container content">
       <form action="" method="post" onSubmit={signInUser}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' name='password'/>
        </div>      
        <input type="submit" value="Sign In"/>
       </form>
    </div>
  );
}

export default Signin;