import Image from "next/image";
import { clientsComment } from "@/constants";

const Clients = () => {
  return (
    <section id="clients">
      <div className="container">
        {/* Title Section */}

        <div className="max-w-4xl text-center lg:text-left">
          <h2 className="text-4xl font-bold capitalize text-primary md:text-5xl">
            Happy Clients
          </h2>
          <p>
            Next, you will find some imaginary customers who dealt with us by
            requesting some applications. The treatment was very nice on my
            part, and they also expressed the speed of response and the accuracy
            of the work and deadlines (thank you 😘). They also enjoyed the
            beauty of the codes and their organization and cleanliness. They
            expressed their thanks and said that they will deal with me in the
            future. Next projects.
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-16 mx-auto mt-20 w-fit md:grid-cols-2 lg:grid-cols-3">
          {clientsComment.map((client, key) => (
            <div
              key={key}
              className="relative flex flex-col items-center justify-center gap-5 p-5 text-center transition bg-white shadow-lg"
            >
              <div className="absolute -top-8 left-[50%] translate-x-[-50%] w-14 h-14 overflow-hidden rounded-full shadow-xl">
                <Image src={client.img} alt="Img Client" width={100} />
              </div>

              <span className="block mr-auto text-5xl text-gray-300 w-fit">
                ،،
              </span>
              <p>{client.comment}</p>
              <span className="block ml-auto text-5xl text-gray-300 rotate-180 w-fit">
                ،،
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
