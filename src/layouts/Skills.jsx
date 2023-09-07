import { flex, tag, text } from "@/app/style";
import { skills } from "@/assets/images";
import { Container, TitleSection } from "@/components";
import { offers } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";

const Skills = () => {
  const { currentTheme } = useStateContext();
  return (
    <section className={tag.section} id="skills">
      <Container>
        <TitleSection
          title="What We Have Skills"
          subTitle="You are free to use this template for any purpose. You are not
        allowed to redistribute the downloadable ZIP file of Tale SEO
        Template on any other template website. Please contact us. Thank
        you."
        />

        <div
          className={`${flex.center} flex-col w-full gap-20 mt-20 lg:flex-row`}
        >
          <div
            className={`${flex.center} flex-col flex-1 w-full max-w-3xl gap-12 mx-auto`}
          >
            {offers.map((offer) => (
              <div key={offer.id} className="flex flex-col w-full gap-3">
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

          <div className="max-w-xl -order-1 lg:order-1">
            <Image
              alt="Skills"
              src={skills}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
