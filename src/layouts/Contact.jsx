"use client";
import { tag } from "@/app/style";
import { contact } from "@/assets/images";
import { Container, TitleSection } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Contact = () => {
  const { currentTheme } = useStateContext();

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_y7cmfug
    // service_iekjdtw
    // ZoU7F7pOMJtRx8-ji
    emailjs
      .send(
        "service_iekjdtw",
        "template_y7cmfug",
        {
          from_name: form.name,
          to_name: "Saeed Altout",
          from_email: form.email,
          to_email: "saeedaltoutpro@gmail.com",
          message: form.message,
        },
        "ZoU7F7pOMJtRx8-ji"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will back to you as soon as possible. ");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-4xl gap-12 p-5 mt-20 duration-300 ease-in-out shadow-lg rounded-xl md:p-10 md:order-1"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none dark:bg-dark bg-gray-50 placeholder:text-black dark:placeholder:text-white"
            />

            <button
              type="submit"
              className={`text-base hover:bg-opacity-90 w-full py-3 rounded-lg outline-none duration-300 ease-in-out cursor-pointer text-white font-medium`}
              style={{
                backgroundColor: currentTheme,
              }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
