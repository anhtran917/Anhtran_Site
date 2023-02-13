import logoSvg from "@/assets/logo.svg";
import { FC } from "react";
const Logo: FC<{ animate?: boolean }> = ({ animate }) => {
  return (
    <div className="relative cursor-pointer group w-fit">
      <img
        src={logoSvg.src}
        alt="logo"
        className={`group-hover:rotate-90 duration-700 delay-100 transition-transform ${
          animate && " animate-spin"
        }`}
        style={{ width: !animate ? 75 : 130 }}
      />
      <div
        className={`absolute text-white ${
          animate
            ? "top-[calc(35%+3px)] text-4xl left-[calc(25%+6px)] "
            : " top-[calc(30%+3px)] text-lg  left-[calc(25%+6px)] "
        } font-[900]`}
      >
        ME
      </div>
    </div>
  );
};
export default Logo;
