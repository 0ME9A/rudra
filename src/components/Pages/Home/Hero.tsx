import { GoPlus } from "react-icons/go";
import PrimaryLink from "@/components/Links/PrimaryLink";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="container p-4 pt-24 mx-auto grid md:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center gap-10 xl:gap-24 pt-32">
        <h2 className="text-[3rem] sm:text-[4rem] xl:text-[5rem] leading-none font-[200]">
          Innovative <br /> <b className="italic font-[600]"> Architecture </b>
          for Modern Space
        </h2>
        <div className="flex items-start flex-wrap gap-4 md:gap-6">
          <p className="text-xl lg:text-2xl font-[300] text-gray-500 sm:w-1/2">
            Simply contact us to make your dream true
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-fit items-start gap-2 text-center">
            <PrimaryLink href="/contact" className="w-full sm:w-fit">
              Contact us
            </PrimaryLink>
            <PrimaryLink
              href="tel:+919304982636"
              className="w-full sm:w-fit !normal-case"
              transparent={true}
            >
              Book a Call
            </PrimaryLink>
          </div>
        </div>
        <div></div>
      </div>
      <div className="row-start-1 md:row-auto h-full hidden md:flex flex-col relative">
        <div
          className="w-full h-full bg-accent-500"
          style={{
            clipPath:
              "polygon(0 70%, 10rem 70%, calc(30% + 10rem) 30%, 100% 30%, 100% 100%, 0 100%)",
          }}
        ></div>
        <div className="absolute bottom-[30%] left-0 z-10">
          <div className="flex -space-x-3 *:rounded-full *:size-10 *:shadow-lg">
            <Image
              src={"/img/team/team_1.jpg"}
              alt=""
              width={500}
              height={500}
              quality={100}
              className="h-full w-full"
            />
            <Image
              src={"/img/team/team_2.jpg"}
              alt=""
              width={500}
              height={500}
              quality={100}
              className="h-full w-full"
            />
            <Image
              src={"/img/team/team_3.jpg"}
              alt=""
              width={500}
              height={500}
              quality={100}
              className="h-full w-full"
            />
            <Link
              href=""
              title="see our team"
              className="bg-accent-500 border-accent-500 flex items-center justify-center text-lg"
            >
              <GoPlus />
            </Link>
          </div>
          <p className="py-4 pb-10 text-lg">
            Work with the top <br /> talent in industries
          </p>
        </div>
        <Image
          src={"/img/prev_2.png"}
          alt=""
          width={500}
          height={500}
          quality={100}
          className="h-full w-fit absolute bottom-0 right-0"
        />
      </div>
      <div className="h-full flex justify-center  bg-white clip-path-penta-tl-md lg:clip-path-penta-tl-xl">
        <div className="w-full text-black grid items-center justify-center pt-16">
          <div>
            <p className="capitalize text-[1rem] sm:text-[2rem] xl:text-[2.5rem] leading-none font-[600]">
              1.5k<span className="text-accent-500">+</span>
            </p>
            <p className="text-sm leading-none font-[500] py-2">
              Global Clients
            </p>
          </div>
          <div className="pt-10 pb-6">
            <p className="uppercase font-[600] text-lg">
              Harmony <br />
              atrium
            </p>
            <p className="text-sm py-2 font-[500]">Settle - Washington</p>
          </div>
          <div className="p-1"></div>
        </div>
        <div className="h-full w-full bg-accent-500 clip-path-penta-tl-md lg:clip-path-penta-tl-xl">
          <Image
            src={"/img/prev_1.png"}
            alt=""
            width={500}
            height={500}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="h-full flex flex-col">
        <div className="grid lg:grid-cols-2 items-start h-fit *:p-10 *:md:p-16">
          <div className="flex items-center gap-4">
            <p className="capitalize text-[1rem] sm:text-[2rem] xl:text-[3rem] leading-none font-[600]">
              4.5k<span className="text-accent-500">+</span>
            </p>
            <p className="text-gray-500 text-xl leading-none">
              Successful <br /> project
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="capitalize text-[1rem] sm:text-[2rem] xl:text-[3rem] leading-none font-[600]">
              6<span className="text-accent-500">+</span>
            </p>
            <p className="text-gray-500 text-xl leading-none">
              Years of <br /> Expertise
            </p>
          </div>
        </div>
        {/* <div className="h-full flex items-end justify-end clip-path-testimonial-xl bg-accent-500">
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
