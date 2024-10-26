import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FcReadingEbook } from "react-icons/fc";
import { MdHomeWork } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  function handledel(id) {
    dispatch({ type: "REMOV", payload: id });
  }

  function handleclear() {
    dispatch({ type: "CLEAR" });
  }
  return (
    <div className="">
      <div className="container flex gap-5 ml-[900px] flex-wrap w-[630px] pt-24">
        <button
          className=" pt-1 pb-1 pr-3 pl-3 rounded-md  bg-blue-700 text-white font-bold "
          onClick={handleclear}
        >
          Clear
        </button>
        {cart.length > 0 &&
          cart.map(function (value) {
            return (
              <div className="w-64 flex-col rounded-md shadow-md  gap-2 flex  bg-white p-4">
                <h2 className="flex items-center  text-white gap-1">
                  <FaRegUser />

                  <p>Name:</p>
                  {value.name}
                </h2>
                <h2 className="flex items-center  text-black font-sans font-semibold gap-1">
                  <FaRegUser />

                  <p>Name:</p>
                  {value.lastname}
                </h2>
                <h2 className="flex  items-center gap-1 text-black font-sans font-semibold">
                  <MdHomeWork />
                  <p>Company:</p>
                  {value.company}
                </h2>
                <h2 className="flex items-center gap-1 text-black font-sans font-semibold">
                  <FcReadingEbook />

                  <p>Job:</p>
                  {value.job}
                </h2>

                <h2 className="flex items-center gap-1 text-black font-sans font-semibold">
                  {" "}
                  <p>
                    <MdOutlineMail />
                  </p>
                  Email:
                  {value.email}
                </h2>
                <h2 className="flex items-center text-black font-sans font-semibold gap-1">
                  <FaPhoneVolume />
                  <p>Phone:</p>

                  {value.phone}
                </h2>
                <button
                  className="pt-1 pb-1 pr-3 pl-3 rounded-md  bg-red-700 text-white font-bold "
                  onClick={() => handledel(value.id)}
                >
                  Remov
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;
