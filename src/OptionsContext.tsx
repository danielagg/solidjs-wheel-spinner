import { Context, createContext, JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type OptionType = {
  id: string;
  name: string;
};

type OptionContextModel = [
  { data: OptionType[] },
  {
    addOption: (option: OptionType) => void;
    removeOption: (option: OptionType) => void;
  }
];

export const OptionContext: Context<OptionContextModel> =
  createContext<OptionContextModel>([
    { data: [] },
    { addOption: (_: OptionType) => {}, removeOption: (_: OptionType) => {} },
  ]);

export const OptionsProvider = (props: { children: JSX.Element }) => {
  const [optionsStore, setOptionsStore] = createStore<{
    data: OptionType[];
  }>({
    data: [],
  });

  const contextProviderValue: OptionContextModel = [
    optionsStore,
    {
      addOption: (option: OptionType) => {
        setOptionsStore("data", (currentOptions) => [
          ...currentOptions,
          option,
        ]);
      },
      removeOption: (option: OptionType) => {
        setOptionsStore("data", (currentOptions) =>
          currentOptions.filter((c) => c.id != option.id)
        );
      },
    },
  ];

  return (
    <OptionContext.Provider value={contextProviderValue}>
      {props.children}
    </OptionContext.Provider>
  );
};

export const useOptions = () => useContext(OptionContext);
