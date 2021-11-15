import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams } from "react-router-dom";
import { UserResponse } from '../Models/User';

function Pagination(props: {userResponse: UserResponse, currentPage: number | undefined}) {

    let pages = [];
    if (props.userResponse.total_pages > 1) {
        for (let i = 0; i < props.userResponse.total_pages; i++) {           
            pages.push(<li className="page-item" key={i}><Link className="page-link link-pink" to={`/users/${i+1}`}>{i+1}</Link></li>)
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><Link className="page-link link-pink" to={`/users/1`}>Previous</Link></li>
                    {props.userResponse.total_pages > 1 && pages}
                <li className="page-item"><Link className="page-link link-pink" to={`/users/${props.userResponse.total_pages}`}>Next</Link></li>
            </ul>
        </nav>
    )
}

function UserTable() {

let params = useParams();
const [users, setUsers] = useState<UserResponse>();

useEffect(() => {

    const baseUrl = 'https://reqres.in/api/users';
    const pageparam = params?.pagenumber ? '?page=' + params.pagenumber : '';

    async function getUsers() {
      const response = await fetch(baseUrl + pageparam, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'}
      })
      
      if (response.status >= 200 && response.status <= 299) {
        const jsonResponse = await response.json();
        const userResponse: UserResponse = jsonResponse;
        setUsers(userResponse);
      } else {
        // Handle errors
        console.log(response.status, response.statusText);
      }    
    }
    getUsers();
},[params])

  return (
    !users?.data ?
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  :
  <>
<table className="table table-hover">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
          <tbody>
            {
              users.data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td><Link className="link-pink" to={`/user/${user.id}`}>{user.id}</Link></td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>               
                )
              })
            }
          </tbody>
        </table>
        {
            users.total_pages > 1 &&
            <div className="d-flex justify-content-center">
                <Pagination userResponse={users} currentPage={params.pagenumber ? parseInt(params.pagenumber) : undefined} />
            </div>
        }
        </>
  );
}

export default UserTable;