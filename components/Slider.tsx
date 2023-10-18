import { ReactNode, useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

interface ISlider {
  children: ReactNode[];
  auto?: boolean;
}

function Slider(props: ISlider) {
  const { children, auto } = props;
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent(current => (current === children?.length - 1 ? 0 : current + 1));
  };
  const next = () => {
    setCurrent(current => (current === 0 ? children?.length - 1 : current - 1));
  };

  useEffect(() => {
    if (!auto) return;
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  });
  return (
    <div className="rounded-2xl overflow-hidden border">
      <div className="relative">
        <div
          className="flex flex-row-reverse transition-transform ease-out duration-500 delay-150"
          style={{ transform: `translateX(${current * 100}%)` }}
        >
          {children}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className={`bg-slate-300 bg-opacity-70 backdrop:blur-md  rounded-full p-3 text-slate-500 hover:bg-slate-200 transition-all ${
              current !== children.length - 1
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeftIcon width={30} />
          </button>
          <button
            onClick={next}
            className={`bg-slate-300 bg-opacity-70 backdrop:blur-md rounded-full p-3 text-slate-500 hover:bg-slate-200 transition-all ${
              current !== 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRightIcon width={30} />
          </button>
        </div>
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex flex-row-reverse items-center justify-center gap-2">
            {children.map((_, index) => (
              <div
                key={index}
                className={`transition-all w-2 h-2 rounded-full bg-slate-700 ${
                  current === index ? "bg-slate-900" : "opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
