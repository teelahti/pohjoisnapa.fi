import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import Moment from 'react-moment';
import i18n from '../components/i18n';
import Page, { headerImages } from "../components/Page";
import { translate } from "react-i18next";
import LatLong from '../components/LatLong';
import DiaryImage from '../components/DiaryImage';

const DiaryEntry = (props) => {
  const doc = props.data.allDataJson.edges[0].node;
  const t = props.t;
  let subject = i18n.language === 'fi' ? doc.Subject_fi : doc.Subject_en;

  return (
    <Page id="diaryentry" title={subject} headerImg={headerImages.top5}>

      <h1><Moment date={doc.EntryDate} format="D.M.YYYY" /> {subject}</h1>
      <LatLong lat={doc.LocationLatitude} long={doc.LocationLongitude} eastWest={doc.LocationLongitudeEastWest} />

      <div className="diaryentry-text" dangerouslySetInnerHTML={{ __html: i18n.language === 'fi' ? doc.Text_fi : doc.Text_en} } />

      {doc.Images ?
      <aside className="diaryentry-images">
        {doc.Images.map(img => 
          <DiaryImage key={img.Id} id={img.Id} caption={i18n.language === 'fi' ? img.Caption_fi : img.Caption_en} /> )}
      </aside> : false
      }

      <aside className="diaryentry-data">
        <dl>
          <dt>{t("data.distance")}</dt>
          <dd>{doc.DistanceTraveled ? doc.DistanceTraveled : 0} km</dd>
          <dt>{t("data.temperature")}</dt>
          <dd>{doc.Temperature ? doc.Temperature : "n/a"}°C</dd>
          <dt>{t("data.wind")}</dt>
          <dd>{doc.Wind ? doc.Wind : "n/a"} m/s</dd>
        </dl>
        <Link to="/data">{t("data.link")}</Link>
      </aside>

      <footer>
          <ul className="diaryentry-dates">
            <li>{t("created")} <Moment date={doc.CreatedDate} format="D.M.YYYY h.mm" />.</li>
            <li>{t("lastModified")} <Moment date={doc.LastModifiedDate} format="D.M.YYYY h.mm" />.</li>
          </ul>
          <div id="diaryentry-prev" className="diaryentry-nav">
            {doc.Previous && <Link to={`/diary/${doc.Previous}`}>{t("links.prev")}</Link> }
          </div>
          <div id="diaryentry-next" className="diaryentry-nav">
            {doc.Next && <Link to={`/diary/${doc.Next}`}>{t("links.next")}</Link> }
          </div>
      </footer>

    </Page>
  );
}

export default translate("diaryEntry")(DiaryEntry)

// Query for the content for this particular page.
// entryDate variable is set from the createPage context at gatsby-node.js
export const diaryEntryQuery = graphql`
  query DiaryEntryQuery($entryDate: String!) {
    allDataJson(filter: { EntryDate: { eq: $entryDate } }) {
      edges {
        node {
          Slug
          Previous
          Next
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