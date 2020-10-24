import React, { useState } from "react";

const toTruncatedText = (str, charCount) => {
  return str.slice(0, charCount);
};

const Truncate = ({ str, charCount }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const truncatedText = toTruncatedText(str, charCount);
  const textNeedsToBeTruncated = str.length > charCount;

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  /**
   * no truncate needed - show original text
   *
   * truncate needed, hide extra text - show truncated text plus 'read more'
   *
   * truncate needed, shown extra text
   */

  return (
    <>
      <p className="tw-summary-p">
        {!textNeedsToBeTruncated && <span className="">{str}</span>}
        {textNeedsToBeTruncated && isTruncated && (
          <span className="">
            {truncatedText}
            <span className="tw-read-more" onClick={toggleTruncate}>
              ...
            </span>
          </span>
        )}
        {textNeedsToBeTruncated && !isTruncated && (
          <span className="">
            {str}
            <span className="tw-read-more" onClick={toggleTruncate}>
              ... less
            </span>
          </span>
        )}
      </p>
    </>
  );
};

export default Truncate;
