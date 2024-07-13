import { services } from "@/constants";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

function Services() {
  return (
    <div>
    <div className="mt-14 flex flex-wrap gap-10 justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}

  
      
    </div>
    <br />
    <br />
    <br />
    <br /><br /><div className="flex justify-center mb-4">
      <motion.img
                src="/usa.png"
                alt="usa"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="w-40 h-40 object-cover rounded-full motion-img"
			
              />
              <motion.img
                src="/uzbekistan.png"
                alt="uzb"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="w-40 h-40 object-cover rounded-full motion-img"
			
              />
      </div></div>
  );
}

export default Services;
