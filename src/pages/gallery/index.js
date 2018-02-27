import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import { translate } from "react-i18next";
import i18n from '../../components/i18n';
import Gallery from '../../components/Gallery';

const pageId = "gallery";

const GalleryPage = ({ t, data }) => {

  let imgs = data.allDataJson.edges
    .filter(({ node }) => node.Images && new Date(node.EntryDate) < new Date(2006, 2, 5))
    .map(({ node }) => node.Images)
    .reduce((all, current) => all.concat(current))
    .map(img =>
      ({
        src: `/images/paivakirja/${img.Id.toString().padStart(3, "0")}.jpeg`,
        thumbnail: `/images/paivakirja/${img.Id.toString().padStart(3, "0")}-small.jpeg`,
        caption: i18n.language === 'fi' ? img.Caption_fi : img.Caption_en,
        alt: i18n.language === 'fi' ? img.Caption_fi : img.Caption_en
      })
    );

  return (
    <article id={pageId} className="contentpage">
      <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

      <h1>{t("header")}</h1>

      <Link to="/gallery/at-ice">{t("link")}</Link>

      <Gallery
        images={imgs}
        showThumbnails={true}
      />

    </article>
  );
};

export default translate(pageId)(GalleryPage)

export const query = graphql`
  query GalleryBeforeStartQuery {
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
