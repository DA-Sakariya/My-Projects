import "../App.css"; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} E-Dashboard. All rights reserved.</p>
            <p>
                <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a> | <a href="/contact">Contact</a>
            </p>
        </footer>
    );
};

export default Footer;

