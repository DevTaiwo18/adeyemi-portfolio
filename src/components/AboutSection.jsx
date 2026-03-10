import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { aboutData } from "../data/siteData";
import ProfileImg from "../assets/Profile three.jpg";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-neutral-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — photo + text */}
          <div>
            <motion.div
              className="mb-8 flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img
                  src={ProfileImg}
                  alt="Adeyemi Taiwo"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-neutral-800"
                />
                <div className="absolute -bottom-2 -right-2 w-40 h-40 md:w-48 md:h-48 rounded-2xl border-2 border-amber-500/30 -z-10" />
              </div>
            </motion.div>

            <p className="text-amber-500 font-medium mb-2 tracking-wide">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50 mb-6">
              Turning ideas into{" "}
              <span className="text-amber-500">reliable systems</span>
            </h2>

            <div className="space-y-4">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i} className="text-neutral-400 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right — interests */}
          <div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-neutral-50 font-semibold text-xl mb-6">
                What I'm focused on
              </h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.interests.map((interest, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="px-4 py-2 bg-neutral-800 text-neutral-300 text-sm font-medium rounded-lg border border-neutral-700 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-amber-500">2+</p>
                    <p className="text-neutral-500 text-sm">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-amber-500">60+</p>
                    <p className="text-neutral-500 text-sm">Projects Built</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
