import Links from "./Links";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = ({ header }) => {
  return (
    <div>
      <Logo img={header.logo.img} />
      <Links links={header.links}></Links>
      <Menu menu={header.menu}></Menu>
    </div>
  );
};

export default Header;
