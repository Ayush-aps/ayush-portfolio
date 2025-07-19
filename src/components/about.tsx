"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Briefcase, Award, Code } from "lucide-react";
import { SkillBar } from "@/components/SkillBar";

// ---------- Replace the imported `skills` import with your existing one ----------
import { skills } from "@/data";

// We’ll inline your experiences rather than import them:
const experiences = [
  {
    id: "connexion-club",
    company: "IIIT Sri City – Connexion Club",
    position: "Core Member, Cloud Computing Wing",
    location: "Sri City, Andhra Pradesh",
    startDate: "Oct 2024",
    endDate: "Present",
    description: [
      "Organized cloud workshops and hands‑on sessions for 50+ members.",
      "Designed and delivered tutorials on AWS, Docker, and Kubernetes.",
      "Collaborated with industry mentors to host cloud hackathons.",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "epoch-club",
    company: "IIIT Sri City – EPOCH Club",
    position: "Core Member, Web Development Domain",
    location: "Sri City, Andhra Pradesh",
    startDate: "Oct 2024",
    endDate: "Present",
    description: [
      "Built and maintained the club’s event site using React and Tailwind CSS.",
      "Mentored juniors in Next.js and REST API integration.",
      "Implemented CI pipelines to automate deployment on GitHub Actions.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "GitHub Actions"],
  },
  // {
  //   id: "nirvana-club",
  //   company: "IIIT Sri City – Nirvana Club",
  //   position: "Core Member, Research Domain",
  //   location: "Sri City, Andhra Pradesh",
  //   startDate: "Oct 2024",
  //   endDate: "Present",
  //   description: [
  //     "Conducted literature reviews on AI and ML in web applications.",
  //     "Published research briefs on GitHub and presented at college symposiums.",
  //   ],
  //   technologies: ["Python", "ML Concepts", "Git"],
  // },
];

// Education & Certifications will remain in the JSX below

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// function SkillBar({ skill }: { skill: { name: string; level: number; category: string } }) {
//   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
//   return (
//     <motion.div
//       ref={ref}
//       className="space-y-2"
//       initial={{ opacity: 0, x: -50 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="flex justify-between items-center">
//         <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
//         <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
//       </div>
//       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//         <motion.div
//           className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${skill.level}%` } : {}}
//           transition={{ duration: 1, delay: 0.2 }}
//         />
//       </div>
//     </motion.div>
//   );
// }

export function AboutSkills() {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: typeof experiences[0];
  index: number;
}) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      className="relative pl-8 pb-8 border-l-2 border-gray-300 dark:border-gray-600 last:border-l-0 last:pb-0"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900" />
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.position}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{experience.location}</p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
            {experience.startDate} – {experience.endDate}
          </div>
        </div>
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, idx) => (
            <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
              • {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    ;(acc[skill.category] ||= []).push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know more about my background, skills, and experience in web development.
            </p>
          </motion.div>

          {/* Bio + Skills */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  I’m a full-stack developer who cut my teeth building production‑grade web applications at IIIT Sri City, where I led both team projects and independent capstones. My day‑to‑day mixes React & Next.js on the front end with Node.js/Express APIs and MongoDB/PostgreSQL on the back end. I’m equally comfortable architecting database schemas as I am crafting pixel‑perfect, accessible UI components.
</p>
<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  Over the past few years I’ve shipped 20+ real‑world projects—from e‑commerce platforms and task‑management dashboards to immersive Three.js backgrounds and data visualizations. I love pairing data‑driven problem‑solving with creative animations that surprise and delight users. Continuous learning is my north star: I stay sharp by exploring emerging tech like server‑side components, WebGL shaders, and cloud‑native deployments on AWS and Docker.
</p>
<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
  Beyond code, I mentor juniors, write technical blog posts, and contribute to open‑source libraries. When I’m not debugging production pipelines, you’ll find me sketching UI ideas in Figma, experimenting with AI‑powered tooling, or sharing what I’ve learned at local meetups. Building resilient, maintainable systems that put people first is what drives me—and I can’t wait to bring that passion to our next collaboration.
</p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white capitalize text-center">
                    {category.replace("_", " ")} Skills
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-4 justify-items-center">
                    {categorySkills.map((skill, skillIndex) => (
                      <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Experience
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                My professional journey and key achievements
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={exp.id} experience={exp} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">IIIT Sri City</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2023 – Present</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Higher Secondary (Class 12) – Science (CS)
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">Academic Global School</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">May 2023</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    The Complete Full-Stack Web Development Bootcamp
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/image/UC-f8364c89-cb13-4fdb-89cc-bb80596c9026.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      View Certificate
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2024</p>
                </div>
                {/* <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    AWS Certified Developer – Associate
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a
                      href="https://www.yourcertlink.com/aws-developer-associate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      View Credential
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                </div> */}
                {/* <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    React Developer Certification
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    <a
                      href="https://www.yourcertlink.com/react-developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      View Credential
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2022</p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
