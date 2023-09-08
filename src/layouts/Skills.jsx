import Image from "next/image";
import { flex, tag } from "@/app/style";
import { skills } from "@/assets/images";
import { AreaProgress, Container, TitleSection } from "@/components";

const Skills = () => {
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
          <AreaProgress />
          <div className="hidden max-w-xl -order-1 lg:order-1">
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
