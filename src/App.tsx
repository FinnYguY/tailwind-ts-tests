import React from "react";
import UserCard from "./components/UserCard/index.tsx";
import { usersList } from "./constants.ts";

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-6xl ">
      <p className="cursor-pointer hover:underline">User card</p>
      <UserCard userInfo={usersList[0]} type="brief" />
    </div>
  );
}

export default App;
