"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Desenvolvido por <a href="https://settamarketing.com.br/" target="_blank" rel="noopener noreferrer" style={styles.link}>Setta</a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid var(--border)',
    backgroundColor: 'var(--bg-primary)',
  },
  text: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    margin: 0,
  },
  link: {
    color: 'var(--accent-cyan)',
    fontWeight: 300,
    textDecoration: 'none',
  }
};
