import React from "react";

import UserDetailCard from "./UserDetailCard";

export default function UserDetailResult(props) {
  return (
    <div className="bg-white h-auto min-h-full px-4 md:px-12 lg:px-18 xl:px-24 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-8 xl:gap-12 gap-y-3">
        {props.data.map((user, index) => {
          return <UserDetailCard user={user} key={index} />;
        })}
      </div>
    </div>
  );
}
