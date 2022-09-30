import { Component, createContext, createSignal } from "solid-js";
import { Options } from "./Options";
import { OptionsProvider } from "./OptionsContext";
import { Wheel } from "./Wheel";

const App: Component = () => {
  const [isSpinning, setIsSpinning] = createSignal(false);

  return (
    <OptionsProvider>
      <div class="bg-slate-800 h-screen w-full flex items-center justify-center text-slate-200">
        <div class="flex justify-center items-top space-x-24">
          <div class="w-1/2">
            <Wheel
              isSpinning={isSpinning()}
              stopSpinning={() => setIsSpinning(false)}
            />
          </div>

          <div class="w-1/2">
            <h1 class="text-5xl font-bold">Set up your options</h1>
            <div class="mt-12">
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
