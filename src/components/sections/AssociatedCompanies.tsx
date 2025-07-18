import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { themes } from '../../theme/themes';

// Optimized company data
const companies = [
  {
    name: "MajorWerks",
    logo: "https://majorwerks.s3.us-east-2.amazonaws.com/Majorwerks+Logo.jpg",
    description: "Innovative Software Solutions",
    website: "https://majorwerks.com"
  },
  {
    name: "Exec Chauffeur Group",
    logo: "https://i0.wp.com/execchauffeurgroup.co.uk/wp-content/uploads/2025/05/Exec-Chauffeur.png?fit=243%2C46&ssl=1",
    description: "Executive Car Services",
    website: "https://execchauffeurgroup.co.uk"
  },
  {
    name: "Haval",
    logo: "https://1000logos.net/wp-content/uploads/2020/10/Haval-Logo-2013.png",
    description: "Global Automotive Excellence",
    website: "https://www.haval.pk"
  },
  {
    name: "GWM",
    logo: "https://i0.wp.com/southernqueenstown.co.nz/wp-content/uploads/2023/05/GWM-Logo-Grid-Web-Res-PNG.png?ssl=1",
    description: "Automotive Innovation",
    website: "https://www.gwm-global.com"
  },
  {
    name: "Sazgar",
    logo: "https://sazgarpk.s3.ap-southeast-1.amazonaws.com/2022/02/Ai-sazgar-logo-min.webp",
    description: "Leading Automotive Group",
    website: "https://sazgarautos.com"
  },
  {
    name: "BAIC",
    logo: "https://brandlogos.net/wp-content/uploads/2022/09/baic_group-logo_brandlogos.net_8rlab.png",
    description: "Leading Automotive Group",
    website: "https://www.sazgarbaic.com"
  },
  {
    name: "Unlock Real Estate",
    logo: "https://inspirovix.s3.us-east-2.amazonaws.com/unlock+real+estate+logo.png",
    description: "Custom CRM Solutions",
    website: "https://unlockrealestate.com"
  },
  {
    name: "GuruisOnline",
    logo: "https://inspirovix.s3.us-east-2.amazonaws.com/gurusonline_logo.webp",
    description: "Your guide to Personal Growth and Mandarin Mastery",
    website: "https://guruisonline.com"
  },
  {
    name: "Housing Disrepair Compensations",
    logo: "https://cdn-icons-png.flaticon.com/512/1048/1048955.png",
    description: "Professional Housing Disrepair Legal Services",
    website: "https://www.housingdisrepaircompensations.co.uk"
  }
];

// Memoized Company Card Component
const CompanyCard = React.memo(({ 
  company, 
  index, 
  onHover, 
  styles, 
  theme 
}: { 
  company: typeof companies[0], 
  index: number, 
  onHover: (hovering: boolean) => void,
  styles: any,
  theme: string
}) => {
  const handleMouseEnter = useCallback(() => onHover(true), [onHover]);
  const handleMouseLeave = useCallback(() => onHover(false), [onHover]);

  // Memoized special styling for specific companies
  const cardStyle = useMemo(() => {
    if (company.name === "Exec Chauffeur Group") return "bg-black rounded-lg p-4";
    if (company.name === "Sazgar") return "bg-white rounded-lg p-4";
    return "";
  }, [company.name]);

  return (
    <a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.background.card} rounded-xl p-8 flex flex-col items-center justify-center ${styles.glow.primary} group hover:scale-105 transition-all duration-300 relative overflow-hidden min-w-[200px] cursor-pointer`}
      style={{ willChange: 'transform' }}
    >
      <motion.div
        className={`relative w-40 h-24 mb-6 flex items-center justify-center ${cardStyle}`}
        animate={{ y: [0, -10, 0] }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: index * 0.2,
          },
        }}
        style={{ willChange: 'transform' }}
      >
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          loading="lazy"
          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
          style={{ willChange: 'transform' }}
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
    </a>
  );
});

CompanyCard.displayName = 'CompanyCard';

const AssociatedCompanies = React.memo(() => {
  const { theme } = useTheme();
  const styles = useMemo(() => themes[theme], [theme]);
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = useCallback((hovering: boolean) => {
    setIsHovering(hovering);
  }, []);

  const scrollDuration = useMemo(() => isHovering ? 60 : 30, [isHovering]);

  // Memoized company cards
  const companyCards = useMemo(() => 
    companies.map((company, index) => (
      <CompanyCard
        key={`company-${index}`}
        company={company}
        index={index}
        onHover={handleHover}
        styles={styles}
        theme={theme}
      />
    )), [handleHover, styles, theme]);

  // Memoized duplicated cards for infinite scroll
  const infiniteCards = useMemo(() => (
    <>
      {companyCards}
      {companyCards}
    </>
  ), [companyCards]);

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
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: scrollDuration,
                ease: "linear",
              },
            }}
            style={{ willChange: 'transform' }}
          >
            {infiniteCards}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AssociatedCompanies.displayName = 'AssociatedCompanies';

export default AssociatedCompanies;