import { JSX } from "solid-js/jsx-runtime";

export const Button = (props: {
  variant: "green" | "purple";
  isDisabled?: boolean;
  onClick: () => void;
  children: JSX.Element;
}) => {
  // we cannot destruct "isDisabled" (as it would lose its reactivity)
  // https://github.com/solidjs/solid/discussions/287
  const { variant, onClick, children } = props;

  const getBackgroundColors = () => {
    if (props.isDisabled) {
      return "bg-slate-900 text-slate-700 cursor-not-allowed";
    }

    switch (variant) {
      case "green":
        return "bg-green-700 hover:bg-green-600";
      case "purple":
        return "bg-fuchsia-600 hover:bg-fuchsia-700";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      class={`${getBackgroundColors()} w-full lg:w-1/2 px-6 py-3 rounded-lg font-bold text-lg flex justify-center items-center`}
    >
      {children}
    </button>
  );
};
