export const Container = ({ title, children }) => (
  <div className="container">
    <h2 className="title">{title}</h2>
    {children}
  </div>
);
