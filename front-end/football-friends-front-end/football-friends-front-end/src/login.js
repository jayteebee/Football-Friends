import { useState } from "react";
export default function Login() {
  return (
    <div className="loginPage">
      <h1>Login</h1>
      <div className="loginForm">
        <h2>test</h2>
        <input className="inputUsername" type="text" />
      <br></br>
        <input className="inputPassword" type="text" />
      <br></br>
        <button className="searchButtonForFootballFriend">Submit</button>
      </div>
    </div>
  );
}
