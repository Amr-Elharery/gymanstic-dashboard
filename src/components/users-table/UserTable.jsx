import "./UserTable.css";
import UserImage from "../../assets/imgs/user-table-user-1.png";
function UserTable() {
  let users = [
    {
      id: 25425,
      date: "Nov 7th, 2023",
      name: "Komeal",
      gender: "Male",
      role: "User",
    }
    ,{
      id: 25425,
      date: "Nov 7th, 2023",
      name: "Komeal",
      gender: "Male",
      role: "User",
    }
    ,{
      id: 25425,
      date: "Nov 7th, 2023",
      name: "Komeal",
      gender: "Male",
      role: "User",
    }
    ,{
      id: 25425,
      date: "Nov 7th, 2023",
      name: "Komeal",
      gender: "Male",
      role: "User",
    }
  ];
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
                  <td>{user.date}</td>
                  <td>
                    <img src={UserImage} alt="user" />
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