import { useState, useEffect } from "react";
import Spreadsheet, { CellBase, Matrix } from "react-spreadsheet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [data, setData] = useState<Matrix<CellBase<any>>>([
    [
      {
        value: "redOnly + text-color",
        readOnly: true,
        className: "text-danger"
      },
      { value: "text-color", className: "text-danger" },
      { value: "readOnly", readOnly: true },
      { value: "readOnly + css", readOnly: true, className: "header-row" },
      { value: "css", className: "header-row" },
      { value: "no options" }
    ],
    [
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Citrus" },
      { value: "Green Apple" }
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
