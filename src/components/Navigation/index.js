import React, { Component } from "react";
import { translate } from "react-i18next";
import Link, { withPrefix } from 'gatsby-link';
import './navigation.css'

const ListLink = props =>
  <li>
    <Link activeClassName="nav-active" to={props.to} exact={props.exact}>
      {props.text}
    </Link>
    {props.children}
  </li>

class Navigation extends Component {
  render() {
    const { t } = this.props;

    return (
      <nav id="nav">
        <ul className="nav-main">
          <ListLink to="/" exact="true" text={t("home")} />
          <ListLink to="/expedition" text={t("expedition.index")}>
            <ul className="nav-sub">
              <ListLink to="/expedition/background" text={t("expedition.background")} />
              <ListLink to="/expedition/objectives" text={t("expedition.objectives")} />
              <ListLink to="/expedition/timetable" text={t("expedition.timetable")} />
              <ListLink to="/expedition/research" text={t("expedition.research")} />
              <ListLink to="/expedition/equipment" text={t("expedition.equipment")} />
              <ListLink to="/expedition/club" text={t("expedition.club")} />
            </ul>
          </ListLink>
          <ListLink to="/diary" text={t("diary.index")}>
            <ul className="nav-sub">
              <ListLink to="/diary/all" text={t("diary.all")} />
              <ListLink to="/diary/last" text={t("diary.last")} />
              <ListLink to="/diary/data" text={t("diary.data")} />
              <ListLink to="/diary/book" text={t("diary.book")} />
            </ul>
          </ListLink>
          <ListLink to="/gallery" text={t("gallery.index")}>
            <ul className="nav-sub">
              <ListLink to="/gallery/at-ice" text={t("gallery.ice")} />
              <ListLink to="/gallery/previous-expeditions" text={t("gallery.previous")} />
              <ListLink to="/gallery/press" text={t("gallery.press")} />
            </ul>
          </ListLink>
          <ListLink to="/sponsors" text={t("sponsors.index")}>
            <ul className="nav-sub">
              <ListLink to="/sponsors/list" text={t("sponsors.list")} />
              <ListLink to="/sponsors/media" text={t("sponsors.media")} />
              <ListLink to="/sponsors/events" text={t("sponsors.events")} />
            </ul>
          </ListLink>
          <ListLink to="/arctic" text={t("arctic.index")}>
            <ul className="nav-sub">
              <ListLink to="/arctic/history" text={t("arctic.history")} />
              <ListLink to="/arctic/polar-bear" text={t("arctic.polarBear")} />
              <ListLink to="/arctic/climate-change" text={t("arctic.climateChange")} />
              <ListLink to="/arctic/orienteering" text={t("arctic.orienteering")} />
              <ListLink to="/arctic/photographing" text={t("arctic.photographing")} />
              <ListLink to="/arctic/food" text={t("arctic.food")} />
            </ul>
          </ListLink>
        </ul>
      </nav>
    );
  }
}

export default translate("Navigation")(Navigation);
