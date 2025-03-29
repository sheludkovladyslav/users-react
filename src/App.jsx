import "./App.css";
import users from "./data/users.json";
import { UserList } from "./components/UserList";

function App() {
  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
