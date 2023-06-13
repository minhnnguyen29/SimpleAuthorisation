import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false); //intialise value is false 

  function handleSubmit(e) {//event handler 
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;//get value from input type pw 
    const auth = enteredPassword == password;
    setAuthorized(auth)//set authorized to true if pw match 
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" /> 
      <input type="submit" /> 
    </form>
    ); 
  
  const contactInfo = (
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
  ); 

  return (
      <div id="authorization">
        <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
        {authorized ? contactInfo : login} 
      </div>
  );
}

export default Contact;
