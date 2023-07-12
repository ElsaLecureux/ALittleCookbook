import './Signup.scss';

function Signup() {
  const signUpUser = (e) => {
    e.preventDefault();
    console.log('inside signUpUser');
  }
  return (
    <div className="Signup_container content">
    <h1>Create an account</h1>
     <form action="" method="post" onSubmit={signUpUser}>
      <div className='username_container'>
          <label htmlFor="">Username</label>
          <input type="text" id='username' name='username'/>
      </div>
      <div className='email_container'>
          <label htmlFor="">Email</label>
          <input type="text" id='email' name='email'/>      
      </div>
      <div className='password_container'>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' name='password'/>          
      </div>
        <div className='secondPassword_container'>
          <label htmlFor="secondPassword">Repeat Password</label>
          <input type="text" id='secondPassword' name='secondPassword'/>      
        </div> 
        <input type="submit" value="Sign Up"/>     
     </form>
    </div>
  );
}

export default Signup;