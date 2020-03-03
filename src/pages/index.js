import React from "react";
import { withPrefix } from "gatsby";
import { useLocalization } from "../components/i18n";
import LanLink from "../components/LanLink";
import Page, { headerImages } from "../components/Page";

import "./index.scss";

const pageId = "index";

const IndexPage = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} headerImg={headerImages.top5}>
      <div id="index-content">
        <div id="index-latestdiary">
          <div>
            <h2>{t("diary.header")}</h2>
            <h3>{t("diary.subHeader")}</h3>
            <p className="index-diarytext">
              {t("diary.text")}{" "}
              <LanLink to="/diary/2006-05-05-retkikunta-suomessa">
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
              <LanLink to="/expedition">{t("expedition.readMore")}</LanLink>
            </p>
          </div>
          <aside>
            <LanLink to="/diary/book">
              <h3>{t("book.header")}</h3>
            </LanLink>
            <LanLink to="/diary/book">{t("book.orderLink")}</LanLink>
          </aside>
        </div>
      </div>
    </Page>
  );
};

export default IndexPage;
