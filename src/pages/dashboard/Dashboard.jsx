import Header from '../../components/header/Header';
import Numbers from '../../components/numbers/Numbers';
import TopTrainers from '../../components/top-trainers/TopTrainers';
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header title={"Dashboard"}/>
      <div className="holder flex">
        <div className="holder-left flex flex-col">
          <Numbers />
          <TopTrainers /> 
        </div>
        <div className="holder-right"></div>
      </div>
    </div>
  )
}

export default Dashboard;