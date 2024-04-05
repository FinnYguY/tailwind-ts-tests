import React from "react";
import UserCard from "../UserCard/index.tsx";
import { User } from "../../constants.ts";

interface UserCardsListProps {
  cardsArray: Array<User>;
}

export default function UserCardsList({ cardsArray }: UserCardsListProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {cardsArray.map((card) => {
        return <UserCard userInfo={card} type="brief" key={card.id} />;
      })}
    </div>
  );
}
