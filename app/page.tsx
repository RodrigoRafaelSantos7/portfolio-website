import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* Text */}
          <div className="text-center lg:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Rodrigo Santos</span>{" "}
            </h1>
            <p className="max-w-[530px] mb-9 text-secondary">
              I'm a{" "}
              <Link href="https://www.di.fct.unl.pt/en" className="underline">
                Computer Science
              </Link>{" "}
              student currently at{" "}
              <Link href="https://www.unl.pt/en" className="underline">
                Universidade Nova de Lisboa
              </Link>
              . My passion is theoretical computer science, with an emphasis on
              complexity, cryptography, and pseudorandomness. I love building
              things and I excel at crafting digital experiences.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl ml-2" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
