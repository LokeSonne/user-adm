import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams } from "react-router-dom";
import { User } from '../Models/User';

function UserDetail() {

let params = useParams();
const [user, setUser] = useState<User>();
const [error, setError] = useState<string>();

useEffect(() => {

    const baseUrl = 'https://reqres.in/api/users';
    if (!params?.userid) {
        setError('No user Id was supplied');
        return;
    }
    const userIdparam = '/' + params.userid;

    async function getUsers() {
        try {
            const response = await fetch(baseUrl + userIdparam, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'}
            });
                
            if (response.ok) {
                const jsonResponse = await response.json();
                const userResponse: User = jsonResponse.data;
                setUser(userResponse);
            } else {
                setError(response.statusText)
            }
        }
        catch(err) {
            setError('Request error');
        }  
    }
    getUsers();
},[params])

  return (
    error ?
        <>
        <div>{error}</div>
        <Link className="card-link" to={`/users/`}>Back to list</Link>
        </>
    : user && !error ?
        <div className="card text-center pt-3 h-50">
            <img src={user?.avatar} className="card-img-top mx-auto d-block rounded-circle" alt="The user's avatar" style={{maxWidth: "256px"}}/>
            <div className="card-body">
                <h5 className="card-title">{user?.first_name + ' ' + user?.last_name}</h5>
                <p className="card-text">{user?.email}</p>
                <Link className="card-link" to={`/users/`}>Back to list</Link>
            </div>
        </div>
    :
        <div className="card text-center pt-3 h-50" aria-hidden="true">
            <div className="border rounded-circle mx-auto" style={{width: "256px", height: "256px"}}></div>
            <div className="card-body">
            <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
            </p>
            <Link className="card-link" to={`/users/`}>Back to list</Link>
            </div>
        </div>
  );
}

export default UserDetail;