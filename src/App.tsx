import { Component, createContext, createSignal } from "solid-js";
import { Options } from "./Options";
import { OptionsProvider } from "./OptionsContext";
import { Wheel } from "./Wheel";

const App: Component = () => {
  const [isSpinning, setIsSpinning] = createSignal(false);

  return (
    <OptionsProvider>
      <div class="bg-slate-800 min-h-screen min-w-full flex items-center justify-center text-slate-200">
        <div class="flex flex-col lg:flex-row justify-center items-top space-x-0 lg:space-x-24 space-y-12 lg:space-y-0">
          <div class="w-full lg:w-1/2">
            <Wheel
              isSpinning={isSpinning()}
              stopSpinning={() => setIsSpinning(false)}
            />
          </div>

          <div class="w-full lg:w-1/2">
            <h1 class="text-3xl lg:text-5xl font-bold flex justify-center lg:justify-start">
              Set up your options
            </h1>
            <div class="mt-6 lg:mt-12">
              <Options
                isSpinning={isSpinning()}
                onSubmit={() => setIsSpinning(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </OptionsProvider>
  );
};

export default App;
