import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import photographingImg from "./hiihto-vastavaloon.jpg";

const pageId = "photographing";

const Photographing = ({ pageContext, location }) => {
  const { t } = useLocalization(pageId, pageContext.language);

  return (
    <Page
      id={pageId}
      title={t("title")}
      headerImg={headerImages.top1}
      location={location}
    >
      <h2>{t("header")}</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <aside>
        <img alt={t("imgAlt")} src={photographingImg} />
      </aside>
    </Page>
  );
};

export default Photographing;
