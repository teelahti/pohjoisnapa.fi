import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import i18n from '../components/i18n'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Pohjoisnapa 2006"
      meta={[
        { name: 'description', content: 'Pohjoisnapa 2006' },
        { name: 'keywords', content: 'retkikunta, expedition' },
      ]}
    />
    <Header />
    <Navigation />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
