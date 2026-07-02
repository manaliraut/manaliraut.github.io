import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Projects = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="projects" className="pt-10 pb-24">
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
           <span className="text-red">PROJECTS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I build end-to-end ML systems — from data pipelines and NLP models to
            published security research. Below are selected projects from my
            graduate work and independent exploration.
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

      {/* PROJECTS */}
      <div className="md:flex md:justify-between mt-16 gap-32">

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
              <p className="font-playfair font-semibold text-3xl">AI News Aggregator</p>
              <p className="font-playfair font-semibold text-xl mt-3">
              <a
                href="https://github.com/manaliraut"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow transition duration-500"
              >
                View on GitHub
              </a>
              </p>
              <p className="font-playfair font-semibold text-l mt-3">
                Tech stack: Python, Docker, PostgreSQL, OpenAI API, RSS
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
      Architected dockerized news aggregation pipeline with PostgreSQL using RSS feeds and YouTube applying the OpenAI API for AI-driven summarization, processing hundreds of articles and video transcripts daily, improving information accessibility and reducing content digestion time by over 2x.
      </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
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
              <p className="font-playfair font-semibold text-3xl">BiLSTM NLP</p>
              <p className="font-playfair font-semibold text-xl mt-3">
                <a
                  href="https://github.com/manaliraut/MeCfsBiology"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow transition duration-500"
                >
                  View on GitHub
                </a>
              </p>
              <p className="font-playfair font-semibold text-l mt-3">
                Tech stack: Python, BiLSTM, TensorFlow/Keras, clinical NLP
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Conducted comprehensive exploratory data analysis (EDA) on clinical text datasets. Built a clinical NLP solution using BiLSTM to capture bidirectional context in medical notes, achieving high classification accuracy and demonstrating robust handling of long-range dependencies in clinical language.
      
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
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
              <p className="font-playfair font-semibold text-3xl">Secure Gateway Defender</p>
              <p className="font-playfair font-semibold text-xl mt-3">
                <a
                  href="https://doi.org/10.1109/ICCMMC.2017.8282717"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow transition duration-500"
                >
                  View on IEEE Xplore
                </a>
              </p>
              <p className="font-playfair font-semibold text-l mt-3">
               Tech stack: Python, rule-based classification, network security
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Developed a real-time packet classification system using rule-based traffic analysis, enabling early threat detection with sub-millisecond latency on high-volume enterprise network traffic. IEEE Publication with 1 academic citation and 200+ views, demonstrating systems thinking.
      </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
