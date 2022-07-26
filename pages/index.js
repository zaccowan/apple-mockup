import Link from "next/link";
import { ArrowSmUpIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <main className="mt-10 bg-gray-100">
      <section className="py-5 flex items-center justify-center space-x-4">
        <img
          src="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png"
          alt=""
        />
        <Link href="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png">
          <div className="flex items-center justify-center">
            <a className="blueLink text-sm">
              Donate to support families affected by the war in Ukraine
            </a>
            <ArrowSmUpIcon className="blueLink w-6 rotate-45" />
          </div>
        </Link>
      </section>

      <section>
        <div className="relative h-[736px]">
          <div className="w-1/2 h-full absolute top-0 bottom-0 left-[25%] z-10 flex flex-col items-center justify-center gap-4">
            <h2 className="text-6xl font-semibold">MacBook Air</h2>
            <h3 className="text-3xl">Supercharged by M2</h3>
            <div className="flex items-center justify-center gap-8">
              <Link href="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png">
                <div className="flex items-center justify-center">
                  <a className="blueLink text-xl">Learn more</a>
                  <ChevronRightIcon className="blueLink w-6 " />
                </div>
              </Link>
              <Link href="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png">
                <div className="flex items-center justify-center">
                  <a className="blueLink text-xl">Buy</a>
                  <ChevronRightIcon className="blueLink w-6 " />
                </div>
              </Link>
            </div>
          </div>
          <div className="block lg:absolute top-0 left-0 right-0 h-full w-full">
            <figure className="bg-[url('https://www.apple.com/v/home/aq/images/heroes/macbook-air/hero_macbookair__el7scava26mq_largetall.png')] w-full h-full"></figure>
          </div>
        </div>
      </section>
    </main>
  );
}
