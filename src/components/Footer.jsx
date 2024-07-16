const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="https://github.com/fmanimashaun" target="_blank">Built by Engr. Animashaun F.M</a>
      <span>{`Copyright @ ${year}`}</span>
    </footer>
  );
};

export default Footer;
