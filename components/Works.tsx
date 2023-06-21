import greenrabbit from "@/assets/greenrabbit.png";
import { Button } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

const WorksComponent: NextPage<{ works?: any[]; sent: boolean }> = ({
  sent,
  works = [
    {
      year: 2023,
      name: "YoGo.DK",
      work: "Full Stack developer",
      desc: "Vue JS and Sails JS",
      cover: "https://yogo.dk/wp-content/uploads/2022/06/MacBook-Pro-cropped-900x507.png",
    },
    {
      year: 2022,
      desc: "Svelte and Javascript",
      name: "Green Rabbit Game",
      work: "Lead Software Developer",
      cover: "https://www.greenrabbitgame.io/assets/landing/toppage/landingrabbit.png",
    },
  ],
}) => {
  return (
    <div id="works" className="flex flex-col mb-[10rem] items-center">
      <div className="flex flex-col w-full items-center gap-7">
        <div className="text-5xl greeting  text-[rgb(54,91,254)]">
          Fantastic
        </div>
        <div className="font-bold text-5xl text-white">Selected Works</div>
        <div className="w-full items-center gap-0 xl:gap-[10rem] grid grid-cols-1 sm:grid-cols-2">
          {works.map((work, index) => (
            <Link
            href="/"
              key={index}
              className={`bg-[rgb(33,39,55)] group relative xl:h-[22rem] sm:h-[35vw] p-10 rounded-tl-[30px] rounded-br-[30px] sm:max-w-auto  max-w-[35rem] sm:w-[45vw] ${index % 2 !== 0 ? "hover:bg-[#009971]" : "hover:bg-[#4445A1]"}`}
            >
              <div className="flex gap-5 relative flex-col">
                <div className="flex justify-between">
                  <div className="text-white font-bold text-lg ">
                    {work.name}
                  </div>
                  <div className="font-bold text-white opacity-40">
                    {work.year}
                  </div>
                </div>

                <div className="flex  flex-col">
                  <div className="bg-[rgba(33,39,55,0.65)] text-2xl font-medium z-50 greeting  ml-auto rounded-tl-[15px] p-3 absolute top-16 right-7  text-white rounded-br-[15px]">
                    {work.desc}
                  </div>
                  <img
                    className="sm:h-[30vw] group-hover:scale-110 duration-700 transition-transform xl:h-[22rem] rounded-tl-[30px] rounded-br-[30px]"
                    src={work.cover}
                  />
                  <div className="bg-[rgba(33,39,55,0.65)] uppercase font-semibold text-sm  mr-auto rounded-tl-[15px] p-3 absolute bottom-6 left-0  translate-x-5 text-white rounded-br-[15px]">
                    {work.work}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {!sent && (
        <Link href="/works" className="sm:mt-[14rem]  hover:scale-110 transition-transform duration-700 mt-[5rem]">
          <Button
            style={{
              background: "rgb(31,98,250)",
              color: "white",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 16,
              padding: "10px 25px",
              fontSize: 17,
            }}
            variant="contained"
            className="border-tl-[16px] border-br-[16px] "
          >
            SEE MORE
          </Button>
        </Link>
      )}
      <div className="text-[rgb(57,63,79)] greeting text-6xl mt-[8rem]">
        ”Be who you needed when you were younger”
      </div>
    </div>
  );
};
export default WorksComponent;
