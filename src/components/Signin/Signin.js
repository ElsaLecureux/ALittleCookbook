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
            <label htmlFor="">Email</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="text" />
        </div>      
        <input type="submit" value="Sign In"/>
       </form>
    </div>
  );
}

export default Signin;