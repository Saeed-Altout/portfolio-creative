"use client";
import Image from "next/image";
import { knowleadg, offers } from "@/constants";
import { flex, text } from "@/app/style";
import { useStateContext } from "@/contexts/ContextProvider";

const AreaProgress = () => {
  const { currentTheme } = useStateContext();
  return (
    <div
      className={`${flex.start} bg-white rounded-xl dark:bg-dark shadow-xl p-10 mt-20 flex-wrap w-full gap-12 mx-auto`}
    >
      {knowleadg.map((group, key) => (
        <div className="flex flex-col w-full gap-5" key={key}>
          <h1 className={`${text.h5} capitalize`}>{group.title}</h1>
          {group.skills.map((skill, key) => (
            <div key={key} className="flex flex-col w-full gap-3">
              <div className={flex.between}>
                <div className={`${flex.center} gap-2`}>
                  <span className="w-8 h-8">
                    <Image
                      alt="Icon Skill"
                      src={skill.icon}
                      className="object-cover w-full h-full"
                    />
                  </span>
                  <p className={text.p}>{skill.title}</p>
                </div>
                <p className={text.p}>{skill.percentg}</p>
              </div>

              <span className="block w-full h-2 bg-gray-100 rounded-lg">
                <span
                  style={{
                    width: skill.percentg,
                    backgroundColor: currentTheme,
                  }}
                  className={`relative bg-gradient-to-r from-[#fff]  h-2 block rounded-lg`}
                />
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AreaProgress;
