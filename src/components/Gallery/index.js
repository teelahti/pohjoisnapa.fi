import PropTypes from "prop-types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "./gallery.scss";

const Gallery = ({ imgs, heading, subheading }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="section">
      {heading && <h2>{heading}</h2>}
      {subheading && <p>{subheading}</p>}

      <Swiper spaceBetween={10} navigation={true} modules={[Navigation]} onSwiper={setSwiper}>
        {imgs.map((e, i) => (
          <SwiperSlide key={i}>
            <figure>
              <img src={e.source.regular} alt={e.caption} />
              <figcaption>{e.caption}</figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gallery">
        {imgs.map((obj, i) => (
          <Thumbnail key={i} id={i} obj={obj} swiper={swiper} />
        ))}
      </div>
    </div>
  );
};

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  imgs: PropTypes.array,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default Gallery;

const Thumbnail = ({
  id,
  obj: {
    caption,
    source: { thumbnail, regular },
  },
  swiper,
}) => (
  <a
    href={regular}
    onClick={e => {
      e.preventDefault();
      swiper.slideTo(id);
    }}
  >
    <img src={thumbnail} className="gallery-source" alt={caption} />
  </a>
);
