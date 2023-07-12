import './Signin.scss';

function Signin() {
  const signInUser =  async (e) => {
    e.preventDefault();
    console.log('inside signInUser');
  }
  return (
    <div className="signin_container content">
       <form action="" method="post" onSubmit={signInUser}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" id='password' name='password'/>
        </div>      
        <input type="submit" value="Sign In"/>
       </form>
    </div>
  );
}

export default Signin;