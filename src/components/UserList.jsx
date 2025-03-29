import { User } from "./User";

export const UserList = ({ users }) => {
  return (
    <ul className="users">
      {users.map((user, index) => {
        return (
          <li className="users__item" key={index}>
            <User user={user} />
          </li>
        );
      })}
    </ul>
  );
};
