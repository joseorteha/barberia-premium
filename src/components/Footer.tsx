import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© 2025 Barbería Premium. Todos los derechos reservados.</p>
                <div style={styles.socials}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center' as const,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    text: {
        margin: '0 0 10px',
    },
    socials: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Footer;