import react from 'react';
import './Register.css';
function Register(){
    return(
        <div className='form'>
               <form>

           <input type="email" placeholder='Email' require/>
           <input type="password" placeholder='Password' required/>
           <input type="password" placeholder='Confirm Password' require/>
           <button type="submit">SignUp</button>
       </form>
           </div>

    );
}
export default Register;