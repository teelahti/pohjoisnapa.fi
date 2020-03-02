import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";

const pageId = "history";

const History = ({ pageContext, location }) => {
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
      <p>
        <i>Pentti Kronqvist</i>
      </p>
    </Page>
  );
};

export default History;
