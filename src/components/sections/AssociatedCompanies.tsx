import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const companies = [
  {
    name: "MajorWerks",
    logo: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8f3964378c2dc37b31247f550df5582c~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=73a0142e&x-expires=1748365200&x-signature=QM6S763c4gLRMmoj4uBJQdUzxMk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my",
    description: "Innovative Software Solutions"
  },
  {
    name: "Haval",
    logo: "https://1000logos.net/wp-content/uploads/2020/10/Haval-Logo-2013.png",
    description: "Leading SUV Brand"
  },
  {
    name: "GWM",
    logo: "https://i0.wp.com/southernqueenstown.co.nz/wp-content/uploads/2023/05/GWM-Logo-Grid-Web-Res-PNG.png?ssl=1",
    description: "Global Automotive Excellence"
  },
  {
    name: "Sazgar",
    logo: "https://sazgarpk.s3.ap-southeast-1.amazonaws.com/2022/02/Ai-sazgar-logo-min.webp",
    description: "Automotive Innovation"
  },
  {
    name: "BAIC",
    logo: "https://brandlogos.net/wp-content/uploads/2022/09/baic_group-logo_brandlogos.net_8rlab.png",
    description: "Leading Automotive Group"
  }
];

const AssociatedCompanies = () => {
  const { theme } = useTheme();
  const styles = themes[theme];

  return (
    <section id="associated-companies" className={`${styles.background.primary} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.background.card} rounded-xl p-8 flex flex-col items-center justify-center ${styles.glow.primary} group hover:scale-105 transition-all duration-300 relative overflow-hidden`}
            >
              <div className="relative w-40 h-24 mb-6 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`w-full h-full object-contain ${
                    theme === 'dark' ? 'brightness-100 contrast-125' : 'brightness-90 contrast-100'
                  } transition-all duration-300 group-hover:scale-110`}
                />
              </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociatedCompanies;