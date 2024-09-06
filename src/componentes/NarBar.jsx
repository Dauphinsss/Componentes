import React from 'react';

function NavBar() {
  return (
    <nav style={styles.nav}>COMPONENTES: REACT</nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',  
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default NavBar;
