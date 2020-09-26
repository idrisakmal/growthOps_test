import React from "react";

export default function UserDetailCard({ user }) {
  return (
    <div className="border border-solid flex shadow-md p-4 justify-around">
      <div className="w-1/3 mr-2">
        <img
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mr-3"
          src={require("../assets/avatar.jpg")}
          alt=""
        />
      </div>
      <div>
        <h1 className="font-bold text-xl mb-3">{user.name}</h1>
        <h2>
          Email: <span className="font-bold text-sm">{user.email}</span>
        </h2>
        <h2>
          Mobile: <span className="font-bold text-sm">{user.phone}</span>
        </h2>
        <h2>
          Company: <span className="font-bold text-sm">{user.company}</span>
        </h2>
        <h2>
          Address:{" "}
          <span className="font-bold text-sm">{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</span>
        </h2>
        <h2>
          Website: <span className="font-bold text-sm">{user.website}</span>
        </h2>
        <h2>
          Age: <span className="font-bold text-sm">{user.age}</span>
        </h2>
      </div>
    </div>
  );
}
