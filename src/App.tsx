import { Component, createContext, createSignal } from "solid-js";
import { Options } from "./Options";
import { OptionsProvider } from "./OptionsContext";
import { Wheel } from "./Wheel";

const App: Component = () => {
  const [isSpinning, setIsSpinning] = createSignal(false);

  return (
    <OptionsProvider>
      <div class="w-full min-h-screen bg-slate-800 text-slate-200 flex flex-col justify-center">
        <div class="flex items-center justify-center">
          <div class="flex flex-col lg:flex-row justify-center items-top space-x-0 lg:space-x-24 space-y-12 lg:space-y-0">
            <div class="w-full lg:w-1/2 mt-16 lg:mt-0">
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

        <div class="flex flex-col items-center py-4 mt-10 relative lg:absolute lg:bottom-0 lg:inset-x-1/2">
          <p class="text-xs block w-32 opacity-50">
            &copy; Daniel Agg, {new Date().getFullYear()}.
          </p>
          <p class="text-[11px] mt-1">
            <a
              href="https://danielagg.com/"
              class="underline cursor-pointer opacity-50 hover:opacity-100"
            >
              danielagg.com
            </a>
          </p>
        </div>
      </div>
    </OptionsProvider>
  );
};

export default App;
