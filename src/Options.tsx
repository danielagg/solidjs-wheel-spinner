import { createSignal } from "solid-js";
import { Button } from "./components/Button";
import { useAppContext } from "./AppContext";

export const Options = () => {
  const [data, { addOption, removeOption, toggleWheelSpin }] = useAppContext();
  const [newOptionToAdd, setNewOptionToAdd] = createSignal("");
  let textInputRef: HTMLInputElement | undefined = undefined;

  const onAddNewOptionToState = () => {
    if (newOptionToAdd().length === 0) return;

    addOption({ id: newOptionToAdd(), name: newOptionToAdd() });
    setNewOptionToAdd("");
    textInputRef?.focus();
  };

  return (
    <div class="mx-4 lg:mx-0">
      <div class="flex justify-center items-center lg:justify-start">
        {!data.options.length && (
          <p class="italic opacity-40 text-lg lg:text-xl">
            No options are added, yet.
          </p>
        )}
        <ul class="list-inside ml-2 space-y-4">
          {data.options.map((o) => {
            return (
              <li class="text-lg flex space-x-2 justify-center lg:justify-start items-center">
                <div class="break-normal flex items-center space-x-2">
                  <span class="block text-xs">◉</span> <div>{o.name}</div>
                </div>
                {!data.isWheelSpinning && (
                  <div
                    onClick={() => {
                      removeOption(o);
                      textInputRef?.focus();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width={1.5}
                      stroke="currentColor"
                      class="w-4 h-4 opacity-60 hover:opacity-100 cursor-pointer hover:text-red-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <input
        type="text"
        placeholder="Type an option here"
        ref={textInputRef}
        autofocus
        class="block border border-slate-600 text-sm rounded-lg w-full mt-10 p-2.5 bg-slate-700 placeholder-gray-400 placeholder:italic placeholder:text-slate-400"
        value={newOptionToAdd()}
        onInput={(e) => setNewOptionToAdd(e.currentTarget.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") onAddNewOptionToState();
        }}
      />

      <div class="w-full flex flex-col lg:flex-row justify-between mt-8 lg:mt-4 space-y-2 lg:space-y-0 space-x-0 lg:space-x-4">
        <Button variant="green" onClick={() => onAddNewOptionToState()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={1.5}
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <div class="text-sm lg:text-base">Add Option</div>
        </Button>
        <Button
          variant="purple"
          onClick={() => toggleWheelSpin()}
          isDisabled={data.options.length === 0 || data.isWheelSpinning}
        >
          <div class="text-sm lg:text-base">Spin the Wheel!</div>
        </Button>
      </div>

      <div class="opacity-50 mt-16">
        <h2 class="font-bold text-sm lg:text-base">What is this app?</h2>
        <p class="text-xs lg:text-sm mt-2 lg:mt-1">
          After you add a couple of options via the control above, you will be
          able to spin the wheel: it will stop on a random option.
        </p>
      </div>
    </div>
  );
};
