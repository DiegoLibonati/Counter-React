import type { JSX } from "react";

import CounterPage from "@/pages/CounterPage/CounterPage";

function App(): JSX.Element {
  return <CounterPage value={0}></CounterPage>;
}

export default App;
