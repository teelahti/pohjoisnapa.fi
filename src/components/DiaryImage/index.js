import React from "react";
import { withPrefix } from "gatsby";

const DiaryImage = ({ id, caption }) => {
  const imgBase = `/images/paivakirja/${id.toString().padStart(3, "0")}`;

  return (
    <figure className="diaryentry-image">
      <a key={id} href={withPrefix(`${imgBase}.jpeg`)}>
        <img src={withPrefix(`${imgBase}-small.jpeg`)} alt={caption} />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default DiaryImage;
