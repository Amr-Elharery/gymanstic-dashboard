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
            <div className="up">
              <CoachInfo />
            </div>
            <span className="horizontal-line"></span>
            <div className="down">
              <AddCoach />
            </div>
          </div>
        </div>
    </div>
  )
}

export default CoachRequest