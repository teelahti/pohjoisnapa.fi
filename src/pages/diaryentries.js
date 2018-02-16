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
        props.data.allDataJson.edges.map(e => (
          <div key={e.node.Id}>
            <Moment interval={0} date={e.node.EntryDate} format="D.M.YYYY" /> 
            {i18n.language === 'fi' ? e.node.Subject_fi : e.node.Subject_en}</div>
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
          Id 
          EntryDate
          Subject_en
          Subject_fi
        }
      }
    }
  }
`;