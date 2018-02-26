import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import LanguageSwitcher from '../LanguageSwitcher'

import top1 from "./top1.jpg";
import top2 from "./top2.jpg";
import top3 from "./top3.jpg";
import top4 from "./top4.jpg";
import top5 from "./top5-sponsors.jpg";
import top6 from "./top6.jpg";
import top7 from "./top7.jpg";
import top8 from "./top8.jpg";

const Header = () => (
  <div
    style={{
      backgroundImage: `url(${getImg(location.pathname)})`,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Pohjoisnapa
        </Link>
      </h1>
      <LanguageSwitcher />
    </div>
  </div>
)

export default Header

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

function getImg(path) {
  if (path.startsWith(withPrefix("/arctic"))) {
    return top1;
  }

  if (path.startsWith(withPrefix("/expedition/background") || path.startsWith(withPrefix("/gallery")))) {
    return top7;
  }

  if (path.startsWith(withPrefix("/expedition/objectives"))) {
    return top2;
  }

  if (path.startsWith(withPrefix("/expedition/equipment"))) {
    return top6;
  }

  if (path.startsWith(withPrefix("/expedition"))) {
    return top8;
  }

  if (path.startsWith(withPrefix("/sponsors"))) {
    return top5;
  }

  return top5;
}