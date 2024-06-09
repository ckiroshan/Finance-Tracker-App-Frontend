import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">&copy; {new Date().getFullYear()} Built by ckiroshan</div>
    </footer>
  );
};

export default Footer;
