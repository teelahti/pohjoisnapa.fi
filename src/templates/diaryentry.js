import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Moment from 'react-moment';
import i18n from '../components/i18n';
import LatLong from '../components/LatLong';

const DiaryEntry = (props) => {
  const doc = props.data.allDataJson.edges[0].node;

  // TODO: Make images as component and do the popup
  return (
    <article>
      <h1><Moment date={doc.EntryDate} format="D.M.YYYY" /> {i18n.language === 'fi' ? doc.Subject_fi : doc.Subject_en}</h1>
      <LatLong lat={doc.LocationLatitude} long={doc.LocationLongitude} eastWest={doc.LocationLongitudeEastWest} />

      <div className="diaryentry-text" dangerouslySetInnerHTML={{ __html: i18n.language === 'fi' ? doc.Text_fi : doc.Text_en} } />

      {doc.Images ?
      <aside className="diaryentry-images">
        {doc.Images.map(img => (
          <img 
            src={`/images/paivakirja/${img.Id.toString().padStart(3, "0")}-small.jpeg`} 
            alt={i18n.language === 'fi' ? img.Caption_fi : img.Caption_en} />
        ))}
      </aside> : false
      }

      <aside className="diaryentry-data">
        <dl>
          <dt>Distance traveled:</dt>
          <dd>{doc.DistanceTraveled ? doc.DistanceTraveled : 0} km</dd>
          <dt>Temperature:</dt>
          <dd>{doc.Temperature ? doc.Temperature : "n/a"}°C</dd>
          <dt>Wind:</dt>
          <dd>{doc.Wind ? doc.Wind : "n/a"} m/s</dd>
        </dl>
      </aside>

    </article>
  );
}

export default DiaryEntry

// Query for the content for this particular page.
// entryDate variable is set from the createPage context at gatsby-node.js
export const diaryEntryQuery = graphql`
  query DiaryEntryQuery($entryDate: String!) {
    allDataJson(filter: { EntryDate: { eq: $entryDate } }) {
      edges {
        node {
          Id
          EntryDate
          CreatedBy
          CreatedDate
          LastModifiedBy
          LastModifiedDate
          Subject_en
          Subject_fi
          Text_fi
          Text_en
          DistanceTraveled
          Temperature
          Wind
          LocationLatitude
          LocationLongitude
          LocationLongitudeEastWest
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