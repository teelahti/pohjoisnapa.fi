import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import orienteeringImg from "./ahtojaissa-jermi.jpg";

const pageId = "orienteering";

const Orienteering = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>
      <h2>{t("header")}</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <div
        className="footnote"
        dangerouslySetInnerHTML={{ __html: t("footnote") }}
      />

      <aside>
        <img alt={t("imgAlt")} src={orienteeringImg} />
      </aside>
    </Page>
  );
};

export default Orienteering;
