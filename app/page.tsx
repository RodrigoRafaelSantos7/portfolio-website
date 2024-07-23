import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* Text */}
          <div className="text-center lg:text-left">
            <span>Software Developer</span>
            <h1>
              Hello I'm <br /> <span>Rodrigo Santos</span>{" "}
            </h1>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
