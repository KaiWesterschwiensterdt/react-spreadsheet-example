import { useState, useEffect } from "react";
import Spreadsheet, { CellBase, Matrix } from "react-spreadsheet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [data, setData] = useState<Matrix<CellBase<any>>>([
    [
      { value: "1st", readOnly: true, className: "text-danger" },
      { value: "2nd", className: "text-danger" },
      { value: "3rd", readOnly: true },
      { value: "4th", className: "font-weight-bold" },
      { value: "5th" }
    ],
    [
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Citrus" }
    ]
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Spreadsheet data={data} onChange={setData} />
    </div>
  );
}
