import Image from "next/image";
import Link from "next/link";
import image from "./public/images/image.png";
import star from "./public/images/star.svg";
import splash from "./public/images/hero-splash.svg";
import appframe from "./public/images/appframe.svg";
import vector from "./public/images/vector.svg";
import collection from "./public/images/collection.svg";
import collection2 from "./public/images/collection2.png";
import snappy from "./public/images/snappy.svg";
import todo from "./public/images/todo.png";
import uicam from "./public/images/uicam.png";
import pro from "./public/images/pro.png";
import chatGpt from "./public/images/chatGpt.png";
import themes from "./public/images/themes.png";
import cloudSync from "./public/images/cloudSync.png";

export default function Home() {
  return (
    <main className="grid grid-col gap-8 items-center w-full mx-auto relative  max-w-screen-xl">
      <section className="w-full flex flex-col items-center">
        <Image
          src={image}
          alt="Raycast Logo"
          width={1572}
          height={532}
          className="w-1/2 z-30 opacity-80"
        />

        <div className="absolute top-0 min-h-dvh w-full max-h-5">
          <Image src={splash} alt="" fill className="z-20 opacity-90" />
          <Image src={star} alt="" fill className="z-10 -top-56" />
        </div>

        <div className="z-40 text-center w-1/2 grid justify-items-center">
          <h2 className="text-7xl font-bold leading-[3.8rem]">
            <span className="block">Supercharged</span> productivity
          </h2>
          <p className="mt-4 text-xl tracking-[0.3px] opacity-40">
            Raycast is a blazingly fast, totally extendable launcher. It lets
            you complete tasks, calculate, share common links, and much more.
          </p>

          <button
            type="button"
            className="bg-white text-black rounded-md px-10 py-2 border border-black mt-10"
          >
            Download for Mac
          </button>
          <div className="flex divide-x space-x-5 *:pl-4 mt-5 *:opacity-40">
            <p>v1.70.3</p>
            <p>macOS 12+</p>
            <p>Install via Homebrew</p>
          </div>

          <div className="my-24 bg-gradient-to-r from-[#C61E4A] rounded-xl border-2 border-[#C61E4A]">
            <div className="h-full w-full z-10 bg-[#160408] top-0 left-0 bg-blend-overlay p-8 rounded-xl flex items-center space-x-6">
              <div className="text-left space-y-3">
                <h5 className=" font-semibold text-xl">Raycast Merch</h5>
                <p className="text-text opacity-80">
                  Exclusive collection of Raycast-branded apparel is now
                  available.
                </p>
              </div>

              <button
                type="button"
                className="text-sm rounded-md px-3 py-2 bg-gradient-to-br from-[#FF5B37] to-[#AB0052]"
              >
                <Link href="#" className="bg-blend-darken">
                  Get yours <span>→</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-8 space-y-8">
        <div className="text-center flex flex-col items-center space-y-6 w-full">
          <h5 className="font-semibold text-[3.25em] ">
            It’s as easy as <span className="text-[#59D499]">installed</span>
          </h5>
          <p className="w-2/3 opacity-60 text-xl">
            Say hello to the Store. A home for Extensions published by our
            community of Developers using our API. Find extensions to the tools
            you use in your day-to-day.
          </p>
        </div>

        <div className="mt-20 bg-gradient-to-br from-[#FFA7A7] from-2%  via-[#A30CB5] via-29% to-[#00173A] to-95% rounded-lg pl-16 space-x-14 flex items-center max-h-[660px] relative">
          <div className="w-2/3 space-y-6 tracking-[0.3px] py-16">
            <div className="p-4 bg-white/15 rounded-xl inline-block">
              <Image src={vector} alt="" />
            </div>
            <h6 className="text-xl font-semibold">One up your productivity</h6>
            <p className="text-base opacity-80">
              On top of the core Raycast Extensions already built in, you can
              install Extensions built by Developers from the community.
              Everything you’ve asked for, in one place. Search and browse
              Extensions for your tools, actions and more.
            </p>
            <button type="button" className="bg-white/20 w-44 h-10 rounded-lg">
              Browse Extensions
            </button>
          </div>
          <div className="min-h-[603px] w-full grid items-center py-16">
            <Image src={appframe} alt="" className="absolute" />
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="rounded-xl p-16 h-[694.83px] max-w-[460px] flex flex-col justify-between bg-white/10">
            <div>
              <div className="p-4 bg-white/15 rounded-xl inline-block">
                <Image src={snappy} alt="" />
              </div>
              <h6 className="font-semibold text-xl mt-6 mb-4">
                Lightweight and snappy
              </h6>
              <p className="opacity-80">
                Designed to be seamless and instant. View an Extension and hit
                <span></span>
                to simply install it in milliseconds.
              </p>
            </div>
            <Image src={todo} alt="" />
          </div>

          <div className="flex flex-col rounded-xl bg-white/10 justify-between">
            <div className="px-16 pt-16 justify-between">
              <div className="p-4 bg-white/15 rounded-xl inline-block">
                <Image src={collection} alt="" />
              </div>
              <h6 className="font-semibold text-xl mt-6 mb-4">
                An evergrowing collection
              </h6>
              <p className="opacity-80">
                Control Spotify or Apple Music with a hit of a button. Search
                through Figma, Notion, and Xcode. Check your internet speed and
                the weather without needing the browser, or even play a game of
                Snake.
              </p>
            </div>
            <Image src={collection2} alt="" />
          </div>
        </div>
        <a href="#" className="mt-16">
          Explore the store →
        </a>
      </section>

      <section className="text-center mt-64">
        <div>
          <h5 className="font-semibold text-[3.25rem]">
            Put in the{" "}
            <div
              className="bg-gradient-to-b from-[#FF6363]/25 from-50% to-[#CD4A4A26]/15 inline rounded-sm "
              style={{ boxShadow: "0px 0px 27px 0px #FF636366" }}
            >
              <span
                className="text-[#FFE2E2] p-2"
                style={{ textShadow: "1px 0 15px #FF636366" }}
              >
                Pro
              </span>
            </div>
            <br />
            in{" "}
            <div
              className="bg-gradient-to-b from-[#FF6363]/25 from-50% to-[#CD4A4A26]/15  inline rounded-sm "
              style={{ boxShadow: "0px 0px 27px 0px #FF636366" }}
            >
              <span
                className="text-[#FFE2E2] py-2 pl-2"
                style={{ textShadow: "1px 0 15px #FF636366" }}
              >
                Pro
              </span>
            </div>
            ductivity
          </h5>
          <p className="text-xl opacity-60 mt-6 mb-8">
            Turn Pro to harness the power of AI, make Raycast your own with
            custom themes,
            <br /> keep your Macs in sync and more.
          </p>
          <button
            type="button"
            className="rounded-2xl px-3.5 py-1.5 border bg-gradient-to-r from-[#FC88A0]/25 to-[#F9C3C3]/25"
          >
            <Link href="#">Introducing Pro →</Link>
          </button>
        </div>

        <div className="grid">
          <div className="relative mt-40">
            <Image src={pro} alt="" priority />
            <Image
              src={uicam}
              alt=""
              className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-1/2"
            />
          </div>
          <div className="grid grid-cols-3 space-x-8">
            {[
              {
                id: 1,
                title: "Always-on ChatGPT",
                text: "Ask anything, anytime, anywhere. Stuck while programming? Need some copy? Or just have a question - Ask AI.",
                image: { chatGpt },
              },
              {
                id: 2,
                title: "Cloud Sync",
                text: "Keep everything safe and updated across your Macs. Perfect to switch between personal and work setup.",
                image: { cloudSync },
              },
              {
                id: 3,
                title: "Custom Themes & more",
                text: "Make Raycast your own with gorgeous pre-made themes or design your own and share it with the community.",
                image: { themes },
              },
            ].map((item) => (
              <div
                key={item.id}
                className="text-left p-6 bg-gradient-to-b from-white/[.04] to-white/[.06] rounded-xl"
              >
                <Image src={item.image} alt={""} width={100} height={100} />
                <div className="space-y-4">
                  <h6 className="font-semibold text-xl">{item.title}</h6>
                  <p className="opacity-80">{item.text}</p>
                </div>
              </div>
            ))}
            {console.log(chatGpt)}
          </div>
        </div>

        <div className="mt-16">
          <Link href="#">
            Learn about Raycast Pro <span>→</span>
          </Link>
        </div>
      </section>

      <section className="">
        <div>
          <h5>
            Your Raycast. <br /> Your playground.
          </h5>
          <p>
            Productivity is unique to everyone. Personalization is key. Extend
            Raycast the way you want to, and build tools for you and your team
            with the API.
          </p>
        </div>
        <div>
          <div>
            <div>
              {/* icon */}
              <h6>Build what you’ve always wanted</h6>
              <p>
                Start building your perfect tools with the Raycast API, and
                streamline your workflows. Simply create Extensions with ease
                and publish directly to the Raycast Store seamlessly.
              </p>
              <p>
                Get started with the integrated developer tools in Raycast and
                build your first extension in no time.
              </p>
              <button type="button">Learn more</button>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2 flex">
              <div>
                {/* icon */}
                <h6>Open source community</h6>
                <p>
                  Build in the open and collaborate with other Developers on
                  yours and their Extensions. Contribute as you’d like, and help
                  others by building on top of existing Extensions.
                </p>
              </div>
            </div>
            <div>
              {/* icon */}
              <h6>Be part of the story</h6>
              <p>
                We listen to our community and build Raycast in collaboration
                with developers, to build the best product and developer
                experience across the platform.
              </p>
            </div>
          </div>
        </div>

        <Link href="#">Exoplore the docs →</Link>
      </section>
    </main>
  );
}
