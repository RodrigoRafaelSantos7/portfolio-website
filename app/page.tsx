"use client";

import { IconCloudDemo } from "@/components/IconCloud";
import Photo from "@/components/Photo";
import { Slider } from "@/components/Slider";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import IconCloud from "@/components/ui/icon-cloud";
import { LinkPreview } from "@/components/ui/link-preview";
import { Icon } from "lucide-react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-12">
          {/* Text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Computer Scientist</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Rodrigo Santos</span>{" "}
            </h1>
            <p className="max-w-[530px] mb-9 text-secondary">
              I&apos;m a{" "}
              <LinkPreview
                url="https://www.di.fct.unl.pt/en"
                className="underline text-accent"
              >
                Computer Science
              </LinkPreview>{" "}
              student currently at{" "}
              <LinkPreview
                url="https://www.unl.pt/en"
                className="underline text-accent"
              >
                Universidade Nova de Lisboa
              </LinkPreview>
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
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Slider
        containerStyles="flex gap-8"
        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
      />
    </section>
  );
};

export default Home;
