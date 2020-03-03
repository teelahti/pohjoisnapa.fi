import React from "react";
import Moment from "react-moment";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import i18n from "../../../components/i18n";
import LanLink from "../../../components/LanLink";
import { graphql } from "gatsby";

import "./all.scss";

const pageId = "diaryList";

const DiaryEntriesPage = ({ pageContext, data, location }) => {
  const { t } = useLocalization(pageId, pageContext.language);

  return (
    <Page
      id={pageId}
      title={t("title")}
      headerImg={headerImages.top5}
      location={location}
    >
      <h2>{t("header")}</h2>

      <ul className="diary-list">
        {data.allDataJson.edges.map(({ node }) => (
          <li key={node.Slug}>
            <Moment interval={0} date={node.EntryDate} format="D.M.YYYY" />
            <LanLink to={"/diary/" + node.Slug}>
              {i18n.language === "fi" ? node.Subject_fi : node.Subject_en}
            </LanLink>
          </li>
        ))}
      </ul>
    </Page>
  );
};

export default DiaryEntriesPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          Slug
          EntryDate
          Subject_en
          Subject_fi
        }
      }
    }
  }
`;
