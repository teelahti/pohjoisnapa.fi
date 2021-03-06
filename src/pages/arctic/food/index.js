import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import foodImg from "./tero-ja-perttu-syo.jpg";

const pageId = "food";

const Food = () => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top1}>
      <h2>{t("header")}</h2>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: t("text") }}
      />

      <aside id="food-recipe">
        <img alt={t("recipe.imgAlt")} src={foodImg} />

        <h2>{t("recipe.header")}</h2>

        <div dangerouslySetInnerHTML={{ __html: t("recipe.text") }} />
      </aside>
    </Page>
  );
};

export default Food;
