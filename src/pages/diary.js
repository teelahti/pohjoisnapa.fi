import React from 'react'
import Link from 'gatsby-link'
import Moment from 'react-moment';
import i18n from '../components/i18n'

const DiaryEntriesPage = (props) => (
  <div>
    <h1>All diary entries</h1>
    <Link to="/">Go back to the homepage</Link>
    <article>
      {
        props.data.allDataJson.edges.map(({ node }) => (
          <div key={node.Slug}>
            <Moment interval={0} date={node.EntryDate} format="D.M.YYYY" />
            <Link to={"/diary/" + node.Slug} >
              {i18n.language === 'fi' ? node.Subject_fi : node.Subject_en}
            </Link>
          </div>
        ))}
    </article>
  </div>
);

export default DiaryEntriesPage

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