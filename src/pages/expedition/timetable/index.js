import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import objectivesImg from "./leirin-pystytys.jpg";

const pageId = "timetable";

const Timetable = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top8}>
      <h2>{t("header")}</h2>

      <div className="content-two-column">
        <div
          className="content left"
          dangerouslySetInnerHTML={{ __html: t("text") }}
        />

        <aside className="right">
          <img alt={t("imgAlt")} src={objectivesImg} />
        </aside>
      </div>
    </Page>
  );
};

export default Timetable;
