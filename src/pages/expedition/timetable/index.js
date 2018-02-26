import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import objectivesImg from './leirin-pystytys.jpg';

const pageId = "timetable";

const Timetable = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <aside>      
        <img alt={t("imgAlt")} src={objectivesImg} />
      </aside>
        
    </article>
  );

export default translate(pageId)(Timetable)
