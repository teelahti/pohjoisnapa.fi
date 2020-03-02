import React from "react";
import Helmet from "react-helmet";
import Layout from "../Layout";
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

// Add LocaleContext to each page so that any component in the tree can query the locale
const LocaleContext = React.createContext();

const Page = ({ id, title, location, headerImg, children }) => {
  const { t, i18n } = useLocalization("translations");

  let leftColumnImg = id === "index" ? map : gradient;

  return (
    <LocaleContext.Provider value={i18n.language}>
      <Layout>
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
                title
                  ? `${t("expeditionName")} - ${title}`
                  : t("expeditionName")
              }
              meta={[
                { name: "description", content: "Pohjoisnapa 2006" },
                { name: "keywords", content: "retkikunta, expedition" },
              ]}
            />
            <Header img={headerImg} />
            <Navigation location={location} />

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
      </Layout>
    </LocaleContext.Provider>
  );
};

export default Page;
export { LocaleContext };

// Make usage easier by exporting the possible header images
export { headerImages } from "../Header";
