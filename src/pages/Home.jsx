import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiHospital } from "react-icons/gi";

import { useTranslation } from "react-i18next";
import { createContext } from "react";
import bg from "../assets/bg.png";
import st1 from "../assets/star1.svg";
import st2 from "../assets/star2.svg";
export const MoodeContext = createContext();

function Home() {
  const [mood, setMood] = useState(() => {
    return localStorage.getItem("darkmode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkmode", mood);
  }, [mood]);

  const { t, i18n } = useTranslation();
  return (
    <MoodeContext.Provider value={{ mood, setMood }}>
      <div className={mood ? "dark" : ""}>
        <Header />
        <div className="bg-[#fff]  dark:bg-[#0F0F0F]">
          <div className="container  text-black dark:text-white  pr-56 pl-56 pt-16 pb-16 text-xl font-bold font-sans">
            <h3 className="text-center">{t("Contact")}</h3>
            <img src={st2} alt="" />

            <h1 className="text-5xl flex items-center justify-center gap-1 text-center font-sans pt-6 ">
              {t("Say")}
            </h1>
            <p className="text-center pt-8 text-base w-[750px] ml-40 ">
              {t("desc")}
            </p>
            <img className="ml-[1000px]" src={st1} alt="" />

            <div className="flex justify-center items-center pb-6 pt-24 gap-12">
              <span className="cursor-pointer bg-white dark:bg-slate-900 rounded-md shadow-md flex items-center gap-8 p-7 ">
                <p className="text-3xl text-blue-600">
                  <FiPhoneCall />
                </p>
                <p>
                  <p className=" text-sm font-semibold">{t("call")}</p>
                  <p className="text-slate-600">+1 (214) 960 4130</p>
                </p>
              </span>
              <span className="cursor-pointer bg-white dark:bg-slate-900 rounded-md shadow-md flex items-center gap-8 p-7 ">
                <p className="text-3xl text-blue-600">
                  <MdOutlineMailOutline />
                </p>

                <p>
                  <p className=" text-sm font-semibold">{t("Email")}</p>
                  <p className="text-slate-600">hello@aiinfo.com</p>
                </p>
              </span>
            </div>
            <span className="cursor-pointer bg-white  dark:bg-slate-900 rounded-md p-4 items-center gap-7 shadow-md flex ml-56 w-[620px] ">
              <p className="text-4xl text-blue-600">
                <GiHospital />
              </p>
              <p>
                <p className=" text-sm font-semibold">{t("HEADQUARTERS")}</p>
                <p className="text-slate-600">{t("last1")}</p>
              </p>
            </span>
          </div>
          <div>
            <div className=" absolute text-center ml-72 mt-44 gap-12 flex items-center flex-col justify-center">
              <h2 className="text-5xl font-bold text-white  ">
                Sign up for your free 14 day trial now!
              </h2>
              <button className="p-4 rounded-md bg-blue-400 text-white w-52 ">
                {t("btn")}
              </button>
            </div>
            <img className="w-full bg-[#0F0F0F] " src={bg} alt="" />
          </div>
        </div>
      </div>
    </MoodeContext.Provider>
  );
}

export default Home;
