import React from "react";
import Moment from "react-moment";
import moment from "moment";
import Page, { headerImages } from "../../../components/Page";
import { graphql } from "gatsby";
import { useLocalization } from "../../../components/i18n";
import dataImg from "./data.jpg";

import "./data.scss";

const pageId = "data";

const DiaryData = ({ pageContext, data }) => {
  const { t } = useLocalization(pageId, pageContext.language);

  return (
    <Page
      id={pageId}
      title={t("title")}
      headerImg={headerImages.top5}
      location={window.location}
    >
      <h2>{t("header")}</h2>

      <img src={dataImg} alt="Data" />

      <table id="diary-data">
        <thead>
          <tr>
            <th>{t("table.date")}</th>
            <th style={{ width: "25%" }}>
              {t("table.distance")}
              <br />
              (km)
            </th>
            <th style={{ width: "25%" }}>
              {t("table.temperature")}
              <br />
              (°C)
            </th>
            <th style={{ width: "25%" }}>
              {t("table.wind")}
              <br />
              (m/s)
            </th>
          </tr>
          <tr>
            <td />
            <td style={{ height: "10px", backgroundColor: "#CC0000" }} />
            <td style={{ backgroundColor: "#99CCFF" }} />
            <td style={{ backgroundColor: "#CC9900" }} />
          </tr>
        </thead>
        <tbody>
          {data.allDataJson.edges
            .filter(({ node }) => {
              let d = new Date(node.EntryDate);
              return d > new Date(2006, 2, 4) && d < new Date(2006, 3, 29);
            })
            .map(({ node }) => (
              <tr key={node.EntryDate}>
                <td>
                  <Moment
                    interval={0}
                    date={moment(node.EntryDate).subtract(1, "d")}
                    format="D.M.YYYY"
                  />
                </td>
                <td>{node.DistanceTraveled}</td>
                <td>{node.Temperature}</td>
                <td>{node.Wind}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Page>
  );
};

export default DiaryData;

export const query = graphql`
  query DataQuery {
    allDataJson {
      edges {
        node {
          EntryDate
          Temperature
          Wind
          DistanceTraveled
        }
      }
    }
  }
`;
