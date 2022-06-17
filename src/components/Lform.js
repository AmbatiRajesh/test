import React, {useState} from "react";
import './style.css';
const Lform=(props)=>{

    const [title, setTitle] = useState();
    const [password, setPassword] = useState();


    const [nameError, setNameError]=useState();
    const [passwordError, setPasswordError]=useState();

     /*i did make small form validation ,
      The Error Messages Are Changed Based On The Users Entered Data  Like This Field Is Required
      Plese Enter Valid Name, Password Max And Min, User Will Try Login Without Enter Any Data Error
      Messages Are Displayed This Field Is Required With Red Color.
      After Name And Password Is valid Errot Messsages Are Changed Into valid With Green Color And Also 
      Give The Access To uset To Login.
     */
    const name=(event)=>{
        setTitle(event.target.value);
        if(event.target.value.length===0){
            setNameError("This Field is required");
            return false;
        }else if(!event.target.value.match(/^[a-zA-Z]{2,}[\s]{1}[a-zA-Z]+$/)){
            setNameError("Please Enter Your Full Name");
            return false;
        }else{
            setNameError("Your Name Is Valid");
            return true
        }
    }
    /*Form Validation using Regulat Expressions*/
    const countr=(event)=>{
        setPassword(event.target.value);
        if(event.target.value.length===0){
            setPasswordError("This Field is required");
            return false;
        }
        else if(!event.target.value.match(/^[a-zA-Z0-9@/#/$/&/*/!]{6,12}$/)){
            setPasswordError("Require Min 6 And Max 12 Characters");
            return false;
        }else{
            setPasswordError("Password Is Valid");
            return true;
    }
    }
    const prevent=(event)=>{
        event.preventDefault();
        if(nameError==="Your Name Is Valid" && passwordError==="Password Is Valid"){
           return props.loginValid(true);
            
        }else{
            setNameError("This Field Is Required");
            setPasswordError("This Field Is Required");
            return props.loginValid(false);
        }
    }
    return(
        <div className="container"> 
            <form onSubmit={prevent}>
                <div>
                <label for='name'>UserName</label>
                <input type="text" name="name" onChange={name}/>
                <p className="container__form__error"  style={{color: nameError=== "Your Name Is Valid" ? 'green' : 'red'}}>{nameError}</p>
                </div>
                <div>
                <label for='password'>UserPassword</label>
                <input type="password" name="password" onChange={countr}/>
                <p className="container__form__error" style={{color: passwordError=== "Password Is Valid" ? 'green' : 'red'}}>{passwordError}</p>
                </div>
                <div>
                <button>Login</button>  
                </div>
            </form>
        </div>
    )
}
export default Lform;