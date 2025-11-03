import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function SimpleNotification({ 
  show, 
  setShow, 
  title, 
  message, 
  type,
  duration = 3000 
}) {
  const isSuccess = type === "success";

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, setShow, duration]);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-start px-4 py-6 sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={show}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white/10">
            <div className="p-4">
              <div className="flex items-start">
                <div className="shrink-0">
                  {isSuccess ? (
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="size-6 text-green-400"
                    />
                  ) : (
                    <XCircleIcon
                      aria-hidden="true"
                      className="size-6 text-red-400"
                    />
                  )}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {title}
                  </p>
                  {message && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {message}
                    </p>
                  )}
                </div>
                <div className="ml-4 flex shrink-0">
                  <button
                    type="button"
                    onClick={() => setShow(false)}
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}