import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import foodImg from './tero-ja-perttu-syo.jpg';

const pageId = "food";

const Food = ({t}) => (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <div className="content" dangerouslySetInnerHTML={{ __html: t("text")} } />

      <aside id="food-recipe">
        <img alt={t("recipe.imgAlt")} src={foodImg} />
        
        <h2>{t("recipe.header")}</h2>

        <div dangerouslySetInnerHTML={{ __html: t("recipe.text")} } />
      </aside>
    </article>
  );

export default translate(pageId)(Food)