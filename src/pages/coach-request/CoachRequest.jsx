import Header from "../../components/header/Header";
import CoachRequestTable from "../../components/coach-request-table/CoachRequestTable";
import CoachInfo from "../../components/coach-info/CoachInfo";
import AddCoach from "../../components/add-coach/AddCoach";
import "./CoachRequest.css";

function CoachRequest() {
  return (
    <div className="coach-request">
        <Header title={"Coach Request"} />
        <div className="holder flex">
          <div className="holder-left">
            <CoachRequestTable />
          </div>
          <div className="holder-right flex flex-col">
              <CoachInfo />
            <span className="horizontal-line"></span>
              <AddCoach />
          </div>
        </div>
    </div>
  )
}

export default CoachRequest