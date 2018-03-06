import React from 'react'
import PropTypes from 'prop-types'

import './normalize.css'

const TemplateWrapper = ({ children }) => (
  <div>
   {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
