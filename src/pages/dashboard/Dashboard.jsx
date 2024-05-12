import Header from '../../components/header/Header';
import Numbers from '../../components/numbers/Numbers';
import TopTrainers from '../../components/top-trainers/TopTrainers';
import UserTable from '../../components/users-table/UserTable';
import SearchInput from '../../components/search-input/SearchInput';
import Income from '../../components/income/Income';
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header title={"Dashboard"}/>
      <div className="holder flex">
        <div className="holder-left flex flex-col">
          <Numbers />
          <TopTrainers />
          <UserTable />
        </div>
        <div className="holder-right flex flex-col">
          <SearchInput />
          <Income />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;