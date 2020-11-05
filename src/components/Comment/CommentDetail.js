import React from "react";

const CommentDetail = ({ first_name, last_name, username, content }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/4 text-left">
          {first_name} {last_name}: {content}
          <hr className="my-6" />
        </div>
      </div>
    </>
  );
};

export default CommentDetail;
