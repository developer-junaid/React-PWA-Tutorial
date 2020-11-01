import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

const Users = () => {
  const [data, setData] = useState([])

  // State for online offline mode
  const [userOnline, setUserOnline] = useState(true)

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users/"

    // Fetch data
    fetch(url)
      .then((response) => {
        // When we are online
        response.json().then((result) => {
          setData(result)
          // Move data to local storage
          localStorage.setItem("usersData", JSON.stringify(result))
        })
      })
      .catch((err) => {
        // When we are offline, Get data from local storage
        let usersData = localStorage.getItem("usersData")
        setData(JSON.parse(usersData))
        setUserOnline(false)
      })
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {userOnline ? null : (
        <div className="alert alert-warning" role="alert">
          You are Offline
        </div>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>@{item.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Users
