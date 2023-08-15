import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../stores/actions/actionCreator";
import bgImg from "../assets/images/bg-min.jpeg";
import netflixLogo from "../assets/images/netflix-logo.svg";
import PreLoader from "../components/PreLoader";
import toastOptions from "../stores/constants/toastOptions";

export default function LoginPage() {
  const { userLoading } = useSelector((state) => state.user);

  const initialFormState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    ...initialFormState,
  });

  const onChange = (e) => {
    const { name, value } = e?.target || {};
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(login(form));
      if (!response) throw new Error("Login Failed");

      setForm(initialFormState);

      navigate("/");
      toast.success("Login Successfully!", toastOptions);
    } catch (error) {
      console.log(error);
      toast.error(error?.message ? error?.message : error, toastOptions);
    }
  };

  if (userLoading) {
    return <PreLoader />;
  }

  return (
    <>
      <div className="relative flex h-screen overflow-y-hidden w-screen flex-col md:items-center md:justify-center md:bg-transparent bg-primary-color text-white">
        {/* Background */}
        <img
          src={bgImg}
          className="-z-10 !hidden opacity-[20%] sm:!inline bg-cover absolute"
        />

        {/* Logo Icon */}
        <img
          src={netflixLogo}
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
        />

        {/* Log In Form */}
        <form
          className="w-full relative mt-24 space-y-8 rounded bg-primary-color pt-10 pb-14 px-6 md:mt-0 md:max-w-md md:px-14"
          onSubmit={handleLogin}
        >
          <h1 className="text-4xl font-semibold">Sign In</h1>

          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Email"
                className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
              />
            </label>

            <label className="inline-block w-full">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Password"
                className="w-full rounded bg-tertiary-color px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
              />
            </label>
          </div>

          <div className="w-full">
            <button
              className="rounded py-3 font-semibold text-center mx-auto w-full bg-secondary-color hover:opacity-80 transition-all duration-100"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
