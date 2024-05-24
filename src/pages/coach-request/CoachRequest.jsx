import Header from "../../components/header/Header";
import CoachRequestTable from "../../components/coach-request-table/CoachRequestTable";
import "./CoachRequest.css";

function CoachRequest() {
  return (
    <div className="coach-request">
        <Header title={"Coach Request"} />
        <div className="holder flex">
          <div className="holder-left">
            <CoachRequestTable />
          </div>
          <div className="holder-right"></div>
        </div>
    </div>
  )
}

export default CoachRequest