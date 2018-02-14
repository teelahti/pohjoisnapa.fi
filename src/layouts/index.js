import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import i18n from '../components/i18n'

import Header from '../components/Header'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Navigation from '../components/Navigation'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <LanguageSwitcher />
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
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
