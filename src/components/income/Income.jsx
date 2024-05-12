import IncomeImage from "../../assets/imgs/income.png";
import IncomeImage2 from "../../assets/imgs/income-2.png";
import LastMonthIcon from "../../assets/imgs/last-month-icon.png";
import ThisMonthIcon from "../../assets/imgs/this-month-icon.png";
import "./Income.css";

function Income() {
  return (
    <div className='income rad-16'>
        <h2>Income</h2>
        <div className="img">
            <img src={IncomeImage} alt="Income" />
            <img src={IncomeImage2} alt="Income2" />
        </div>
        <div className="compare flex justify-center items-center">
            <div className="month last-month flex flex-col items-center">
                <div className="title">
                    <img src={LastMonthIcon} alt="Last Month" />
                    Last Month
                    </div>
                <p className="value">$1000</p>
            </div>
            <span className="vertical-line"></span>
            <div className="month this-month">
            <div className="title">
                    <img src={ThisMonthIcon} alt="Last Month" />
                    This Month
                    </div>
                <p className="value">$4500</p>
            </div>
        </div>
    </div>
  )
}

export default Income;