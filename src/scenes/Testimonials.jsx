import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          MENTORSHIP & COMMUNITY
        </p>
        <LineGradient width="w-1/3" />
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
             before:content-person1 before:scale-[0.07] before:inline-block before:translate-x-[-35%] 
     before:inline-block before:translate-x-[-15%]
    before:origin-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-3xl">Public Speaker</p>
          <p className="font-playfair text-center text-2xl">Google DevFests</p>
          <br></br>
          <p className="text-right text-l"><i>Dec 2024</i></p>
          <p className="text-center text-l">
            Conducted problem solving workshops for 200+ students in tech.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
             before:content-person2 before:inline-block before:translate-x-[-15%] 
     before:translate-y-[-7%]
    before:origin-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-3xl">Mentor AnitaB.org</p>
          
          <br></br>
          <p className="text-right text-l"><i>Jan - Mar 2025</i></p>
           <p className="text-center text-l">Delivered 1:1 coaching to 5+ girls in Design Thinking.</p>
           
          
        </motion.div>



        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
           before:content-person3 before:inline-block before:translate-x-[-15%] 
    before:scale-50 before:translate-y-[-7%]
    before:origin-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-center text-3xl">Public Speaker</p>
          <p className="font-playfair text-center text-2xl">Mumbai Women Coders</p>
          <br></br>
          <p className="text-right text-l"><i>Jul 2024</i></p>
          <p className="text-center text-l">
           Conducted Design Thinking workshops for 100+ participants.</p>
        </motion.div>

      
      </div>
    </section>
  );
};

export default Testimonials;
