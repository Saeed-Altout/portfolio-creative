import { profile } from "@/assets/images";
import { Wrapper } from "@/components";
import { dataMe, offers } from "@/constants";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-40">
      <Wrapper styles="flex flex-col md:flex-row justify-center items-start gap-10">
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
              <h1 className="text-3xl font-semibold text-center text-primary md:text-left">
                Saeed Altout{" "}
                <span className="block text-sm font-normal text-gray-400">
                  @saeedaltoutsy
                </span>
              </h1>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 mt-10">
              {dataMe.map((item) => (
                <p
                  key={item.id}
                  className="flex items-center justify-start gap-2 text-base font-medium text-black"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  {item.title}: <span>{item.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full text-left">
          <h3 className="py-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            How Are Saeed Altout?
          </h3>
          <p className="text-base text-gray-400">
            Saeed Altout ayoung man dreamer, Study Bio Medcail In Damascus
            University, and work as front-end developer with more +4 years
            experience
          </p>
          <p className="mt-5 text-base text-gray-400">
            Saeed Altout ayoung man dreamer, Study Bio Medcail In Damascus
            University, and work as front-end developer with{" "}
            <span className="text-primary">some skills </span>
          </p>
          <div className="flex flex-col w-full max-w-4xl gap-12 mt-10 duration-300 ease-in-out ">
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
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
