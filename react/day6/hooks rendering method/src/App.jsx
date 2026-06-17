import BasicState from "./components/BasicState";
import ObjectState from "./components/ObjectState";
import BooleanState from "./components/BooleanState";

function App() {
  return (
    <>
      <h1>React useState Tasks</h1>

      <BasicState />
      <ObjectState />
      <BooleanState />
    </>
  );
}

export default App;