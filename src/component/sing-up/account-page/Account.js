import React from 'react';
import s from './Account.module.css'
const Account = ({value}) => {
    return (
        <>
            <div className= {s.father}>
            <ion-icon name="person-circle-outline"></ion-icon>

            
            <h1>{value}</h1>
            </div>
        </>
    )
}

export default Account;
