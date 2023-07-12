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
            <label htmlFor="email">Your Email
            </label>
            <input type="text" id='email' name='email'/>
          </div>
          <div>
            <label htmlFor="subject"> Your reason to contact us
            </label>
            <input type="text" id='subject' name='subject'/>
          </div>  
          <div>
            <label htmlFor="emailBody"> Your message
            </label>
            <textarea type="text" rows = "10" cols="50" id='emailBody' name='emailBody'/>
          </div> 
          <input type="submit" value="Send"/>        
        </form>
    </div>
  );
}

export default contact;