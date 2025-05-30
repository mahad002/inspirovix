import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const companies = [
  {
    name: "MajorWerks",
    logo: "https://majorwerks.s3.us-east-2.amazonaws.com/Majorwerks+Logo.jpg",
    description: "Innovative Software Solutions"
  },
  {
    name: "Exec Chauffeur Group",
    logo: "https://i0.wp.com/execchauffeurgroup.co.uk/wp-content/uploads/2025/05/Exec-Chauffeur.png?fit=243%2C46&ssl=1",
    description: "Executive Car Services"
  },
  {
    name: "Haval",
    logo: "https://1000logos.net/wp-content/uploads/2020/10/Haval-Logo-2013.png",
    description: "Global Automotive Excellence"
  },
  {
    name: "GWM",
    logo: "https://i0.wp.com/southernqueenstown.co.nz/wp-content/uploads/2023/05/GWM-Logo-Grid-Web-Res-PNG.png?ssl=1",
    description: "Automotive Innovation"
  },
  {
    name: "Sazgar",
    logo: "https://sazgarpk.s3.ap-southeast-1.amazonaws.com/2022/02/Ai-sazgar-logo-min.webp",
    description: "Leading Automotive Group"
  },
  {
    name: "BAIC",
    logo: "https://brandlogos.net/wp-content/uploads/2022/09/baic_group-logo_brandlogos.net_8rlab.png",
    description: "Leading Automotive Group"
  },
  {
    name: "Unlock Real Estate",
    logo: "https://inspirovix.s3.us-east-2.amazonaws.com/unlock+real+estate+logo.png",
    description: "Custom CRM Solutions"
  },
  {
    name: "AutoShield Insurance",
    logo: "https://cdn-icons-png.flaticon.com/512/1048/1048955.png",
    description: "Comprehensive Auto Insurance Solutions"
  }
];

const AssociatedCompanies = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <section id="associated-companies" className={`${styles.background.primary} py-20 overflow-hidden w-full`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
            Associated Companies
          </h2>
          <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
            Trusted by industry leaders in automotive innovation and technology.
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className={`${styles.background.card} rounded-xl p-8 flex flex-col items-center justify-center ${styles.glow.primary} group hover:scale-105 transition-all duration-300 relative overflow-hidden min-w-[200px]`}
              >
                <motion.div
                  className={`relative w-40 h-24 mb-6 flex items-center justify-center ${
                    company.name === "Exec Chauffeur Group" ? "bg-black rounded-lg p-4" :
                    company.name === "Sazgar" ? "bg-white rounded-lg p-4" : ""
                  }`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    },
                  }}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110`}
                  />
                </motion.div>
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-2 text-center`}>
                  {company.name}
                </h3>
                <p className={`text-sm ${styles.text.secondary} text-center transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                  {company.description}
                </p>
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' 
                    ? 'from-purple-900/20 to-transparent' 
                    : 'from-purple-100/30 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
            
            {/* Duplicate set of companies for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className={`${styles.background.card} rounded-xl p-8 flex flex-col items-center justify-center ${styles.glow.primary} group hover:scale-105 transition-all duration-300 relative overflow-hidden min-w-[200px]`}
              >
                <motion.div
                  className={`relative w-40 h-24 mb-6 flex items-center justify-center ${
                    company.name === "Exec Chauffeur Group" ? "bg-black rounded-lg p-4" :
                    company.name === "Sazgar" ? "bg-white rounded-lg p-4" : ""
                  }`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    },
                  }}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110`}
                  />
                </motion.div>
                <h3 className={`text-lg font-bold ${styles.text.primary} mb-2 text-center`}>
                  {company.name}
                </h3>
                <p className={`text-sm ${styles.text.secondary} text-center transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                  {company.description}
                </p>
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' 
                    ? 'from-purple-900/20 to-transparent' 
                    : 'from-purple-100/30 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AssociatedCompanies;