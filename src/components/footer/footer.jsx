//
// OGP Web Site.
//
// Jim Olivi 2024
//
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid page-container footer-container">
        <p>Old Guy Programmer - Copyright ©{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
