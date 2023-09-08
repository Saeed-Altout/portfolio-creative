"use client";
import { BlackLayer, Navbar, Settings } from "@/components";
import { AreaProgress, Button, Container } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";
import { profile } from "@/assets/images";
import { flex, text } from "@/app/style";
import { dataMe } from "@/constants";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { Footer } from "@/layouts";

const About = () => {
  const { currentMode, setActiveMenu, currentTheme } = useStateContext();

  return (
    <div
      className={`${
        currentMode === "dark" ? "dark" : "light"
      } overflow-x-hidden relative`}
    >
      <header>
        <Navbar />
      </header>
      <Settings />
      <BlackLayer />
      <main
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <section className="relative py-40">
          <Container styles={`${flex.start} gap-10 flex-col`}>
            <div
              className={`${flex.start} flex-col w-full gap-10 duration-300 ease-in-out lg:flex-row`}
            >
              {/* Image and Title */}
              <div className={`${flex.start} flex-col gap-4`}>
                <div className="w-full overflow-hidden rounded-lg md:max-w-sm">
                  <Image
                    src={profile}
                    alt="Image Developer"
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2 className={text.h2} style={{ color: currentTheme }}>
                  Saeed Altout
                  <span className={`${text.p} block text-left`}>
                    @saeedaltoutpro
                  </span>
                </h2>
              </div>

              {/* Infos */}
              <div className={`${flex.start} flex-col gap-4`}>
                {dataMe.map((item, key) => (
                  <p
                    key={key}
                    className={`${flex.center} gap-2 text-base font-medium text-black dark:text-white`}
                  >
                    <span className={text.p}>{item.icon}</span>
                    {item.title}: <span>{item.text}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="w-full mt-10 text-left">
              <h2 className={text.h2} style={{ color: currentTheme }}>
                About me
              </h2>
              <p className={`${text.p} py-2 text-justify leading-10`}>
                <span
                  className="block py-2 text-2xl"
                  style={{
                    color: currentTheme,
                  }}
                >
                  English:
                </span>
                An enthusiastic and creative professional web developer, I have
                the ability to create and develop effective and attractive web
                applications. With in-depth experience in currentModern web
                technologies and development tools, I always strive to deliver
                the highest levels of performance and quality in every project I
                participate in. I have strong skills in... Html5, Css3,
                JavaScript, Typescript, Boostrap5, Tailwind Css, ReactJS,
                NextJS, Api, Redux, Framer Motion and more... I am familiar with
                the standards and best practices for designing and developing
                user experiences in websites. Thanks to my extensive knowledge
                of responsive techniques and user interface design, I can
                transform ideas and requirements into stunning user experiences
                suitable for all devices. I excel at working as part of a team
                as well as independently, as I can understand complex projects
                and implement them efficiently and effectively. I am passionate
                about continuous learning and following currentModern
                technological developments, as I seek to hone my skills and
                expand my knowledge to stay up to date on the latest web
                development trends. I look for challenging opportunities and new
                projects to work on, where I can provide innovation and
                innovative solutions to meet clients needs. If you are looking
                for a professional web developer who has the knowledge and
                skills to turn your vision into reality, I am here to help. Feel
                free to contact me to discuss potential job opportunities or
                projects. I look forward to collaborating with you to make a
                positive impact and deliver exceptional user experiences on the
                web.
              </p>
              <p
                className={`${text.p} font-cairo py-2 text-justify leading-10`}
                lang="ar"
                dir="rtl"
              >
                <span
                  className="block py-2 text-2xl"
                  style={{
                    color: currentTheme,
                  }}
                >
                  عربي:
                </span>
                مطور ويب محترف متحمس ومبدع، لدي القدرة على إنشاء وتطوير تطبيقات
                الويب الفعّالة والجذابة. مع خبرة متعمقة في تقنيات الويب الحديثة
                وأدوات التطوير، أسعى دومًا لتقديم أعلى مستويات الأداء والجودة في
                كل مشروع أشارك فيه. أتمتع بمهارات قوية في Html5 , Css3
                ,JavaScript, Typescript, Boostrap5 , Tailwind Css, ReactJS,
                NextJS, Api, Redux, Framer Motion and more... وأنا ملم بمعايير
                وأفضل الممارسات في مجال تصميم وتطوير تجارب المستخدم في مواقع
                الويب. بفضل معرفتي الواسعة بتقنيات الاستجابة وتصميم واجهة
                المستخدم السلسة، أستطيع تحويل الأفكار والمتطلبات إلى تجارب
                مُستخدم خلاّبة ومناسبة لجميع الأجهزة. أتميز بقدرتي على العمل
                كجزء من فريق وأيضًا بشكل مستقل، حيث يمكنني هضم المشاريع المعقدة
                وتنفيذها بكفاءة وفعالية. أنا متحمس للتعلم المستمر ومتابعة
                التطورات التكنولوجية الحديثة، حيث أسعى إلى تقنين مهاراتي وتوسيع
                معرفتي للبقاء على اطلاع دائم على آخر اتجاهات تطوير الويب. أبحث
                عن فرص تحدي ومشاريع جديدة للعمل عليها، حيث يمكنني تقديم الابتكار
                والحلول المبتكرة لتلبية احتياجات العملاء. إذا كنت تبحث عن مطور
                ويب محترف يمتلك المعرفة والمهارات اللازمة لتحويل رؤيتك إلى واقع
                ملموس، فأنا هنا للمساعدة. لا تتردد في الاتصال بي لمناقشة فرص
                العمل أو المشاريع المحتملة. أتطلع إلى التعاون معكم لإحداث تأثير
                إيجابي وتقديم تجارب استثنائية للمستخدم على الويب.
              </p>
              <AreaProgress />
            </div>

            <Button
              href="/#skills"
              text="Go Back Home"
              icon={<FiArrowUpRight />}
              styles={`mt-36 mx-auto bg-black text-white`}
            />
          </Container>
        </section>
      </main>
      <footer
        className="bg-white dark:bg-darker"
        onClick={() => {
          setActiveMenu(false);
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default About;
