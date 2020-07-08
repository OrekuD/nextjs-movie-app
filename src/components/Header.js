import Link from "next/link";
import { Search } from "../svg/Svg";

const Header = () => {
  return (
    <header>
      <Link as="/" href="/">
        <h3> Header </h3>
      </Link>
      <Link href="/search">
        <div>
          <Search color="#ffffff" size="24px" />{" "}
        </div>
      </Link>
    </header>
  );
};

export default Header;
