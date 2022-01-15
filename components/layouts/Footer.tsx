import React from 'react'
import Link from 'next/link'
// import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <footer style={{}}>
      <div
        style={{
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          backgroundColor: '#0F0E0E',
        }}
      >
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          }}
        >
          <p style={{ order: 2, marginTop: '2rem', color: '#EEEEEE' }}>
            {' '}
            &copy; Nansuta 2021.{' '}
          </p>
          <div style={{ order: 1, color: '#EEEEEE' }}>
            <span style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
              <Link href="/">
                <span
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Top
                </span>
              </Link>
            </span>
            <span
              style={{
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                borderLeftWidth: '1px',
              }}
            >
              <Link href="/youtube">
                <span
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Youtube
                </span>
              </Link>
            </span>
            <span
              style={{
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                borderLeftWidth: '1px',
              }}
            >
              <Link href="/blog">
                <span
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Blog
                </span>
              </Link>
            </span>
            <span style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
              <Link href="/contact">
                <span
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  Coontact
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
