import { useState } from "react";
import { getAllUsers, getOneUser, createUser, updateUser } from "../../API/UserApiCalls";
import { createAdmiredPlayer, deleteAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";
export default function Homepage() {

  // const test = getAllUsers().then((res) => res.json())
  // console.log(test)

// const test2 = getOneUser("6454e712e12f643ac6218e6a")
// console.log(test2)

// const test3 = createUser({
//   email: "test frontend email",
//   password: "frontend pass test"
// })
// console.log(test3)

// const test4 = updateUser("64567cde27c32f9e4e6f7cc6", {
//   email: "updated frontend email"
// })
// console.log(test4)

// const test5 = createAdmiredPlayer("64567cde27c32f9e4e6f7cc6", {
//   name: "test 3 name",
//   reasonAdmired: "test 3 test"
// })
// console.log(test5)

// const test6 = deleteAdmiredPlayer("64567cde27c32f9e4e6f7cc6", "64567f7227c32f9e4e6f7ce2")
// console.log(test6)

  return <h1>Homepage</h1>;
}