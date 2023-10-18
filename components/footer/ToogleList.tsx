import { useState, useEffect, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface IToggleList {
  title: string;
  children: ReactNode;
}

function ToggleList(props: IToggleList) {
  const { children, title } = props;
  const [toggleList, setToggleList] = useState(false);
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const mediaQuery = useMediaQuery({ query: `(max-width: 767px)` });
  const handleToggleList = () => {
    if (toggleList === false) {
      setToggleList(true);
    } else {
      setToggleList(false);
    }
  };

  useEffect(() => {
    if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
      setToggleList(false);
    }
  }, [mediaQuery, isMinWidthMedium]);

  return (
    <div className="relative overflow-hidden border-b md:border-none pointer-events-auto md:w-max">
      <h3 className="text-black block">
        <span className="hidden md:block mb-3 font-medium">{title}</span>
        <button
          onClick={handleToggleList}
          className="flex justify-between w-full relative z-10 md:hidden "
          style={{ backgroundColor: "aliceblue" }}
        >
          <span>{title}</span>
          <span
            className="transition-all text-lg"
            style={{ rotate: toggleList ? "45deg" : "none" }}
          >
            +
          </span>
        </button>
      </h3>
      <ul
        className="block space-y-2 overflow-hidden will-change-transform pb-3 top-full left-0 w-full px-3 md:p-0"
        style={{
          position: toggleList || !isMinWidthMedium ? "static" : "absolute",
          transform:
            toggleList || !isMinWidthMedium ? "none" : "translateY(-100px)",
          transition:
            toggleList || isMinWidthMedium ? "transform ease 300ms" : "none",
          visibility: toggleList || !isMinWidthMedium ? "visible" : "hidden",
          zIndex: toggleList || !isMinWidthMedium ? "1" : "-1",
        }}
      >
        {children}
      </ul>
    </div>
  );
}

export default ToggleList;
