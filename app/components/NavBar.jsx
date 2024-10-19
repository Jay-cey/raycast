import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.svg";

function NavBar() {
  return (
    <nav className="flex justify-around py-5 items-center sticky">
      <div>
        <Link href="/">
          <Image src={logo} alt="Raycast Logo" width={102} height={32} />
        </Link>
      </div>
      <ul className="flex space-x-6">
        {[
          "Store",
          "Developer",
          "Teams",
          "Pro",
          "Changelog",
          "Pricing",
          "Blog",
        ].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} className="hover:underline">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="px-4 py-2 bg-slate-400 bg-opacity-10 text-white rounded hover:bg-orange-600"
            >
              Download
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
