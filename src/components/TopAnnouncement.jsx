import React from "react";

const Announcement = ({ message, underlinedMessage, link }) => {
  return (
    <div className="z-50 w-full px-4 py-3 text-white bg-[rgb(24,24,24)]">
      <p className="text-xs font-medium text-center">
        {message}
        <a className="underline" href={link}>
          {" "}
          {underlinedMessage} &rarr;{" "}
        </a>
      </p>
    </div>
  );
};

export default Announcement;
