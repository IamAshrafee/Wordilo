import React from "react";
import MainWidth from "../../components/layout/MainWidth";
import WordiloLogo from "../../assets/png/Black White Minimal Simple Modern Letter A  Arts Gallery  Logo (1).png";

const SingUp = () => {
  return (
    <div className="h-full">
      <MainWidth>
        <div className="h-full">
          <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-sm space-y-10">
              <div>
                <img
                  alt="Your Company"
                  src={WordiloLogo}
                  className="mx-auto h-10 w-auto dark:hidden"
                />
                <img
                  alt="Your Company"
                  src={WordiloLogo}
                  className="mx-auto h-10 w-auto not-dark:hidden"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                  Sign up a new account
                </h2>
              </div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <div className="col-span-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      placeholder="Username"
                      autoComplete="username"
                      aria-label="Username"
                      className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      autoComplete="email"
                      aria-label="Email address"
                      className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                  <div className="-mt-px">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Password"
                      autoComplete="current-password"
                      aria-label="Password"
                      className="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <p className="text-center text-sm/6 text-gray-500 dark:text-gray-400">
                Already a member?
                <a
                  href="#"
                  className="px-2 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Click here to signin
                </a>
              </p>
            </div>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default SingUp;
