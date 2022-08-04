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
    <main className="mt-10 bg-white overflow-hidden">
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
          {/* Text */}
          <div className="w-full lg:w-1/3 lg:h-full pt-20 lg:pt-0 absolute top-0 lg:bottom-0 left-0 right-0 lg:left-[25%] lg:right-0 z-10 flex flex-col items-center justify-center gap-4">
            <h2 className="full-span-h2">MacBook Air</h2>
            <h3 className="full-span-h3">Supercharged by M2</h3>
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
          {/* Image */}
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
          {/* Text */}
          <div className="w-full absolute top-0 left-0 right-0 pt-20 flex flex-col items-center justify-center gap-4 z-40">
            <h2 className="full-span-h2">iPhone 13</h2>
            <h3 className="full-span-h3">Your new superpower.</h3>
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
          {/* Image */}
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
          {/* Text */}
          <div className="w-full absolute top-0 left-0 right-0 pt-20 flex flex-col items-center justify-center gap-4 z-40">
            <h2 className="full-span-h2 italic">
              Get <span className="text-rose-600 ">supercharged</span> for
              college
            </h2>
            <h3 className="full-span-h3">
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
          {/* Image */}
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
      <section className="bg-[#FBFBFD] max-w-[130rem] mx-auto mt-2">
        <div className="flex-col justify-center items-center space-y-2">
          {/* Light/Dark First Pair
           */}
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
            {/* Light */}
            <div className="bg-[#FCFBFE] w-full overflow-hidden relative border border-gray-100">
              {/* Text */}
              <div className="half-span-text-container-light">
                <h2 className="half-span-h2">iPhone 13 Pro</h2>
                <h3 className="half-span-h3">Oh. So. Pro</h3>
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
              {/* Image */}
              <div className="flex items-center justify-center h-full w-full">
                <div className="">
                  <Image
                    src="https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_small_2x.jpg"
                    layout="fixed"
                    objectFit="contain"
                    height={580}
                    width={1262}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Dark */}
            <div className="bg-black w-full overflow-hidden relative ">
              {/* Text */}
              <div className="half-span-text-container-dark">
                <h2 className="half-span-h2">MacBook Pro 13</h2>
                <h3 className="half-span-h3">Supercharged by M2</h3>
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
              {/* Image */}
              <div className="flex items-center justify-center h-full w-full">
                <div className="">
                  <Image
                    src="https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large.jpg"
                    layout="fixed"
                    objectFit="contain"
                    height={580}
                    width={1262}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Light Dark Second Pair
           */}
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
            {/* Light */}
            <div className="bg-[#FCFBFE] w-full overflow-hidden relative border border-gray-100">
              {/* Text */}
              <div className="half-span-text-container-light">
                <h2 className="half-span-h2">Watch</h2>
                <h3 className="half-span-h3">
                  It&apos;s our largest display yet.
                </h3>
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
              {/* Image */}
              <div className="flex items-center justify-center h-full w-full">
                <div className="">
                  <Image
                    src="https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg"
                    layout="fixed"
                    objectFit="contain"
                    height={580}
                    width={1262}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Dark */}
            <div className="bg-black w-full overflow-hidden relative">
              {/* Text */}
              <div className="half-span-text-container-dark">
                <h2 className="half-span-h2">iPad air</h2>
                <h3 className="half-span-h3">Light. Bright. Full of might.</h3>
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
              {/* Image */}
              <div className="flex items-center justify-center h-full w-full">
                <div className="">
                  <Image
                    src="https://www.apple.com/v/home/aq/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large.jpg"
                    layout="fixed"
                    objectFit="contain"
                    height={580}
                    width={1262}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Light Dark Third Pair
           */}
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
            {/* Light */}
            <div className="bg-[#FBFBFD] w-full overflow-hidden relative border border-gray-100">
              {/* Text */}
              <div className="half-span-text-container-light">
                <h2 className="half-span-h2">Card</h2>
                <h3 className="half-span-h3">
                  Get up to 3% Daily Cash back
                  <br />
                  with every purchase.
                </h3>
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
              {/* Image */}
              <div className="flex items-center justify-center h-full w-full">
                <div className="">
                  <Image
                    src="https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg"
                    layout="fixed"
                    objectFit="contain"
                    height={580}
                    width={1262}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Dark */}
            <div className="bg-black w-full overflow-hidden relative">
              {/* Text */}
              <div className="half-span-text-container-dark">
                <h2 className="half-span-h2">AirPods Pro</h2>
                <h3 className="half-span-h3">
                  Magic like you&apos;ve never heard.
                </h3>

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

              {/* Image */}
              <div className="relative h-full w-full">
                <div className="w-full h-[580px] flex items-end justify-center">
                  <Image
                    className=""
                    src="https://www.apple.com/v/home/aq/images/promos/airpods-pro/tile__cauwwcyyn9hy_large.jpg"
                    layout="fixed"
                    objectFit="contain"
                    height={384}
                    width={301}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
