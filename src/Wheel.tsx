import { createEffect } from "solid-js";

export const Wheel = (props: {
  isSpinning: boolean;
  stopSpinning: () => void;
}) => {
  createEffect(() => {
    props.isSpinning;

    if (props.isSpinning) {
      setTimeout(() => {
        props.stopSpinning();
      }, 2000);
    }
  });

  const TopArrow = () => {
    return (
      <div
        class={`absolute z-10 top-0 -mt-3 w-8 lg:w-10 h-8 lg:h-10 bg-slate-200 shadow-black shadow-2xl ${
          !props.isSpinning && "animate-bounce"
        }`}
        style={{
          "clip-path": `polygon(100% 0, 0 0, 50% 100%)`,
        }}
      />
    );
  };
  return (
    <div class="w-full flex flex-col items-center relative">
      <TopArrow />
      <div
        class={`relative z-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] ${
          props.isSpinning && "animate-spin"
        }`}
      >
        <div class="absolute w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] p-2.5 bg-violet-500 top-0 left-0 rounded-tl-full"></div>
        <div class="absolute w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] p-2.5 bg-blue-500 top-0 right-0 rounded-tr-full"></div>
        <div class="absolute w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] p-2.5 bg-green-500 bottom-0 left-0 rounded-bl-full"></div>
        <div class="absolute w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] p-2.5 bg-yellow-500 bottom-0 right-0 rounded-br-full"></div>
      </div>
    </div>
  );
};
