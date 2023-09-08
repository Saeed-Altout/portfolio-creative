import { flex, text } from "@/app/style";
import { profile } from "@/assets/images";
import { Button, Container, Wrapper } from "@/components";
import { dataMe, offers } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  const { currentTheme } = useStateContext();
  return (
    <section className="relative py-40">
      <Container>
        <div className="flex flex-col w-full max-w-4xl gap-12 duration-300 ease-in-out">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center justify-start gap-4 md:items-end md:flex-row">
              <div className="max-w-[200px] overflow-hidden rounded-lg">
                <Image
                  src={profile}
                  alt="Image Developer"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className={text.h2} style={{ color: currentTheme }}>
                Saeed Altout
                <span className={`${text.p} block text-center md:text-left`}>
                  @saeedaltoutpro
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 mt-10">
              {dataMe.map((item, key) => (
                <p
                  key={key}
                  className="flex items-center justify-start gap-2 text-base font-medium text-black"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  {item.title}: <span className={text.p}>{item.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mt-20 text-left">
          <h2 className={text.h2} style={{ color: currentTheme }}>
            How Are Saeed Altout?
          </h2>
          <p className={`${text.p} py-2`}>
            Saeed Altout a developer man dreamer, Study Biomedcail In Damascus
            University, and work as front-end developer with more +4 years
            experience
          </p>
          <p className={`${text.p} py-2`}>
            Saeed Altout a developer man dreamer, Study Biomedcail In Damascus
            University, and work as front-end developer with{" "}
            <span style={{ color: currentTheme }}>some skills </span>
          </p>
          <div
            className={`${flex.center} mt-20 flex-col flex-1 w-full gap-12 mx-auto`}
          >
            {offers.map((offer, key) => (
              <div key={key} className="flex flex-col w-full gap-3">
                <div className={flex.between}>
                  <div className={`${flex.center} gap-2`}>
                    <span className="w-8 h-8">
                      <Image
                        alt="Icon Skill"
                        src={offer.icon}
                        className="object-cover w-full h-full"
                      />
                    </span>
                    <p className={text.p}>{offer.title}</p>
                  </div>
                  <p className={text.p}>{offer.percentg}</p>
                </div>

                <span className="block w-full h-2 bg-gray-100 rounded-lg">
                  <span
                    style={{
                      width: offer.percentg,
                      backgroundColor: currentTheme,
                    }}
                    className={`relative after:absolute after:content-['${offer.percentg}'] after:-top-8 after:right-0 bg-gradient-to-r from-[#fff]  h-2 block rounded-lg`}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
        <Button
          href="/#skills"
          text="Go Back Home"
          icon={<FiArrowUpRight />}
          styles={`mt-20 mx-auto bg-black text-white`}
        />
      </Container>
    </section>
  );
};

export default About;
