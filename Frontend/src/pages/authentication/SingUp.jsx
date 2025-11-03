import React, { useState } from "react";
import MainWidth from "../../components/layout/MainWidth";
import WordiloLogo from "../../assets/png/Black White Minimal Simple Modern Letter A  Arts Gallery  Logo (1).png";
import { useForm } from "react-hook-form";
import axios from "axios";
import SimpleNotification from "../../components/ui/SimpleNotification";
import { Link } from "react-router";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    title: "",
    message: "",
    type: "",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/create`,
        data
      );
      setNotification({
        show: true,
        title: "Success",
        message: response.data.message,
        type: "success",
      });
    } catch (error) {
      setNotification({
        show: true,
        title: "Error",
        message: error.response.data.message,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <SimpleNotification
        show={notification.show}
        setShow={(val) => setNotification({ ...notification, show: val })}
        title={notification.title}
        message={notification.message}
        type={notification.type}
      />
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
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="col-span-2">
                    <input
                      {...register("username", {
                        required: "Username is required",
                      })}
                      id="username"
                      name="username"
                      type="text"
                      placeholder={
                        errors.username ? errors.username.message : "Username"
                      }
                      autoComplete="username"
                      aria-label="Username"
                      aria-invalid={errors.username ? "true" : "false"}
                      className={`block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 ${
                        errors.username
                          ? "outline-red-500 focus:outline-red-500"
                          : "outline-gray-300 focus:outline-indigo-600 dark:outline-gray-700 dark:focus:outline-indigo-500"
                      }`}
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      {...register("email", { required: "Email is required" })}
                      id="email-address"
                      name="email"
                      type="email"
                      placeholder={
                        errors.email ? errors.email.message : "Email address"
                      }
                      autoComplete="email"
                      aria-label="Email address"
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 ${
                        errors.email
                          ? "outline-red-500 focus:outline-red-500"
                          : "outline-gray-300 focus:outline-indigo-600 dark:outline-gray-700 dark:focus:outline-indigo-500"
                      }`}
                    />
                  </div>
                  <div className="-mt-px">
                    <input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      id="password"
                      name="password"
                      type="password"
                      placeholder={
                        errors.password ? errors.password.message : "Password"
                      }
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
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 disabled:bg-indigo-400"
                  >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                  </button>
                </div>
              </form>
              <p className="text-center text-sm/6 text-gray-500 dark:text-gray-400">
                Already a member?
                <Link
                  to={"/signin"}
                  className="px-2 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Click here to signin
                </Link>
              </p>
            </div>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default SingUp;
