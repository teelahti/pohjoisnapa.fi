import React from 'react'
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import Header from '../Header'
import Footer from '../Footer'
import Navigation from '../Navigation'

import './index.scss'

const Page = (props) => (
  <div id="main">
    <Helmet
      title={ props.title ? `${props.t("expeditionName")} - ${props.title}` : props.t("expeditionName") }
      meta={[
        { name: 'description', content: 'Pohjoisnapa 2006' },
        { name: 'keywords', content: 'retkikunta, expedition' },
      ]}
    />    
    <Header img={props.headerImg} />
    <Navigation />

    <article id={props.id} className="contentpage">

      {props.children}
    
    </article>

    <Footer />
  </div>
);

export default translate("translations")(Page)

// Make usage easier by exporting the possible header images
export { headerImages } from "../Header";