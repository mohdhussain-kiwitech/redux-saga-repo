import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const { name, email, joke } = useSelector((state) => state);
  console.warn(joke);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>I am {name}</h1>
      <h1>My Email is {email}</h1>
      <span>Joke {joke}</span>
      <br />
      <br />
      <br />

      <button onClick={() => dispatch({ type: "UPDATE_NAME" })}>
        Update NAME
      </button>
      <button onClick={() => dispatch({ type: "UPDATE_EMAIL" })}>
        Update EMAIL
      </button>
      <button onClick={() => dispatch({ type: "UPDATE_JOKE" })}>
        Update JOKE
      </button>
    </div>
  );
}

export default Profile;
