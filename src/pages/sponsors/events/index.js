import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";

const pageId = "events";

const Events = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top5}>
      <h2>{t("header")}</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <ul>
        <li>Erä-messut 2006</li>
        <li>Ski-Expo 2006</li>
      </ul>
    </Page>
  );
};

export default Events;
