import React, { Component } from "react";
import { withPrefix } from "gatsby";

class DiaryImage extends Component {
  render() {
    const { id, caption } = this.props;

    let imgBase = `/images/paivakirja/${id.toString().padStart(3, "0")}`;

    return (
      <figure className="diaryentry-image">
        <a key={id} href={withPrefix(`${imgBase}.jpeg`)}>
          <img src={withPrefix(`${imgBase}-small.jpeg`)} alt={caption} />
        </a>
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
}

export default DiaryImage;
