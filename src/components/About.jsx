import React, { useEffect } from "react";
import UserClass from "./UserClass";

const About = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="">
      <div className="">About Page</div>
      <UserClass name={"Harit Khushwas"} />
    </div>
  );
};

export default About;
