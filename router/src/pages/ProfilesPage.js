import React from "react";
import { Link, Outlet } from "react-router-dom";

const profiles = [1, 2, 3, 4, 5];

const ProfilesPage = () => {
  return (
    <div className="flex flex-col gap-2">
      {profiles?.map((profile, index) => {
        return (
          <Link key={index} to={`/profiles/${profile}`}>
            Profile {profile}
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
