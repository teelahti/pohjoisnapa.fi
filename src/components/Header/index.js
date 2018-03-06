import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import LanguageSwitcher from '../LanguageSwitcher'

import top1 from "./top1.jpg";
import top2 from "./top2.jpg";
import top5 from "./top5-sponsors.jpg";
import top6 from "./top6.jpg";
import top7 from "./top7.jpg";
import top8 from "./top8.jpg";

const Header = (props) => (
  <div
    style={{
      backgroundImage: `url(${props.img ? props.img : top5})`,
      height: "182px",
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

export let headerImages = {
  top1: top1,
  top2: top2,
  top5: top5,
  top6: top6, 
  top7: top7,
  top8: top8
}
