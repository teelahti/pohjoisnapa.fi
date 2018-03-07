import React from 'react'
import Page, { headerImages } from "../../../components/Page";
import { translate } from "react-i18next";
import objectivesImg from './leirin-pystytys.jpg';

const pageId = "timetable";

const Timetable = ({t, pathContext}) => (
  <Page id={pageId} title={t("title")} headerImg={headerImages.top8} language={pathContext.language}>

    <h1>{t("header")}</h1>

    <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

    <aside>      
      <img alt={t("imgAlt")} src={objectivesImg} />
    </aside>
      
  </Page>
  );

export default translate(pageId)(Timetable)
