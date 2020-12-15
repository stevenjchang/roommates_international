import React from "react";
import {
  FaExclamationTriangle,
  FaExclamationCircle,
  FaExclamation,
} from "react-icons/fa";

const Avatar = ({ first_name, last_name }) => {
  const commentUserInitials = first_name[0] + last_name[0];
  const bgColorsList = [
    "bg-green-400",
    "bg-teal-400",
    "bg-yellow-400",
    "bg-red-400",
    "bg-indigo-400",
    "bg-orange-400",
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
  ];
  const bgColor = bgColorsList[Math.floor(Math.random() * bgColorsList.length)];
  const classNameString = `h-10 w-10 rounded-full ${bgColor} flex justify-center items-center`;

  return (
    <div className={classNameString}>
      <span className="text-white font-bold uppercase">
        {commentUserInitials}
      </span>
    </div>
  );
  // return (
  //   <img
  //     className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
  //     src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //     alt=""
  //   />
  // );
};

const CommentDetail = ({ first_name, last_name, username, content }) => {
  return (
    <>
      <div className="mb-8">
        <div className="flex flex-col justify-center">
          <div className="flex text-left">
            <div className="flex -space-x-2 overflow-hidden">
              <Avatar first_name={first_name} last_name={last_name} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-bold">
                {first_name} {last_name}
              </p>
              <p className="text-xs text-gray-700">Dec 12th, 2020</p>
            </div>
          </div>
          <div className="text-left mt-4">
            <p className="">{content}</p>
          </div>
          <div className="flex justify-between mt-4 text-xs font-bold text-gray-500">
            <span className="">
              <a href="">reply</a>
            </span>
            <span>
              <a href="">
                report user &nbsp;
                <FaExclamationTriangle class="inline-block" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
};

export default CommentDetail;
