import React from "react";
import { usersList } from "./constants.ts";
import UserCardsList from "./components/UserCardsList/index.tsx";

function App() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-xl text-white">
      <p className="cursor-pointer hover:underline">User cards</p>
      <UserCardsList cardsArray={usersList} />
    </div>
  );
}

export default App;
