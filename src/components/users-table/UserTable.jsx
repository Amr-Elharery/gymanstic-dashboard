import "./UserTable.css";
import UserImage from "../../assets/imgs/user-table-user-1.png";
import { useEffect, useState } from "react";
function UserTable() {
  const [users, setUsers] = useState([]);

  const [id, setId] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    let authData = localStorage.getItem("authorization") 
                || sessionStorage.getItem("authorization");

    if (authData) {
      authData = JSON.parse(authData);
      setId(authData.id);
      setToken(authData.token);
    }
  }, []);

  useEffect(()=>{
    if(id && token) {
      fetch(`https://gymnastic-beta.vercel.app/api/v1/users`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(resObj => {
        setUsers(resObj.data);
      })
    }
  }, [id, token])

  // let users = [
  //   {
  //     id: 25425,
  //     date: "Nov 7th, 2023",
  //     name: "Komeal",
  //     gender: "Male",
  //     role: "User",
  //   },
  //   {
  //     id: 25425,
  //     date: "Nov 7th, 2023",
  //     name: "Komeal",
  //     gender: "Male",
  //     role: "User",
  //   }
  //   ,{
  //     id: 25425,
  //     date: "Nov 7th, 2023",
  //     name: "Komeal",
  //     gender: "Male",
  //     role: "User",
  //   }
  //   ,{
  //     id: 25425,
  //     date: "Nov 7th, 2023",
  //     name: "Komeal",
  //     gender: "Male",
  //     role: "User",
  //   }
  //   ,{
  //     id: 25425,
  //     date: "Nov 7th, 2023",
  //     name: "Komeal",
  //     gender: "Male",
  //     role: "User",
  //   }
  // ];
  return (
    <div className="user-table rad-16 shadow">
      <h2>Users</h2>
      <div className="responsive-table">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Date</th>
              <th>User Name</th>
              <th>Gender</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=> {
                return (
                  <tr key={user.id}>
                  <td>#{user.id}</td>
                  <td>{user.createdAt.split("T")[0]}</td>
                  <td>
                    {/* {
                    user.profileImg ?
                      (<img src={user.profileImg.url} className="rad-full" alt="user" />):""
                    } */}
                    {user.name}
                    </td>
                  <td>{user.gender}</td>
                  <td>{user.role}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable;