import React from 'react'
import Link from 'gatsby-link'
import Moment from 'react-moment';
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import i18n from '../../../components/i18n'

const pageId = "diaryList";

const DiaryEntriesPage = ({ t, data }) => (
  <article>
    <Helmet title={`${t("translations:expeditionName")} - ${t("title")}`} />

    <h1>{t("header")}</h1>

    <ul className="diary-list">
      {
        data.allDataJson.edges.map(({ node }) => (
          <li key={node.Slug}>
            <Moment interval={0} date={node.EntryDate} format="D.M.YYYY" />
            <Link to={"/diary/" + node.Slug} >
              {i18n.language === 'fi' ? node.Subject_fi : node.Subject_en}
            </Link>
          </li>
        ))}
    </ul>
  </article>
);

export default translate(pageId)(DiaryEntriesPage)

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