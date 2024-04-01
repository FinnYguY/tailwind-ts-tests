import React from "react";
import { User } from "../../constants.ts";

interface UserCardProps {
  userInfo: User;
  type: "brief" | "detailed";
}

function UserCard({ userInfo, type }: UserCardProps) {
  return (
    <div>
      {userInfo.name}, {type}
    </div>
  );
}

export default UserCard;
