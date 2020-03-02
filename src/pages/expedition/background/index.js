import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import backgroundImg from "./naamat-huurussa.jpg";

const pageId = "background";

const Background = ({ pageContext, location }) => {
  const { t } = useLocalization(pageId, pageContext.language);

  return (
    <Page
      id={pageId}
      title={t("title")}
      headerImg={headerImages.top7}
      location={location}
    >
      <h2>{t("header")}</h2>
      <div className="content-two-column">
        <div
          className="content left"
          dangerouslySetInnerHTML={{ __html: t("text") }}
        />

        <aside className="right">
          <img alt={t("imgAlt")} src={backgroundImg} />
        </aside>
      </div>
    </Page>
  );
};

export default Background;
