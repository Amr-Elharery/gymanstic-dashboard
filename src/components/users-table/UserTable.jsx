import "./UserTable.css";

function UserTable() {
  let users = [];
  return (
    <div className="user-tabel">
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
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable;