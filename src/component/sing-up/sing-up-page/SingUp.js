import React, { useState } from 'react';
import style from './SingUp.module.css'


const SingUp = ({getDataFromChild , nameValue}) => {

    let [emile, setEmile] = useState('')                                   /* Holds the value of the email entry*/
    let [name, setName] = useState('')                                     /* Holds the name entry value*/
    let [password, setPassword] = useState('')                             
    let [ConfirmPassword, setConfirmPassword] = useState('')               
    let [accept, setAccept] = useState(false)                              
    let [flag, setFlag] = useState('')
    let [start, setStart] = useState(true)

    let getName = () => name    /*Returns the name value*/

// It is executed when a button is pressed submit
function submit(e) {
    
    e.preventDefault() /* It prevents the page from being reloaded when a button is pressed submit */

    setAccept(true)

    // Verify that the entry elements have met their conditions correctly 
    if(name === '' || password.length < 8 || password !== ConfirmPassword || !emile.includes('@gmail.com')) setFlag(false)
    else setFlag(true) 

    // If the value of the flag is correct
    if(flag) {
        setStart(true) 

        getDataFromChild(start)

        nameValue(getName())    /* Returns the function getName  that returns the value of the name field*/
    }
    

}

// Change the Password field property to Text
function changePasswordAttribute() {
    let pass = document.getElementById('Password')
    if(pass.getAttribute('type') === 'text') pass.setAttribute('type', 'password')
    else pass.setAttribute('type', 'text')
}

    return (
        <>
            <div className={style.father}>
                <div className={style.circleTop}>Sing uSp</div>
                <form onSubmit={submit}>
                    <label htmlFor='emile'>Emile</label>
                    <input type='emile' id='emile'  placeholder='Input your email' value={emile} onChange={e => setEmile(e.target.value)}/>
                    {/* Make sure that the email entry item contains ( @gmail.com ) */}
                    {!emile.includes('@gmail.com') && accept && <p className={style.chickEmile}>please enter a valid email address</p>}

                    <label htmlFor='Username'>Username</label>
                    <input type='text' id='Username' placeholder='Input your username' value={name} onChange={e => setName(e.target.value)}/>
                    {/* Make sure to enter a value in the Username field */}
                    {name === '' && accept && <p className={style.chickName}>pleas enter your username</p>}

                    <label htmlFor='Password'>Password</label>
                    <input type='Password' id='Password' placeholder='********' value={password} onChange={e => setPassword(e.target.value)}/>
                    <ion-icon id={style.showPassword} name="eye-outline" onClick={changePasswordAttribute} ></ion-icon>
                    {/* To ensure that the number of characters in the password is greater than eight characters */}
                    {password.length < 8 && accept && <p className={style.chickPassword}>password must be more than 8 char</p>}

                    <label htmlFor='ConfirmPassword'>Confirm Password</label>
                    <input type='Password' id='ConfirmPassword' placeholder='*********' value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value) }/>
                    {/* To make sure that the second password is the same as the first password */}
                    {password !== ConfirmPassword && accept && <p className={style.chickConfirmPassword}>password does not match</p>}


                <div className={style.butt}>
                    <button type='submit'>Sing Up</button>
                </div>
                </form>

                <div className={style.circleBottom}></div>

            </div>


        </>
    );
}

export default SingUp;
