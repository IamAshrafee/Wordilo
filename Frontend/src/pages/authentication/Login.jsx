import React from "react";
import MainWidth from "../../components/layout/MainWidth";
import WordiloLogo from "../../assets/png/Black White Minimal Simple Modern Letter A  Arts Gallery  Logo (1).png";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-full">
      <MainWidth>
        <div className="h-full">
          <>
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
                    Sign in to your account
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div>
                    <div className="col-span-2">
                      <input
                        {...register("email", { required: "Email is required" })}
                        id="email-address"
                        name="email"
                        type="email"
                        placeholder={errors.email ? errors.email.message : "Email address"}
                        autoComplete="email"
                        aria-label="Email address"
                        aria-invalid={errors.email ? "true" : "false"}
                        className={`block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 ${
                          errors.email
                            ? "outline-red-500 focus:outline-red-500"
                            : "outline-gray-300 focus:outline-indigo-600 dark:outline-gray-700 dark:focus:outline-indigo-500"
                        }`}
                      />
                    </div>
                    <div className="-mt-px">
                      <input
                        {...register("password", { required: "Password is required" })}
                        id="password"
                        name="password"
                        type="password"
                        placeholder={errors.password ? errors.password.message : "Password"}
                        autoComplete="current-password"
                        aria-label="Password"
                        aria-invalid={errors.password ? "true" : "false"}
                        className={`block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 ${
                          errors.password
                            ? "outline-red-500 focus:outline-red-500"
                            : "outline-gray-300 focus:outline-indigo-600 dark:outline-gray-700 dark:focus:outline-indigo-500"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <div className="flex h-6 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:indeterminate:border-indigo-500 dark:indeterminate:bg-indigo-500 dark:focus-visible:outline-indigo-500 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label
                        htmlFor="remember-me"
                        className="block text-sm/6 text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm/6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="text-center text-sm/6 text-gray-500 dark:text-gray-400">
                  Not a member?{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Signup Now!
                  </a>
                </p>
              </div>
            </div>
          </>
        </div>
      </MainWidth>
    </div>
  );
};

export default Login;
