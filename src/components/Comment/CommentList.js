import React, { useEffect, useState } from "react";

import CommentDetail from "components/Comment/CommentDetail";
import { getServerUrl } from "utils/url";

const CommentList = ({ listingId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(getServerUrl(`listing/comment/${listingId}`));
      const { result } = await res.json();
      setComments(result);
    };
    fetchComments();
  }, [listingId]);
  return (
    <div className="">
      {comments.map((item, idx) => (
        <CommentDetail key={idx} {...item} />
      ))}
    </div>
  );
};

export default CommentList;
