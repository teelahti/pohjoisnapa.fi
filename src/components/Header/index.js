import React from 'react'
import Link from 'gatsby-link'
import LanguageSwitcher from '../LanguageSwitcher'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Pohjoisnapa
        </Link>
      </h1>
      <LanguageSwitcher />
    </div>
  </div>
)

export default Header
