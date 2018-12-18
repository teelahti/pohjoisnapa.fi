import React from "react";
import LanLink from "../components/LanLink";
import Moment from "react-moment";
import Page, { headerImages } from "../components/Page";
import { translate } from "react-i18next";
import LatLong from "../components/LatLong";
import DiaryImage from "../components/DiaryImage";
import { graphql } from "gatsby";

import "./diaryentry.scss";

const DiaryEntry = ({ data, t, pageContext, location }) => {
  const doc = data.allDataJson.edges[0].node;
  const language = pageContext.language;
  let subject = doc[`Subject_${language}`];

  return (
    <Page
      id="diaryentry"
      title={subject}
      headerImg={headerImages.top5}
      language={language}
      location={location}
    >
      <h2>
        <Moment date={doc.EntryDate} format="D.M.YYYY" /> {subject}
      </h2>
      <LatLong
        lat={doc.LocationLatitude}
        long={doc.LocationLongitude}
        eastWest={doc.LocationLongitudeEastWest}
      />

      <div className="diaryentry-content">
        <div>
          <div
            className="diaryentry-text"
            dangerouslySetInnerHTML={{ __html: doc[`Text_${language}`] }}
          />

          {doc.DistanceTraveled || doc.Temperature || doc.Wind ? (
            <aside className="diaryentry-data">
              <dl>
                <dt>{t("data.distance")}</dt>
                <dd>{doc.DistanceTraveled ? doc.DistanceTraveled : 0} km</dd>
                <dt>{t("data.temperature")}</dt>
                <dd>{doc.Temperature ? doc.Temperature : "n/a"}°C</dd>
                <dt>{t("data.wind")}</dt>
                <dd>{doc.Wind ? doc.Wind : "n/a"} m/s</dd>
              </dl>
              <LanLink to="/diary/data" lan={language}>
                {t("data.link")}
              </LanLink>
            </aside>
          ) : (
            false
          )}

          <footer>
            <ul className="diaryentry-dates">
              <li>
                {t("created")}{" "}
                <Moment date={doc.CreatedDate} format="D.M.YYYY h.mm" />.
              </li>
              <li>
                {t("lastModified")}{" "}
                <Moment date={doc.LastModifiedDate} format="D.M.YYYY h.mm" />.
              </li>
            </ul>
            <div id="diaryentry-prev" className="diaryentry-nav">
              {doc.Previous && (
                <LanLink to={`/diary/${doc.Previous}`} lan={language}>
                  {t("links.prev")}
                </LanLink>
              )}
            </div>
            <div id="diaryentry-next" className="diaryentry-nav">
              {doc.Next && (
                <LanLink to={`/diary/${doc.Next}`} lan={language}>
                  {t("links.next")}
                </LanLink>
              )}
            </div>
          </footer>
        </div>

        {doc.Images ? (
          <aside className="diaryentry-images">
            {doc.Images.map(img => (
              <DiaryImage
                key={img.Id}
                id={img.Id}
                caption={img[`Caption_${language}`]}
              />
            ))}
          </aside>
        ) : (
          false
        )}
      </div>
    </Page>
  );
};

export default translate("diaryEntry")(DiaryEntry);

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
