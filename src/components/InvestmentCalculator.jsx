import { useState } from "react";
import OutputBox from "./OutputBox.jsx";

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(300);
  const [expectedReturn, setExpectedReturn] = useState(5.5);
  const [duration, setDuration] = useState(10);

  function handleInitialInvestmentInput(event) {
    setInitialInvestment(() => parseFloat(event.target.value));
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(() => parseFloat(event.target.value));
  }

  function handleExpectedReturn(event) {
    setExpectedReturn(() => parseFloat(event.target.value));
  }

  function handleDuration(event) {
    setDuration(() => parseFloat(event.target.value));
  }

  return (
    <div className="flex-center flex-col">
      <div className="inputbox">
        <div className="inputfield">
          <p>INITIAL INVESTMENT</p>
          <input
            value={initialInvestment}
            type="number"
            step="500"
            onChange={handleInitialInvestmentInput}
          ></input>
        </div>

        <div className="inputfield">
          <p>ANNUAL INVESTMENT</p>
          <input
            value={annualInvestment}
            type="number"
            step="100"
            onChange={handleAnnualInvestment}
          ></input>
        </div>

        <div className="inputfield">
          <p>EXPECTED RETURN</p>
          <input
            value={expectedReturn}
            type="number"
            step="0.01"
            onChange={handleExpectedReturn}
          ></input>
        </div>

        <div className="inputfield">
          <p>DURATION</p>
          <input
            value={duration}
            type="number"
            onChange={handleDuration}
          ></input>
        </div>
      </div>

      <OutputBox
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </div>
  );
}
