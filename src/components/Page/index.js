import React from "react";
import Helmet from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";
import Navigation from "../Navigation";

import stamp from "./vesileima.gif";

import bg1 from "./sana-finnish.gif";
import bg2 from "./sana-expedition.gif";
import bg3 from "./tex_northpole2.gif";

import map from "./kartta.jpg";
import gradient from "./gradient.jpg";

import { useLocalization } from "../i18n.js";

import "./index.scss";

const Page = ({ id, title, headerImg, children }) => {
  const { t } = useLocalization("translations");

  let leftColumnImg = id === "index" ? map : gradient;

  return (
    <div
      style={{
        background: `url(${bg1}) no-repeat 30px 150px, url(${bg2}) no-repeat calc(100% - (100% - 740px)/2 + 130px) 290px`,
      }}
    >
      <div
        id="main"
        style={{
          background: `url(${leftColumnImg}) no-repeat left top 196px, url(${stamp}) no-repeat right 195px`,
        }}
      >
        <Helmet
          title={
            title ? `${t("expeditionName")} - ${title}` : t("expeditionName")
          }
          meta={[
            { name: "description", content: "Pohjoisnapa 2006" },
            { name: "keywords", content: "retkikunta, expedition" },
          ]}
        />
        <Header img={headerImg} />
        <Navigation />

        <article
          id={id}
          className="contentpage"
          style={{
            background: `url(${bg3}) no-repeat right bottom 3px`,
          }}
        >
          {children}
        </article>

        <Footer />
      </div>
    </div>
  );
};

export default Page;

// Make usage easier by exporting the possible header images
export { headerImages } from "../Header";
