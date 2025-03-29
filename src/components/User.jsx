export const User = ({ user }) => {
  return (
    <article className="user">
      <h2 className="user__name">{user.name}</h2>
      <p className="user__age">{user.age}</p>
      <p className="user__isStudent">
        {user.isStudent
          ? "Цей користувач є студентом."
          : "Цей користувач не є студентом."}
      </p>
      <p className="user__hobbies">Hobbies: {user.hobbies.join(", ")}</p>
      <div className="user__address address">
        <p className="address__city">City: {user.address.city}</p>
        <p className="address__zipcode">ZipCode: {user.address.zipCode}</p>
      </div>
    </article>
  );
};
