import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOptions from "../stores/constants/toastOptions";
import { addAdmin } from "../stores/actions/actionCreator";
import PreLoader from "../components/PreLoader";

export default function RegisterAdminPage() {
  const { userLoading } = useSelector((state) => state.user);

  const initialFormState = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  };

  const [form, setForm] = useState({ ...initialFormState });

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e?.target || {};
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(addAdmin(form));
      if (!response) throw new Error("Registration Failed");

      setForm(initialFormState);

      toast.success("Admin is Registered Successfully!", toastOptions);
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
      <div className="py-[60px] sm:ml-64 px-[50px]">
        <h1 className="font-semibold text-2xl">Register New Admin</h1>
        <h3 className="font-semibold text-md mt-[40px]">
          Personal Information
        </h3>
        <p className="text-gray-500 text-sm">
          Use a permanent address where you can receive mail.
        </p>
        <hr className="my-3 border-gray-500" />

        <form action="#" onSubmit={handleAddAdmin}>
          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <h3>Username</h3>
            </div>
            <div className="col-span-2">
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={onChange}
                className="w-full rounded bg-tertiary-color px-5 py-2 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
              />
            </div>
          </div>

          <hr className="my-3 border-gray-500" />

          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <h3>Email</h3>
            </div>
            <div className="col-span-2">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded bg-tertiary-color px-5 py-2 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
              />
            </div>
          </div>

          <hr className="my-3 border-gray-500" />

          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <h3>Password</h3>
            </div>
            <div className="col-span-2">
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={onChange}
                className="w-full rounded bg-tertiary-color px-5 py-2 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
              />
            </div>
          </div>

          <hr className="my-3 border-gray-500" />

          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <h3>Phone Number</h3>
            </div>
            <div className="col-span-2">
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={onChange}
                className="w-full rounded bg-tertiary-color px-5 py-2 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
              />
            </div>
          </div>

          <hr className="my-3 border-gray-500" />

          <div className="grid grid-cols-3">
            <div className="flex items-center">
              <h3>Address</h3>
            </div>
            <div className="col-span-2">
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={onChange}
                className="w-full rounded bg-tertiary-color px-5 py-2 placeholder-[gray] outline-none focus:bg-[#3b3b3b]"
              />
            </div>
          </div>

          <hr className="my-3 border-gray-500" />

          <div className="flex justify-end mt-5">
            <div className="flex gap-3 pr-4">
              <Link
                to="/"
                className="border border-secondary-color hover:opacity-80 transition-all duration-100 text-white py-2 px-4 text-sm font-semibold rounded inline-flex items-center"
              >
                <span>Cancel</span>
              </Link>
              <button
                className="bg-secondary-color hover:opacity-80 transition-all duration-100 text-white py-2 px-4 text-sm font-semibold rounded inline-flex items-center"
                type="submit"
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
