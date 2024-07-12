import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Kompanyamiz</p>
        <h2 className={"sectionHeadText text-white"}>Haqida.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Green Card Lottery kompaniyasi 2015 yilda ochilgan bulib ofisimiz Sharq Club o&lsquo;ng tarafida joylashgan. Shu yilga qadar kompanyamizda 2000+ yurtdoshlarimizga green card uynash, kansultatsya va sizning dokumentlaringiz xamma kompanyada ajralib turuvchi qilib berish va boshqa xizmatlarda profesiyonal xizmat taqdim qiladi.
          <br className="sm:block hidden" />
         Dokumentlar tashlanayotgan emailimiz !
        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:davlatmusinov79@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            davlatmusinov79@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="mailto:davlatmusinov79@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Bog&lsquo;lanish
            </div>
            <div className="letters">
              <span>B</span>
              <span>o</span>
              <span>g&lsquo;</span>
              <span>l</span>
              <span>a</span>
              <span>n</span>
              <span>i</span>
              <span>s</span>
              <span>h</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
