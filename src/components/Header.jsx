import React, { useEffect, useState } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MoodeContext } from "../pages/Home";
import { GiMoonOrbit } from "react-icons/gi";
import { CiCloudMoon } from "react-icons/ci";

import { GiUbisoftSun } from "react-icons/gi";
import { CiCloudSun } from "react-icons/ci";

import { PiGitlabLogoFill } from "react-icons/pi";
import img from "../assets/looogo.svg";
function Header() {
  const { mood, setMood } = useContext(MoodeContext);

  const { t, i18n } = useTranslation();

  const [lang, setLange] = useState("uz");

  function handleChange(e) {
    setLange(e.target.value);
  }
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  function handlMod(e) {
    setMood(!mood);
  }

  return (
    <div className={mood ? "dark" : ""}>
      <div className="drop-shadow-xl dark:shadow-slate-400 dark:shadow-md  bg-white dark:bg-[#0F0F0F]">
        <div className="container w-[1230px] m-auto  items-center p-5 ">
          <div className="flex justify-between">
            <div className="font-serif text-3xl font-bold">
              <h2 className="dark:text-white flex items-center gap-4 font-thin">
                <div className="text-5xl">
                  <img src={img} alt="" />
                </div>
                Brave
              </h2>
            </div>
            <nav className="flex gap-8 font-sans text-lg cursor-pointer  dark:text-white">
              <p>{t("Templates")}</p>
              <p>{t("Features")}</p>
              <p>{t("Pricing")}</p>
              <p>{t("Resources")}</p>
            </nav>
            <div className="flex items-center gap-20">
              <form className="max-w-sm mx-auto">
                <label htmlFor="underline_select" className="sr-only">
                  Underline select
                </label>
                <select
                  onChange={handleChange}
                  value={lang}
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="uz">Uzbbekistan</option>
                  <option value="ru">Russiya</option>
                  <option value="en">England</option>
                </select>
              </form>
              <button
                onClick={handlMod}
                className=" text-blak pl-6 pr-6 rounded-xl mt-2"
              >
                {mood ? (
                  <span className="flex gap-2 text-4xl text-white">
                    <CiCloudMoon />
                  </span>
                ) : (
                  <span className="flex gap-2 text-4xl text-yellow-400">
                    <CiCloudSun />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
