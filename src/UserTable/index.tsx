import React, { useEffect, useState } from 'react';
import './style.css';

type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

type UserResponse = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: User[]
}


function UserTable() {

const [users, setUsers] = useState<UserResponse>();

useEffect(() => {

    async function getUsers() {
      const response = await fetch('https://reqres.in/api/users', {
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
},[])

  return (
<table className="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
    </tr>
    </thead>
          <tbody>
            {
              users?.data &&
              users.data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
  );
}

export default UserTable;