import { useState } from "react";

function BooleanState() {
  const [login, setLogin] = useState(false);

  const [theme, setTheme] = useState(false);

  const [show, setShow] = useState(true);

  const [employee, setEmployee] = useState(false);

  const [profile, setProfile] = useState(false);

  return (
    <>
      <h2>
        {login ? "Logged In" : "Logged Out"}
      </h2>

      <button onClick={() => setLogin(!login)}>
        Login
      </button>

      <hr />

      <h2>
        {theme ? "Dark Mode" : "Light Mode"}
      </h2>

      <button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>

      <hr />

      <button onClick={() => setShow(!show)}>
        Show / Hide
      </button>

      {show && (
        <p>This paragraph is visible.</p>
      )}

      <hr />

      <h2>
        {employee ? "Active" : "Inactive"}
      </h2>

      <button onClick={() => setEmployee(true)}>
        Activate
      </button>

      <hr />

      <button onClick={() => setProfile(true)}>
        Show Profile
      </button>

      {profile && (
        <>
          <p>Name : Sudhan</p>
          <p>City : Chennai</p>
        </>
      )}
    </>
  );
}

export default BooleanState;