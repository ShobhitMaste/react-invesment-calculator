import { calculateInvestmentResults, formatter } from "../utils/investment.js";

export default function OutputBox({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const investmentData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  console.log(investmentData);
  var totalInterest = 0;
  var totalInvestment = initialInvestment;
  return (
    <div className="outputArea">
      <table >
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>
        <tbody align="right">
        {investmentData.map((data) => {
          totalInterest += data.interest
          totalInvestment += data.annualInvestment
          return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestment)}</td>
              </tr>
          );
        })}
            </tbody>
      </table>
    </div>
  );
}
