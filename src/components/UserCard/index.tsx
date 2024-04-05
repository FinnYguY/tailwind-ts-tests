import React from "react";
import { User } from "../../constants.ts";

interface UserCardProps {
  userInfo: User;
  type: "brief" | "detailed";
}

function UserCard({ userInfo, type }: UserCardProps) {
  return (
    <div className="flex w-96 cursor-pointer flex-row space-x-2 rounded-md border-4 border-white/50 bg-white/25 p-2 duration-300 hover:border-white/100 hover:bg-white/50">
      <img
        className="h-16 w-16 rounded-md object-cover"
        src={userInfo.avatarUrl}
        alt="User avatar"
      />
      <div className="flex flex-col justify-center">
        <p className="drop-shadow-small">Name: {userInfo.name}</p>
        <p className="drop-shadow-small">Age: {userInfo.age}</p>
        {type === "detailed" ? (
          <>
            <div>Job: {userInfo.job}</div>
            <div>About: {userInfo.about}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default UserCard;
