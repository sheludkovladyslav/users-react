import "./App.css";
import users from "./data/users.json";
import { UserList } from "./components/UserList";
import { Container } from "./components/Container";

function App() {
  return (
    <>
      <Container title="Наші користувачі">
        <UserList users={users} />
      </Container>
    </>
  );
}

export default App;
