import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
           <span className="text-red">EXPERIENCE</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 md:justify-between"> With 8+ years of experience in FinTech and software development, I've delivered significant improvements in user experience and system optimization <br></br>across global firms at JP Morgan Chase and Credit Suisse.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
{/*
<motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">Research Assistant</p>
              <p className="font-playfair font-semibold text-xl mt-3">
              University of Colorado Denver
              </p>
              <p className="font-playfair font-semibold text-l mt-3">
              Nov 2025 - Present
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Developed an autonomous racing system on AWS DeepRacer, optimizing high-speed performance using reinforcement
learning and real-time sensor fusion from LiDAR. Implemented SLAM for dynamic obstacle avoidance in both simulator and on-vehicle testing environment.
          </p>
          
        </motion.div>
*/}
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">JP Morgan Chase</p>
              <p className="font-playfair font-semibold text-xl mt-3">
                Software Development Engineer
              </p>
              <p className="font-playfair font-semibold text-l mt-3">
                Mar 2023 - Aug 2025
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <p>'Client Experience Award' for onboarding two major investors.</p>
            <p>Most Promising Newcomer Award</p>
            <p>Ranked Global #2 in JPMC AWS DeepRacer Hackathon</p>
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">Credit Suisse</p>
              <p className="font-playfair font-semibold text-xl mt-3">
               Software Engineer
              </p>
              <p className="font-playfair font-semibold text-l mt-3">
               Jul 2017 - Mar 2023
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <p>Joined as Technology Analyst in 2017, promoted to Software Engineer in 2019</p>
            <p>Recognized for contributions to performing data migration of golden source databases.</p>
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
      </div>
    </section>
  );
};

export default MySkills;
