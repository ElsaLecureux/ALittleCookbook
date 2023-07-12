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
      <div>
          <label htmlFor="">Username</label>
          <input type="text" />
      </div>
      <div>
          <label htmlFor="">Email</label>
          <input type="text" />      
      </div>
      <div>
          <label htmlFor="">Password</label>
          <input type="text" />          
      </div>
        <div>
          <label htmlFor="">Repeat Password</label>
          <input type="text" />      
        </div> 
        <input type="submit" value="Sign Up"/>     
     </form>
    </div>
  );
}

export default Signup;