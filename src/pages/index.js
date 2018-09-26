import React from "react";
import { translate } from "react-i18next";
import { withPrefix } from "gatsby";
import LanLink from "../components/LanLink";
import Page, { headerImages } from "../components/Page";

import "./index.scss";

const pageId = "index";

const IndexPage = ({ t, pathContext, location }) => (
  <Page
    id={pageId}
    headerImg={headerImages.top5}
    language={pathContext.language}
    location={location}
  >
    <div id="index-content">
      <div id="index-latestdiary">
        <div>
          <h2>{t("diary.header")}</h2>
          <h3>{t("diary.subHeader")}</h3>
          <p className="index-diarytext">
            {t("diary.text")}{" "}
            <LanLink
              to="/diary/2006-05-05-retkikunta-suomessa"
              lan={pathContext.language}
            >
              {t("diary.readMore")}
            </LanLink>
          </p>
        </div>
        <aside>
          <img src={withPrefix("/images/paivakirja/099-small.jpeg")} alt="" />
        </aside>
      </div>

      <div id="index-static">
        <div>
          <h2>{t("expedition.header")}</h2>
          <h3>{t("expedition.subHeader")}</h3>
          <p>
            {t("expedition.text")}{" "}
            <LanLink to="/expedition" lan={pathContext.language}>
              {t("expedition.readMore")}
            </LanLink>
          </p>
        </div>
        <aside>
          <LanLink to="/diary/book" lan={pathContext.language}>
            <h3>{t("book.header")}</h3>
          </LanLink>
          <LanLink to="/diary/book" lan={pathContext.language}>
            {t("book.orderLink")}
          </LanLink>
        </aside>
      </div>
    </div>
  </Page>
);

export default translate(pageId)(IndexPage);
