import PropTypes from "prop-types";
import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import "./gallery.scss";

const Gallery = ({ images, heading, subheading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAt, setOpenAt] = useState(0);

  if (!images) {
    return false;
  }

  return (
    <div className="section">
      {heading && <h2>{heading}</h2>}
      {subheading && <p>{subheading}</p>}
      <div className="gallery">
        {images.map((obj, i) => (
          <a
            href={obj.source.regular}
            className={"gallery-thumbnail gallery-" + obj.orientation}
            key={i}
            onClick={e => {
              e.preventDefault();
              setOpenAt(i);
              setIsOpen(true);
            }}
          >
            <img
              src={obj.source.thumbnail}
              className="gallery-source"
              alt={obj.caption}
            />
          </a>
        ))}
      </div>
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={() => setIsOpen(false)} allowFullscreen={false}>
            <Carousel views={images} currentIndex={openAt} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
};

export default Gallery;
