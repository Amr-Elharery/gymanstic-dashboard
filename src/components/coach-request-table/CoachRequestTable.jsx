import './CoachRequestTable.css';
import UserImage from "../../assets/imgs/user-table-user-1.png";
import MoreIcon from "../../assets/imgs/more-icon.png";

function CoachRequestTable() {
    let coaches = [
        {
          id: 25425,
          date: "Nov 7th, 2023",
          name: "Komeal",
          status: "Processing",
          role: "User",
        },
        {
          id: 25425,
          date: "Nov 7th, 2023",
          name: "Komeal",
          status: "Processing",
          role: "User",
        }
        ,{
          id: 25425,
          date: "Nov 7th, 2023",
          name: "Komeal",
          status: "Processing",
          role: "User",
        }
        ,{
          id: 25425,
          date: "Nov 7th, 2023",
          name: "Komeal",
          status: "Canceled",
          role: "User",
        }
        ,{
          id: 25425,
          date: "Nov 7th, 2023",
          name: "Komeal",
          status: "Acceptable",
          role: "User",
        }
        ,
        {
          id: 25425,
          date: "Nov 7th, 2023",
          name: "Komeal",
          status: "Processing",
          role: "User",
        }
        ,{
          id: 25425,
          date: "Nov 7th, 2023",
          name: "Komeal",
          status: "Processing",
          role: "User",
        }
      ];

      let bulletStyle = (status) =>{
        return {
            width: "10px",
            height: "10px",
            marginRight: "10px",
            backgroundColor: status.toLowerCase() === "processing" ? "#FE6E0E"
                            : status.toLowerCase() === "canceled" ? "#FFA52F"
                            : status.toLowerCase() === "acceptable" ? "#5EAD6D"
                            : "#000",
            borderRadius: "50%",
            display: "inline-block",
          }
      }

      return (
        <div className="coaches-table rad-16 shadow">
            <div className="flex items-center flex-between">
                <h2>Request</h2>
                <div className="icon">
                    <img src={MoreIcon} alt="More" />
                </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Date</th>
                  <th>User Name</th>
                  <th>Status</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {coaches.map((user)=> {
                    return (
                      <tr key={user.id}>
                      <td>#{user.id}</td>
                      <td>{user.date}</td>
                      <td>
                        <img src={UserImage} alt="user" />
                        {user.name}
                        </td>
                      <td><span className='bullet' style={bulletStyle(user.status)}></span>{user.status}</td>
                      <td>{user.role}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
      )
}

export default CoachRequestTable;