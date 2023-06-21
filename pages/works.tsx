import WorksComponent from "@/components/Works";
import mmoWiki from "@/assets/mmo.png";
import stacksbower from "@/assets/stacksbowers.png";

const Works = () => {
  return (
    <div>
      <WorksComponent
        sent
        works={[
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
          {
            year: 2022,
            name: "My Tutoring World",
            work: "Sr Front End developer",
            desc: "MEAN stack project",
            cover: "http://api.mytutoring.world/photos/cheerful-multiracial-couple-celebrating-success-with-laptop-raising-picture-id1201431108-copy.jpg",
          },
          {
            year: 2021,
            desc: "WordPress and React JS",
            name: "Stack’s Bowers Galleries",
            work: "Sr Software Engineer",
            cover: "https://stacksbowers.com/wp-content/uploads/2023/06/SBG_HomePg_SydFMartinCCO_2_June2023_1146x405.jpg",
          },
          {
            year: 2019,
            name: "Insurity",
            work: "Sr Front Eend developer",
            desc: "C# and ASP .NET",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhLjRK5L_6uM3JZihesZiaxcbnQIZi5KPqgsp7nwy1A&s",
          },
          {
            year: 2021,
            desc: "eCommerce and Python",
            name: "Forcepoint",
            work: "Sr Full Stack developer",
            cover: "https://i.ytimg.com/vi/KdYA5-YWmy0/maxresdefault.jpg",
          },
        ]}
      />
    </div>
  );
};
export default Works;
