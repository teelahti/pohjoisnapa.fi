import React from 'react'
import LanLink from "../LanLink";
import LanguageSwitcher from '../LanguageSwitcher'

import top1 from "./top1.jpg";
import top2 from "./top2.jpg";
import top5 from "./top5-sponsors.jpg";
import top6 from "./top6.jpg";
import top7 from "./top7.jpg";
import top8 from "./top8.jpg";

import logo from "./logo_vaalea.gif";

const Header = ({lan, img}) => (
  <header>
    <LanguageSwitcher lan={lan} />
    <div
      style={{
        backgroundImage: `url(${img ? img : top5})`,
        width: "740px",
        height: "181px",
        marginBottom: '5px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <LanLink
          to="/"
          lan={lan}
          style={{
            position: "relative",
            left: "30px",
            top: "118px",
          }}
        >
          <img src={logo} />
        </LanLink>
      </h1>
    </div>
  </header>
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
