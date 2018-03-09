import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import Header from '../Header'
import Footer from '../Footer'
import Navigation from '../Navigation'

import stamp from "./vesileima.gif";

import bg1 from "./sana-finnish.gif";
import bg2 from "./sana-expedition.gif";

import './index.scss'

class Page extends React.PureComponent {
  static propTypes = {
    pathContext: PropTypes.shape({
      language: PropTypes.string.isRequired
    })
  }

  componentWillMount() {
    const { i18n, language } = this.props;
    const currentLanguage = i18n.language;

    // First request
    if (!currentLanguage) {
      i18n.language = language;
    }

    // Only update on language change
    if (currentLanguage !== language) {
      i18n.changeLanguage(language);
    }
  }

  render() {
    const { id, title, headerImg, t, children, i18n } = this.props;

    return (
      <div
        style={{
          background: `url(${bg1}) no-repeat 30px 150px, url(${bg2}) no-repeat calc(100% - (100% - 740px)/2 + 130px) 290px`,
        }}
      >  
        <div id="main"
          style={{
            background: `url(${stamp}) no-repeat right 195px`,
          }}
        >
          <Helmet
            title={ title ? `${t("expeditionName")} - ${title}` : t("expeditionName") }
            meta={[
              { name: 'description', content: 'Pohjoisnapa 2006' },
              { name: 'keywords', content: 'retkikunta, expedition' },
            ]}
          />    
          <Header img={headerImg} lan={i18n.language} />
          <Navigation />

          <article id={id} className="contentpage">

            {children}
          
          </article>

          <Footer />
        </div>
      </div>
    );
  }
}

export default translate("translations")(Page)

// Make usage easier by exporting the possible header images
export { headerImages } from "../Header";
