import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { FaJava, FaAngular, FaBootstrap, FaCuttlefish, FaMicrosoft ,FaGithub,} from 'react-icons/fa'
import { SiSpringboot, SiJupyter, SiHibernate, SiDjango, SiMysql,SiPostman } from 'react-icons/si'

const categories = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 className="h-10 w-10 text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="h-10 w-10 text-blue-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="h-10 w-10 text-purple-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="h-10 w-10 text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="h-10 w-10 text-cyan-400" /> },
    { name: 'Angular', icon: <FaAngular className="h-10 w-10 text-red-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-10 w-10 text-teal-400" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="h-10 w-10 text-green-500" /> },
    { name: 'Java/JavaEE', icon: <FaJava className="h-10 w-10 text-red-600" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="h-10 w-10 text-green-600" /> },
    { name: 'JDBC', icon: <SiJupyter className="h-10 w-10 text-orange-400" /> },
    { name: 'Hibernate', icon: <SiHibernate className="h-10 w-10 text-gray-500" /> },
    { name: 'Django', icon: <SiDjango className="h-10 w-10 text-green-700" /> },
  ],
  Database: [
    { name: 'MongoDB', icon: <SiMongodb className="h-10 w-10 text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql className="h-10 w-10 text-blue-700" /> },
  ],
  Others: [
    { name: 'Git', icon: <FaGitAlt className="h-10 w-10 text-orange-600" /> },
    { name: 'Figma', icon: <FaFigma className="h-10 w-10 text-pink-500" /> },
    { name: 'C/C++', icon: <FaCuttlefish className="h-10 w-10 text-gray-500" /> },
    { name: 'MS Office', icon: <FaMicrosoft className="h-10 w-10 text-blue-600" /> },
    { name: 'GitHub', icon: <FaGithub className="h-10 w-10 text-black dark:text-white" /> },
    { name: 'Postman', icon: <SiPostman className="h-10 w-10 text-orange-500" /> },
  ],
};

const hoverColors = [
  'hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500',
  'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
  'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
  'hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500',
]

const Skills = ({ setActiveSection }) => {
  useEffect(() => {
    const skillsSection = document.getElementById('skills')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('skills')
        }
      },
      { threshold: 0.5 }
    )
    if (skillsSection) observer.observe(skillsSection)
    return () => { if (skillsSection) observer.unobserve(skillsSection) }
  }, [setActiveSection])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-indigo-500 dark:text-indigo-400">02.</span>My Tech-Stack
          </h2>
          <div className="w-24 h-1 bg-indigo-500 dark:bg-indigo-400 mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center sm:text-left">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 rounded-xl bg-white dark:bg-gray-700 shadow-lg transition transform hover:scale-105 ${hoverColors[(catIndex + index) % hoverColors.length]} hover:text-white`}
                  >
                    <div className="mr-4 text-3xl">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills























// import { motion } from 'framer-motion'
// import { useEffect } from 'react'
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
// import { SiMongodb, SiTailwindcss, SiSpringboot, SiHibernate, SiDjango, SiMysql } from 'react-icons/si';
// import { FaJava, FaAngular, FaCuttlefish, FaMicrosoft,FaBootstrap } from 'react-icons/fa';

// const skills = {
//   frontend: [
//     { name: 'HTML', icon: <FaHtml5 className="h-6 w-6 text-orange-600 mr-2" /> },
//     { name: 'CSS', icon: <FaCss3Alt className="h-6 w-6 text-blue-600 mr-2" /> },
//     { name: 'Bootstrap', icon: <FaBootstrap className="h-6 w-6 text-purple-600 mr-2" /> },
//     { name: 'JavaScript', icon: <FaJsSquare className="h-6 w-6 text-yellow-500 mr-2" /> },
//     { name: 'React', icon: <FaReact className="h-6 w-6 text-cyan-500 mr-2" /> },
//     { name: 'Angular', icon: <FaAngular className="h-6 w-6 text-red-600 mr-2" /> },
//     { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-6 w-6 text-sky-400 mr-2" /> },
//   ],
//   backend: [
//     { name: 'Node.js', icon: <FaNodeJs className="h-6 w-6 text-green-600 mr-2" /> },
//     { name: 'Java/JavaEE', icon: <FaJava className="h-6 w-6 text-orange-700 mr-2" /> },
//     { name: 'Spring Boot', icon: <SiSpringboot className="h-6 w-6 text-green-500 mr-2" /> },
//     { name: 'Django', icon: <SiDjango className="h-6 w-6 text-green-700 mr-2" /> },
//     { name: 'Git', icon: <FaGitAlt className="h-6 w-6 text-orange-500 mr-2" /> },
//     { name: 'Figma', icon: <FaFigma className="h-6 w-6 text-pink-500 mr-2" /> },
//   ],
//   database: [
//     { name: 'MongoDB', icon: <SiMongodb className="h-6 w-6 text-green-700 mr-2" /> },
//     { name: 'MySQL', icon: <SiMysql className="h-6 w-6 text-blue-500 mr-2" /> },
//     { name: 'Hibernate', icon: <SiHibernate className="h-6 w-6 text-yellow-700 mr-2" /> },
//   ],
//   others: [
//     { name: 'C', icon: <FaCuttlefish className="h-6 w-6 text-blue-700 mr-2" /> },
//     { name: 'C++', icon: <FaCuttlefish className="h-6 w-6 text-blue-900 mr-2" /> },
//     { name: 'MS Office', icon: <FaMicrosoft className="h-6 w-6 text-blue-600 mr-2" /> },
//   ],
// };

// const Skills = ({ setActiveSection }) => {
//   useEffect(() => {
//     const skillsSection = document.getElementById('skills');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setActiveSection('skills');
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (skillsSection) {
//       observer.observe(skillsSection);
//     }

//     return () => {
//       if (skillsSection) {
//         observer.unobserve(skillsSection);
//       }
//     };
//   }, [setActiveSection]);

//   return (
//     <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             <span className="text-blue-500 dark:text-blue-400">02.</span> Skills
//           </h2>
//           <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mb-8"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-12">
//   {/* Row 1: Frontend + Backend */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//     {/* Frontend */}
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="space-y-8"
//     >
//       <div>
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Frontend</h3>
//         <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
//           {skills.frontend.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-blue-100 dark:hover:bg-blue-700 cursor-pointer h-40 w-24 justify-center"
//             >
//               {skill.icon}
//               <span className="text-sm text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>

//     {/* Backend */}
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="space-y-8"
//     >
//       <div>
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Backend</h3>
//         <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
//           {skills.backend.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-green-100 dark:hover:bg-green-700 cursor-pointer h-40 w-24 justify-center"
//             >
//               {skill.icon}
//               <span className="text-sm text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   </div>

//   {/* Row 2: Database + Others */}
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//     {/* Database */}
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="space-y-8"
//     >
//       <div>
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Database</h3>
//         <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
//           {skills.database.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-yellow-100 dark:hover:bg-yellow-700 cursor-pointer h-40 w-24 justify-center"
//             >
//               {skill.icon}
//               <span className="text-sm text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>

//     {/* Others */}
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="space-y-8"
//     >
//       <div>
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Others</h3>
//         <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
//           {skills.others.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:bg-purple-100 dark:hover:bg-purple-700 cursor-pointer h-40 w-24 justify-center"
//             >
//               {skill.icon}
//               <span className="text-sm text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   </div>
// </div>


//       </div>
//     </section>
//   );
// };

// export default Skills;
