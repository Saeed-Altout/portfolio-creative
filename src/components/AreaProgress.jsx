import Image from "next/image";
import { knowleadg } from "@/constants";

const AreaProgress = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-12 p-5 mt-20 bg-white shadow-lg xl:flex-row">
      {knowleadg.map((group, key) => (
        <div key={key} className="flex flex-col w-full gap-5">
          <h2 className="text-2xl font-medium capitalize">{group.title}</h2>
          {group.skills.map((skill, key) => (
            <div key={key} className="flex flex-col w-full gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                  <Image alt="Icon Skill" src={skill.icon} width={40} />
                  <p>{skill.title}</p>
                </div>
                <p>{skill.percentg}</p>
              </div>

              <span className="block w-full h-2 overflow-hidden bg-gray-200 rounded-xl">
                <span
                  style={{
                    width: skill.percentg,
                  }}
                  className="relative block h-2 bg-gradient-to-r from-[#fff] to-sky-500"
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
