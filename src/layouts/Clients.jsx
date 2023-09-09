import { flex, tag, text } from "@/app/style";
import { Container, Grid, TitleSection } from "@/components";
import { clientsComment } from "@/constants";
import Image from "next/image";
// import ReactCardCarousel from "react-card-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const Clients = () => {
  const styleCard = {
    height: "200px",
    width: "200px",
    paddingTop: "80px",
    textAlign: "center",
    background: "#52C0F5",
    color: "#FFF",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
  };
  return (
    <section className={tag.section} id="clients">
      <Container>
        <TitleSection
          title="Happy Clients"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
          eiusmod."
        />
        <div className="relative max-w-5xl mx-auto mt-20">
          <Carousel
            autoPlay
            infiniteLoop
            emulateTouch={true}
            stopOnHover={true}
            showArrows={false}
            showStatus={false}
          >
            {clientsComment.map((client) => (
              <div
                key={client.id}
                className={`${flex.center} relative flex-col gap-5 sm:max-w-xl p-10 text-center duration-300 dark:bg-dark ease-in-out bg-white border-2 rounded-lg border-gray-50 hover:border-gray-100 dark:border-darker dark:hover:border-dark mx-auto mt-10`}
              >
                <div className="absolute -top-8 left-[50%] translate-x-[-50%] w-14 h-14 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src={client.img}
                    alt="Img Client"
                    className="object-cover w-full h-full"
                  />
                </div>

                <span className="block mr-auto text-5xl text-gray-300 w-fit">
                  ،،
                </span>
                <p className={text.p}>{client.comment}</p>
                <span className="block ml-auto text-5xl text-gray-300 rotate-180 w-fit">
                  ،،
                </span>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
