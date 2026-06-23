import {
  UserCard,
  MessageComponent,
  CounterDisplay,
  Dashboard,
  DisplayComponent,
  StudentList,
} from "./components/Components";

import {
  withBackgroundColor,
  withUpperCase,
  withCounter,
  withAuth,
  withIteration,
  withLoading,
} from "./hoc/HOCs";

const ColoredUserCard = withBackgroundColor(UserCard);
const UpperMessage = withUpperCase(MessageComponent);
const Counter = withCounter(CounterDisplay);
const ProtectedDashboard = withAuth(Dashboard);
const Iteration = withIteration(DisplayComponent);
const LoadingStudents = withLoading(StudentList);

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 1</h2>
      <ColoredUserCard name="Amirtham" role="React Developer" />

      <hr />

      <h2>Task 2</h2>
      <UpperMessage />

      <hr />

      <h2>Task 3</h2>
      <Counter />

      <hr />

      <h2>Task 4</h2>
      <ProtectedDashboard isLogin={true} />

      <hr />

      <h2>Task 5</h2>
      <Iteration />

      <hr />

      <h2>Task 6</h2>
      <LoadingStudents />
    </div>
  );
}

export default App;