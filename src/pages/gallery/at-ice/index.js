import React from "react";
import Page, { headerImages } from "../../../components/Page";
import LanLink from "../../../components/LanLink";
import { withNamespaces } from "react-i18next";
import i18n from "../../../components/i18n";
import Gallery from "../../../components/Gallery";
import { graphql } from "gatsby";

const pageId = "gallery-at-ice";

const GalleryAtIcePage = ({ t, pageContext, location, data }) => {
  let imgs = data.allDataJson.edges
    .filter(
      ({ node }) =>
        node.Images && new Date(node.EntryDate) > new Date(2006, 2, 4)
    )
    .map(({ node }) => node.Images)
    .reduce((all, current) => all.concat(current))
    .map(img => ({
      src: `/images/paivakirja/${img.Id.toString().padStart(3, "0")}.jpeg`,
      thumbnail: `/images/paivakirja/${img.Id.toString().padStart(
        3,
        "0"
      )}-small.jpeg`,
      caption: i18n.language === "fi" ? img.Caption_fi : img.Caption_en,
      alt: i18n.language === "fi" ? img.Caption_fi : img.Caption_en
    }));

  return (
    <Page
      id={pageId}
      title={t("title")}
      headerImg={headerImages.top7}
      language={pageContext.language}
      location={location}
    >
      <h2>{t("header")}</h2>

      <div style={{ marginBottom: "10px" }}>
        <LanLink to="/gallery" lan={pageContext.language}>
          {t("link")}
        </LanLink>
      </div>

      <Gallery images={imgs} showThumbnails={true} />
    </Page>
  );
};

export default withNamespaces(pageId)(GalleryAtIcePage);

export const query = graphql`
  query GalleryAtIceQuery {
    allDataJson {
      edges {
        node {
          EntryDate
          Images {
            Caption_en
            Caption_fi
            CreatedDate
            Id
          }
        }
      }
    }
  }
`;
