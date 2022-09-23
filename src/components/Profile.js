import React from "react";
import {useSelector } from "react-redux";
import {
  updateName,
  updateEmail,
  updateJoke,
} from "../actionTypes/ActionTypes";
import Button from "../buttons/Button";
import { Update_Email,Update_Name , Update_Joke } from "../buttonTexts/ButtonText";

function Profile() {
  const { name, email, joke } = useSelector((state) => state);
  return (
    <div>
      <h1>I am {name}</h1>
      <h1>My Email is {email}</h1>
      <span>Joke {joke}</span>
      <br />
      <br />
      <br />
      <Button buttonText={Update_Name} actionType={updateName} />
      <Button buttonText={Update_Email} actionType={updateEmail} />
      <Button buttonText={Update_Joke} actionType={updateJoke} />
    </div>
  );
}
export default Profile;
