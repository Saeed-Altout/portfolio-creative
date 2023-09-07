import { tag } from "@/app/style";
import { contact } from "@/assets/images";
import { Container, TitleSection } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";

const Contact = () => {
  const { currentTheme } = useStateContext();
  return (
    <section className={tag.section} id="contact">
      <Container>
        <TitleSection
          styles="text-center md:text-left"
          title="Contact Us & Get In Touch"
          subTitle="You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you."
        />
        <div className="flex flex-col items-center justify-center w-full gap-20 mt-20 lg:flex-row ">
          <div className="max-w-xl -order-1 lg:order-1">
            <Image
              alt="Contact Us"
              src={contact}
              className="object-contain w-full h-full"
            />
          </div>
          <form className="flex flex-col w-full max-w-4xl gap-12 p-5 mt-20 duration-300 ease-in-out shadow-lg rounded-xl md:p-10 md:order-1">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />
            <textarea
              rows={5}
              type="textarea"
              name="message"
              placeholder="Message"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />

            <input
              type="submit"
              value={"Submit"}
              className={`text-base hover:bg-opacity-90 w-full py-3 rounded-lg outline-none duration-300 ease-in-out cursor-pointer text-white font-medium`}
              style={{
                backgroundColor: currentTheme,
              }}
            />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
