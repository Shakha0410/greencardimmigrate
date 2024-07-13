import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";

function Contact() {
  const form = useRef();
  const [hasChildren, setHasChildren] = useState(false);
  const [children, setChildren] = useState([]);
  const [newChild, setNewChild] = useState('');
  const [loading, setLoading] = useState(false);

  const handleHasChildrenChange = (e) => {
    setHasChildren(e.target.value === 'yes');
  };

  const handleAddChild = () => {
    if (children.length < 5) {
      setChildren([...children, newChild]);
      setNewChild('');
    }
  };

  const handleRemoveChild = (index) => {
    setChildren(children.filter((child, i) => i!== index));
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dz9dtyk",
        "template_5nmlfrb",
        form.current,
        "72_aRPiAFjslzE0EN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          alert("Endi rasmingizni telegramdan tugri formatda tashlang!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>Formani to&lsquo;lovdan so&lsquo;ng to&lsquo;ldirasiz</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Forma.</h3>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Ismingiz (passportda kursatilganday)
          </span>
          <input
            type="text"
            name="user_name"
            required
            placeholder="ismingiz"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Familyangiz (passportda kursatilganday)
          </span>
          <input
            type="text"
            name="user_surname"
            required
            placeholder="Familyangiz?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Jinzingiz
          </span>
          <input
            type="text"
            name="user_sex"
            required
            placeholder="Ayol yoki Erkak"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Asosiy telefon raqamingiz
          </span>
          <input
            type="text"
            name="user_number"
            required
            placeholder="Masalan: +998 90 999-99-99"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
          Qoshimcha telefon raqami
          </span>
          <input
            type="text"
            name="user_numbertwo"
            required
            placeholder="Masalan: +998 97 777-77-77"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Tug&lsquo;ilgan sana
          </span>
          <input
            type="text"
            name="user_date"
            required
            placeholder="kun/oy/yil"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Tug&lsquo;ilgan shahar
          </span>
          <input
            type="text"
            name="user_city"
            required
            placeholder="Masalan: Samarqand"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Uy joy address
          </span>
          <input
            type="text"
            name="user_address"
            required
            placeholder="Masalan: Mirzo Ulug'bek 96"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            zipcode
          </span>
          <input
            type="text"
            name="user_zipcode"
            required
            placeholder="Masalan: 140100"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Oylaviy Status 
          </span>
          <input
            type="text"
            name="user_family"
            required
            placeholder="Masalan: Bo'ydoq, Oylaviy, Ajrashgan"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
           Turmush o&lsquo;rtog&lsquo;ingiz ism sharifi 
          </span>
          <input
            type="text"
            name="user_wife"
            required
            placeholder="Masalan: Aliyeva Kamola Abdulayeva"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <div className="flex flex-col">
      <label>
        <span className="text-ctnPrimaryDark font-medium mb-4"> Bolalaringiz bormi?</span> <br />
       
        <br />
        <input
          type="radio"
          value="yes"
          name="user_children"
          checked={hasChildren}
          onChange={handleHasChildrenChange}
        />
        <span className="text-ctnPrimaryDark font-medium mb-4">Xa</span> <br /> <br />
        
        <input
          type="radio"
          value="no"
          name="user_children"
          checked={!hasChildren}
          onChange={handleHasChildrenChange}
        />
        <span className="text-ctnPrimaryDark font-medium mb-4">Yuq</span>
      </label>

      {hasChildren && (
        <div className="mt-4">
          {children.map((child, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={child}
                name="user_children_number"
                onChange={(e) => setChildren(children.map((c, i) => (i === index? e.target.value : c)))}
                className="w-full px-4 py-2 text-gray-700"
              />
              <button
                className="ml-2 text-red-500 hover:text-red-700"
                onClick={() => handleRemoveChild(index)}
              >
                x
              </button>
            </div>
          ))}

          <div className="flex items-center mb-2">
            <input
              type="text"
              value={newChild}
              name="new_user_children_number"
              onChange={(e) => setNewChild(e.target.value)}
              className="w-full px-4 py-2 text-gray-700"
              placeholder="Add another child"
            />
            <button
              className="ml-2 text-green-500 hover:text-green-700"
              onClick={handleAddChild}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Bilim darajangiz 
          </span>
          <input
            type="text"
            name="user_degree"
            required
            placeholder="Maktab, Bakalavr, Magistratura"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark  font-medium mb-4">
           Emailingiz 
          </span>
          <input
            type="email"
            name="user_email"
            required
            placeholder="ishonchli email yozilsin"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>        
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark  font-medium mb-4">
            Komentarya (To&lsquo;lov haqida, qushimcha informatsya, )
          </span>
          <textarea
            rows={4}
            name="user_message"
            required
            placeholder="Masalan: To'lovi nechi pul?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lgh-fit placeholder:break-words break-words"
          />
        </label>


        <button
          type="submit"
          value="send"
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
        >
          {loading? "Junatayapti..." : "Junatmoq"}
        </button>
        <a href="https://t.me/Greencardstudio"> <button
          className="bg-sky-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-sky-500 hover:shadow-sky-500 hover:bg-sky-600 transition-all duration-800 ease-in"
        >
          Telegramga rasmlar tashlanadi
        </button></a> <span>Formani junatganingizdan keyin rasmlarni tashlaysiz</span>
       
        <p>Formaga yaxshilab etibor bilan to&lsquo;ldiring!</p>
      </form>
    </motion.div>
  );
}

export default Contact;