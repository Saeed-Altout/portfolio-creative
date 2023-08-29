import { TitleSection, Wrapper } from "@/components";
import { clientsComment } from "@/constants";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="relative py-40" id="testmoinals">
      <Wrapper styles="flex flex-col justify-center items-center gap-10">
        <TitleSection
          styles="text-center"
          title="Happy Clients"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod."
        />

        <div className="flex flex-wrap items-center justify-center gap-10 mt-20 ">
          {clientsComment.map((client) => (
            <div
              key={client.id}
              className="relative max-w-sm p-10 text-center duration-300 ease-in-out bg-white border-2 rounded-lg border-gray-50 lg:max-w-sm hover:border-gray-100 "
            >
              <div className="absolute -top-8 left-[50%] translate-x-[-50%] w-14 h-14 overflow-auto rounded-full shadow-lg">
                <Image
                  src={client.img}
                  alt="Img Client"
                  className="object-cover w-full h-full"
                />
              </div>

              <span className="block mr-auto text-5xl text-gray-300 w-fit">
                ،،
              </span>
              <p className="py-2 text-base leading-8 tracking-wide">
                {client.comment}
              </p>
              <span className="block ml-auto text-5xl text-gray-300 rotate-180 w-fit">
                ،،
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Clients;
