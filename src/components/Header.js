import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link as="/" href="/">
        <h3> Header </h3>
      </Link>
    </header>
  );
};

export default Header;
