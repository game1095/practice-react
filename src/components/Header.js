import Logo from "../image/logo.png";

function Header() {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <a href="/">Home</a>
    </nav>
  );
}
export default Header;
