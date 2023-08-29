import { TitleSection, Wrapper } from "@/components";
import { offers } from "@/constants";

const Skills = () => {
  return (
    <section className="relative py-40" id="skills">
      <Wrapper styles="flex flex-col md:flex-row  justify-center items-center gap-10">
        <TitleSection
          styles="text-center md:text-left"
          title="What We Have Skills"
          subTitle="You are free to use this template for any purpose. You are not
        allowed to redistribute the downloadable ZIP file of Tale SEO
        Template on any other template website. Please contact us. Thank
        you."
        />
        <div className="flex flex-col w-full max-w-4xl gap-12 p-10 duration-300 ease-in-out shadow-lg md:-order-1">
          {offers.map((offer) => (
            <div key={offer.id} className="flex flex-col gap-3">
              <span className="flex items-center justify-between">
                <h6 className="text-base font-medium text-black">
                  {offer.title}
                </h6>
                <p className="text-base font-medium text-gray-400">
                  {offer.percentg}
                </p>
              </span>

              <span className="block w-full h-2 bg-gray-100 rounded-lg">
                <span
                  style={{
                    width: offer.percentg,
                  }}
                  className="bg-gradient-to-r from-[#e6f1ff] to-[#4e98e5] h-2 block rounded-lg"
                />
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Skills;
