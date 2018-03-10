import React, { Component } from "react";
import { translate } from "react-i18next";
import LanLink from '../LanLink';
import './navigation.scss'

class Navigation extends Component {
  render() {
    const { location, t, i18n } = this.props;
    const lan = i18n.language;

    const ListLink = ({ to, exact, text, children, ...rest }) =>
      <li>
        <LanLink activeClassName="nav-active" to={to} lan={lan} exact={exact} {...rest}>
          {text}
        </LanLink>
        {children}
      </li>

    const nav = {
      "/": {
        exact: true,
        text: t("home")
      },
      "/expedition": {
        text: t("expedition.index"),
        sub: {
          "/expedition/background": { text: t("expedition.background") },
          "/expedition/objectives": { text: t("expedition.objectives") },
          "/expedition/timetable": { text: t("expedition.timetable") },
          "/expedition/research": { text: t("expedition.research") },
          "/expedition/equipment": { text: t("expedition.equipment") },
          "/expedition/club": { text: t("expedition.club") }
        }
      },
      "/diary/2006-05-05-retkikunta-suomessa": {
        text: t("diary.index"),
        sub: {
          "/diary/all": { text: t("diary.all") },
          "/diary/data": { text: t("diary.data") },
          "/diary/book": { text: t("diary.book") }
        }
      },
      "/gallery": {
        text: t("gallery.index"),
        sub: {
          "/gallery/at-ice": { text: t("gallery.ice") },
          "/gallery/previous-expeditions": { text: t("gallery.previous") },
          "/gallery/press": { text: t("gallery.press") }
        }
      },
      "/sponsors": {
        text: t("sponsors.index"),
        sub: {
          "/sponsors/list": { text: t("sponsors.list") },
          "/sponsors/media": { text: t("sponsors.media") },
          "/sponsors/events": { text: t("sponsors.events") }
        }
      },
      "/arctic": {
        text: t("arctic.index"),
        sub: {
          "/arctic/history": { text: t("arctic.history") },
          "/arctic/polar-bear": { text: t("arctic.polarBear") },
          "/arctic/climate-change": { text: t("arctic.climateChange") },
          "/arctic/orienteering": { text: t("arctic.orienteering") },
          "/arctic/photographing": { text: t("arctic.photographing") },
          "/arctic/food": { text: t("arctic.food") }
        }
      }
    }

    let subNav = null;

    // regex: (\/.{2}\/){0,1} + path
    // Iterate through paths and check which one is active
    //var pathTest = new RegExp("\/.{2}\/){0,1}");
    console.log("path", location.pathname);
    Object.keys(nav).forEach(path => {
      // Test with or without language
      var pathReg = new RegExp("(\/[a-z]{2}\/){0,1}" + path + "$");
      if (pathReg.test(location.pathname)) {
        nav[path].active = true;
        subNav = nav[path].sub;
      } else if (nav[path].sub) {
        // Check if any subpath matches
        Object.keys(nav[path].sub).forEach(subpath => {
          var subReg = new RegExp("(\/[a-z]{2}\/){0,1}" + subpath);
          if (subReg.test(location.pathname)) {
            nav[path].active = true;
            nav[path].sub[subpath].active = true;
            subNav = nav[path].sub;
          }
        });
      }
    });

    console.log("subnav", subNav);

    return (
      <nav id="nav">
        <ul className="nav-main">
          {
            Object.keys(nav).map(p => 
              <ListLink key={p} to={p} exact={nav[p].exact} text={nav[p].text} className={nav[p].active ? "nav-active" : ""} />
            )
          }
        </ul>
        { subNav ? 
          <ul className="nav-sub">
          {
            Object.keys(subNav).map(p => 
              <ListLink key={p} to={p} exact={subNav[p].exact} text={subNav[p].text} />
            ) 
          } 
          </ul> : false } 
      </nav>
    );
  }
}

export default translate("navigation")(Navigation);
