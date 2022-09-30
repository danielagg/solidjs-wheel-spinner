import { Context, createContext, JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type OptionType = {
  id: string;
  name: string;
};

type AppContextModel = [
  { options: OptionType[]; isWheelSpinning: boolean },
  {
    addOption: (option: OptionType) => void;
    removeOption: (option: OptionType) => void;
    toggleWheelSpin: () => void;
  }
];

export const AppContext: Context<AppContextModel> =
  createContext<AppContextModel>([
    { options: [], isWheelSpinning: false },
    {
      addOption: (_: OptionType) => {},
      removeOption: (_: OptionType) => {},
      toggleWheelSpin: () => {},
    },
  ]);

export const AppContextProvider = (props: { children: JSX.Element }) => {
  const [store, setStore] = createStore<{
    options: OptionType[];
    isWheelSpinning: boolean;
  }>({
    options: [],
    isWheelSpinning: false,
  });

  const contextProviderValue: AppContextModel = [
    store,
    {
      addOption: (option: OptionType) => {
        setStore("options", (currentOptions) => [...currentOptions, option]);
      },
      removeOption: (option: OptionType) => {
        setStore("options", (currentOptions) =>
          currentOptions.filter((c) => c.id != option.id)
        );
      },
      toggleWheelSpin: () => {
        setStore(
          "isWheelSpinning",
          (currentWheelSpinningState) => !currentWheelSpinningState
        );
      },
    },
  ];

  return (
    <AppContext.Provider value={contextProviderValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
