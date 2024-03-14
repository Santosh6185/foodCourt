import React from "react";

const Contact = () => {
  return (
    <div className="">
      <h1 className="font-semibold text-3xl p-4 m-4">Contact page</h1>
      <form action="">
        <input type="text" placeholder="name" className="border border-black p-2 m-2 rounded-md" />
        <input type="text" placeholder="message" className="border border-black p-2 m-2 rounded-md" />
        <button className="border border-black p-2 m-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
