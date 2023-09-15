import { AreaProgress } from "@/components";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        {/* Title Section */}

        <div className="max-w-4xl text-center lg:text-left">
          <h2 className="text-4xl font-bold capitalize text-primary md:text-5xl">
            What We Have Skills
          </h2>
          <p>
            With in-depth experience in currentModern web technologies and
            development tools, I always strive to deliver the highest levels of
            performance and quality in every project I participate in. I have
            strong skills in... Html5, Css3, JavaScript, Typescript, Boostrap5,
            Tailwind Css, ReactJS, NextJS, Api, Redux, Framer Motion and more...
          </p>
        </div>

        {/* Area Progress */}

        <AreaProgress />
      </div>
    </section>
  );
};

export default Skills;
