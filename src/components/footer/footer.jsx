//
// OGP Web Site.
//
// Jim Olivi 2024
//
import "./footer.scss";

export default function Footer() {
  const year = new Date().getFullYear;
  return (
    <footer>
      <div className="container-fluid page-container footer-container">
        <p>Old Guy Programmer - Copyright © {year}</p>
      </div>
    </footer>
  );
}
