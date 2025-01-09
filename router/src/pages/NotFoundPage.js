import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="d-flex  align-items-center justify-content-center vh-100">
        404 Not Found
        {/* Link tag from react(does not  refresh the whole page) */}
        <Link to={"/"}>Home from Link</Link>;
        {/* native anchor tag (refreshes the whole page)
        <a href="/">Home from A</a> */}
      </div>
    </>
  );
};

export default NotFoundPage;
