import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'
import { translate } from "react-i18next";
import Header from '../Header'
import Footer from '../Footer'
import Navigation from '../Navigation'

import './index.scss'

class Page extends React.PureComponent {
  static propTypes = {
    pathContext : PropTypes.shape({
      language : PropTypes.string.isRequired
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
    const {id, title, headerImg, t, children, i18n} = this.props;

    return (
      <div id="main">
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
    );
  }
}

export default translate("translations")(Page)

// Make usage easier by exporting the possible header images
export { headerImages } from "../Header";
