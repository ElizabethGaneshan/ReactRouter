import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();
  console.log(params, "params");
  return <div>ProfilePage {params?.profileId} </div>;
};

export default ProfilePage;
