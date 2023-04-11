import React from "react";
import Page, { headerImages } from "../../../components/Page";
import { useLocalization } from "../../../components/i18n";
import LanLink from "../../../components/LanLink";
import { graphql } from "gatsby";

import "./all.scss";
import { FormattedDate } from "../../../components/Intl";

const pageId = "diaryList";

const DiaryEntriesPage = ({ data, pageContext: { language } }) => {
  const { t } = useLocalization(pageId);

  return (
    <Page id={pageId} title={t("title")} headerImg={headerImages.top5}>
      <h2>{t("header")}</h2>

      <ul className="diary-list">
        {data.allDataJson.edges.map(({ node }) => (
          <li key={node.Slug}>
            <FormattedDate value={node.EntryDate} />
            <LanLink to={"/diary/" + node.Slug}>
              {language === "fi" ? node.Subject_fi : node.Subject_en}
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
      allDataJson(sort: {EntryDate: ASC}) {
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
