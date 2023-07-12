import './Contact.scss';

function contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('inside sendEmail');
  }
  return (
    <div className="contact_container">
        <h1>Contact us</h1>
       <form action="" method="post" onSubmit={sendEmail}>
          <div>
            <label htmlFor="">Your Email
            </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor=""> Your reason to contact us
            </label>
            <input type="text" />
          </div>  
          <div>
            <label htmlFor=""> Your message
            </label>
            <textarea type="text" rows = "10" cols="50"/>
          </div> 
          <input type="submit" value="Send"/>        
        </form>
    </div>
  );
}

export default contact;