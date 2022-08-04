import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  MenuIcon,
  MenuAlt4Icon,
} from "@heroicons/react/outline";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm">
      <ul className="flex flex-1 items-center justify-between mx-8 lg:justify-evenly lg:mx-auto max-w-6xl">
        <button className="block lg:hidden">
          <MenuAlt4Icon className="navItem w-8 block" />
        </button>
        <Link href="https://zacbox.vercel.app">
          <a
            src="https://zacbox.vercel.app"
            className="navItem block mx-auto lg:mx-0"
          >
            <Image
              src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
              height={50}
              width={50}
              alt=""
            />
          </a>
        </Link>

        <Link href="/store">
          <a className="navItem">Store</a>
        </Link>

        <Link href="/mac">
          <a className="navItem">Mac</a>
        </Link>

        <Link href="/ipad">
          <a className="navItem">iPad</a>
        </Link>

        <Link href="/iphone">
          <a className="navItem">iPhone</a>
        </Link>

        <Link href="/watch">
          <a className="navItem">Watch</a>
        </Link>

        <Link href="/airpods">
          <a className="navItem">AirPods</a>
        </Link>

        <Link href="/tv-home">
          <a className="navItem">TV & Home</a>
        </Link>

        <Link href="/services">
          <a className="navItem">Only on Apple</a>
        </Link>

        <Link href="/shop/accessories/all">
          <a className="navItem">Accessories</a>
        </Link>

        <Link href="/support">
          <a className="navItem">Support</a>
        </Link>
        <button>
          <SearchIcon className="navItem w-4" />
        </button>
        <button>
          <ShoppingBagIcon className="navItem w-4 block" />
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
