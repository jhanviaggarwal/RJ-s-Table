const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} My React App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
