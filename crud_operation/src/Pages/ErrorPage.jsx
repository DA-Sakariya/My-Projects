import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops! An Error Occurred</h1>
      {error && <p className="error-message">{error.statusText || error.message || error.data}</p>}
      <NavLink to="/">
        <button className="back-button">Go Back</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
