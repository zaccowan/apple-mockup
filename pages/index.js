import Link from "next/link";
import Image from "next/image";
import { ArrowSmUpIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <main className="mt-10 bg-gray-100 overflow-hidden">
      {/* ribbon section
       *
       *
       */}
      <section className="py-5 flex items-center justify-center space-x-4">
        <Image
          src="https://www.apple.com/v/home/aq/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png"
          height={32}
          width={122}
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

      {/* Three Call To Actions Section
       *
       *
       */}
      <section className="flex flex-col gap-3 bg-white mb-">
        {/* Macbook Air
         */}
        <div className="relative w-full bg-[#FBFBFD]">
          <div className="w-full lg:w-1/3 lg:h-full pt-20 lg:pt-0 absolute top-0 lg:bottom-0 left-0 right-0 lg:left-[25%] lg:right-0 z-10 flex flex-col items-center justify-center gap-4">
            <h2 className="text-6xl font-semibold">MacBook Air</h2>
            <h3 className="text-3xl">Supercharged by M2</h3>
            <div className="flex items-center justify-center gap-8">
              <Link href="https://www.apple.com/macbook-air-m2/">
                <div className="flex items-center justify-center">
                  <a className="blueLink text-xl">Learn more</a>
                  <ChevronRightIcon className="blueLink w-6 " />
                </div>
              </Link>
              <Link href="https://www.apple.com/us/shop/goto/buy_mac/macbook_air_m2">
                <div className="flex items-center justify-center">
                  <a className="blueLink text-xl">Buy</a>
                  <ChevronRightIcon className="blueLink w-6 " />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-full mt-40 lg:mt-0 lg:pt-0">
            <div className="-translate-x-[4%] lg:translate-x-[5%]">
              <Image
                src="https://www.apple.com/v/home/aq/images/heroes/macbook-air/hero_macbookair__el7scava26mq_largetall.png"
                layout="fixed"
                height={736}
                width={3008}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* iPhone 13
         */}
        <div className="relative h-[736px] bg-[#FBFBFD]">
          <div className="w-full absolute top-0 left-0 right-0 pt-20 flex flex-col items-center justify-center gap-4 z-40">
            <h2 className="text-6xl font-semibold">iPhone 13</h2>
            <h3 className="text-3xl">Your new superpower.</h3>
            <div className="flex items-center justify-center gap-8">
              <Link href="https://www.apple.com/iphone-13/">
                <div className="flex items-center justify-center">
                  <a className="blueLink text-xl">Learn more</a>
                  <ChevronRightIcon className="blueLink w-6 " />
                </div>
              </Link>
              <Link href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_13">
                <div className="flex items-center justify-center">
                  <a className="blueLink text-xl">Buy</a>
                  <ChevronRightIcon className="blueLink w-6 " />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center mt-12 lg:mt-0 lg:pt-0 ">
            <div className="">
              <Image
                src="https://www.apple.com/v/home/aq/images/heroes/iphone-13/hero_iphone13_avail__gnqqkzuai6um_largetall.jpg"
                layout="fixed"
                objectFit="contain"
                height={736}
                width={3008}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Mac or iPad
         */}
        <div className="relative h-[736px] bg-[#F6F5F8]">
          <div className="w-full absolute top-0 left-0 right-0 pt-20 flex flex-col items-center justify-center gap-4 z-40">
            <h2 className="text-6xl font-semibold italic">
              Get <span className="text-rose-600 ">supercharged</span> for
              college
            </h2>
            <h3 className="text-3xl">
              Save on Mac or iPad. Plus get a gift card up to $150.
            </h3>
            <div className="flex items-center justify-center gap-8">
              <Link href="https://www.apple.com/iphone-13/">
                <div className="flex items-center justify-center">
                  <a className="blueLink text-xl">Shop now</a>
                  <ChevronRightIcon className="blueLink w-6 " />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-full mt-12 lg:mt-0 lg:pt-0">
            <div className="">
              <Image
                src="https://www.apple.com/v/home/aq/images/heroes/back-to-school-2022/hero_bts__bcuslanw39xe_mediumtall_2x.jpg"
                layout="fixed"
                objectFit="contain"
                height={736}
                width={3008}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Light and Dark Section
       *
       *
       */}
      <section className="bg-[#FBFBFD]">
        <div className="flex-col justify-center items-center space-y-2">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
            <div className="bg-white w-full h-[29rem]"></div>
            <div className="bg-black w-full h-[29rem]"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
            <div className="bg-white w-full h-[29rem]"></div>
            <div className="bg-black w-full h-[29rem]"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
            <div className="bg-white w-full h-[29rem]"></div>
            <div className="bg-black w-full h-[29rem]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
