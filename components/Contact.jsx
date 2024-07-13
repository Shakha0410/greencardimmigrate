import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();
  const [hasChildren, setHasChildren] = useState(false);
  const [children, setChildren] = useState([]);
  const [newChild, setNewChild] = useState('');

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

  const [form, setForm] = useState({
    name: "",
    surname:"",
    sex: "",
    wife: "",
    children: "",
    hasChildren: "",
    date: "",
    city: "",
    number: "",
    numbertwo: "",
    address: "",
    zipcode: "",
    email: "",
    degree: "",
    family: "",
    message: "",
    
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setForm({...form, photo: e.target.files[0] });
  };
  const handlePassportChange = (e) => {
    setForm({...form, passport: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(); // create a new FormData instance
    Object.keys(form).forEach((key) => {
      if (key === 'children') {
        // If children is an array, join them as a string before appending
        formData.append(key, children.join(', '));
      } else {
        formData.append(key, form[key]);
      }
    });


    formData.append("from_name", form.name);
    formData.append("to_name", "Green Card Lottery");
    formData.append("from_email", form.email);
    formData.append("to_email", "shakhzodumarov0410@gmail.com");
    formData.append("message", form.message);
    formData.append("surname", form.surname);
    formData.append("address", form.address);
    formData.append("zipcode", form.zipcode);
    formData.append("family", form.family);
    formData.append("date", form.date);
    formData.append("degree", form.degree);
    formData.append("children", form.children);
    formData.append("hasChildren", form.hasChildren);
    formData.append("city", form.city);
    formData.append("sex", form.sex);
    formData.append("wife", form.wife);
    formData.append("number", form.number);
    formData.append("numbertwo", form.numbertwo);

    emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
     .then(
        () => {
          setLoading(false);
          alert("Formani tuldirganingiz uchun rahmat.");

          setForm({
            name: "",
            surname: "",
            date: "",
            city: "",
            sex: "",
            number: "",
            numbertwo: "",
            wife: "",
            children: "",
            hasChildren: "",
            address: "",
            zipcode: "",
            email: "",
            degree: "",
            family: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
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
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8"
        encType="multipart/form-data" // add enctype to the form
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Ismingiz (passportda kursatilganday)
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
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
            name="surname"
            value={form.surname}
            onChange={handleChange}
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
            name="sex"
            value={form.sex}
            onChange={handleChange}
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
            name="number"
            value={form.number}
            onChange={handleChange}
            required
            placeholder="Masalan: +998 90 999-99-99"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
          Qo'shimcha telefon raqami
          </span>
          <input
            type="text"
            name="numbertwo"
            value={form.numbertwo}
            onChange={handleChange}
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
            name="date"
            value={form.date}
            onChange={handleChange}
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
            name="city"
            value={form.city}
            onChange={handleChange}
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
            name="address"
            value={form.address}
            onChange={handleChange}
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
            name="zipcode"
            value={form.zipcode}
            onChange={handleChange}
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
            name="family"
            value={form.family}
            onChange={handleChange}
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
            name="wife"
            value={form.wife}
            onChange={handleChange}
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
          checked={hasChildren}
          onChange={handleHasChildrenChange}
        />
        <span className="text-ctnPrimaryDark font-medium mb-4">Xa</span> <br /> <br />
        
        <input
          type="radio"
          value="no"
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
            name="degree"
            value={form.degree}
            onChange={handleChange}
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
            name="email"
            value={form.email}
            onChange={handleChange}
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
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Masalan: To'lovi nechi pul?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lgh-fit placeholder:break-words break-words"
          />
        </label>


        <button
          type="submit"
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
        >
          {loading? "Junatayapti..." : "Junatmoq"}
        </button>
        <p>Formaga yaxshilab etibor bilan to&lsquo;ldiring!</p>
      </form>
    </motion.div>
  );
}

export default Contact;