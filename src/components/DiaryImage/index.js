import React, { Component } from "react";
import Link, { withPrefix } from 'gatsby-link'

class DiaryImage extends Component {
  render() {
    const { id, caption } = this.props;
    
    let imgBase = `/images/paivakirja/${id.toString().padStart(3, "0")}`;

    return (
      <a key={id} className="diaryentry-image" href={withPrefix(`${imgBase}.jpeg`)}>
        <img src={withPrefix(`${imgBase}-small.jpeg`)} alt={caption} />
      </a>
    );
  }
}

export default DiaryImage;
