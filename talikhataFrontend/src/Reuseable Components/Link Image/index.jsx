import React from "react";

const ImageLink = ({ url, className }) => {
  return <img className={className} src={url} alt="image" />;
};

export default ImageLink;
