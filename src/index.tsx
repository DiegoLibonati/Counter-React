import ReactDOM from "react-dom/client";

import CounterApp from "@src/App";

import "@src/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<CounterApp />);
