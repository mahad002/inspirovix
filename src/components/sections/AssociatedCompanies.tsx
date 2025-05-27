import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

const companies = [
  {
    name: "MajorWerks",
    logo: "https://majorwerks.s3.us-east-2.amazonaws.com/Majorwerks%20Logo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2FLXT2YPRHGFKLTX%2F20250527%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220040Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJIMEYCIQDe8rNmNPc8rMzaE98YfQa2IUjE16KZ0rkycZEUaeq%2FtQIhANp2y5%2FzkDOwzhR4%2F%2FUKFcfJUPOs2CqXVVYz8d1SAQHHKtYCCGcQABoMNjk4NzE5OTE3NTk5IgzW15DNBiQqDoQydHQqswKSF5ZgL3reuL6WvY99gQYs0Ld%2Bh6ny%2FY9oc9Xvz78Gbmhjpu721teghzFrQx2q5QMDAc8lNLfwtMkQ9oC6JMOWcXufh5mzw5%2F%2FPMaYw%2B7TiDWJk%2FHk8Ycrz7APk%2Fh1rS7dogA5YHY4oGr2t%2BA%2ByXN0oL1kOjygqUEoilCNrc1qkHHMa%2BVXB%2Fq7%2B5ZSINMvHf%2BJs4EC8D0t%2BLL1o2bhNVucqhU%2FG6f0ei9Z%2BM0lZgSP38rngNyBJhxdHNOZx%2BS59sZEylSsdMfvtQgndgaWQpekfOWI2Ld4h7%2BJT2qkLsH64dgrzra7AKW30aTZ3CLPB1F1OUievhuDrEq3%2BHfrMXYg45bp6zbeugchsc%2Biq6jUAT5pEjpBrpTqL3h%2FPUrlUZFIpXzlJvRRsq0sjvneTa1uzc6gMLDp2MEGOqwC060SvZ%2Bbdjce9Xb1alegJqQGG2%2Fv7IOjGk3wS9xA4GwcNBKuF6AZ2McuVszYo3vflV6qPIZDnPqSYM9GBFXfhb9dulCFZ3LkSznfH7eXzTEYO3NR0mpGtgCONHMvp7fOOuC7jWHiewvDRdtkm8Ir8r0zPeKqdbBYSX5CNloiapD0YF2toHJHyPTmtpnELIkOFqL3tuXsBFJRnxVR6beVK8REW62%2BCeYhVGjl7a1tOvJRd0olYZIONAGX8nfo6vqjJqPChlHSQE2YBH3wytHpL7m9kiHWtr6cyDppF1H4TJmWKBBvOyyXeQmsoeLPbFOWnnIqBd6gkvN3VNWB0%2F9qLpy2gEsgAn3aRiZvA7%2B%2BhzFmk7%2BVBwLj7hI9Q60VPz%2BeeOzQGVLxgpFxhg%2Fm&X-Amz-Signature=139ed6d91399196c5f489b50717a087fc4eb76e5f3f530716d0159db10c2b41d&X-Amz-SignedHeaders=host&response-content-disposition=inline",
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