//components/Footer.jsx

function Footer() {
  return (
    <footer
      style={{
        padding: '1.5rem 2rem',
        backgroundColor: '#161b22',
        color: 'white',
        textAlign: 'center',
        marginTop: '3rem',
        fontSize: '0.9rem',
        userSelect: 'none',
        cursor: 'default',
      }}
    >
      <p style={{ transition: 'color 0.3s' }}>
        &copy; {new Date().getFullYear()} Rushi. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;