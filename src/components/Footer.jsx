import React from "react";

function Footer() {
  const today = new Date().toLocaleDateString();
  return (
    <footer>
      <p>
        Nicolas Bugdaci pour Stockoss
        <br />
        <a
          href={"https://github.com/NicolasBugdaci"}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>{" "}
        -{" "}
        <a
          href={"https://www.nicolasbugdaci.dev"}
          rel="noopener noreferrer"
          target="_blank"
        >
          Website
        </a>{" "}
        -{" "}
        <a
          href={"https://www.linkedin.com/in/nicolas-b-b4586416b/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        - {today}
      </p>
    </footer>
  );
}

export default Footer;
