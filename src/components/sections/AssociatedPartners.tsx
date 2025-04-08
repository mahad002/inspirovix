import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";
import { themes } from "../../theme/themes";
import { partners } from "../../data/partners";
import { Partner } from "../../data/partners";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const AssociatedPartners = () => {
    const { theme } = useTheme();
    const styles = themes[theme];
    const { t } = useTranslation("common");
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const { inView, ref: inViewRef } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    
    useEffect(() => {
        if (inView) {
        controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);
    
    return (
        <section
        id="partners"
        className={`${styles.background.primary} py-20`}
        ref={ref}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            ref={inViewRef}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <h2 className={`text-4xl font-bold ${styles.text.primary} mb-4`}>
                {t("associated_partners.title")}
            </h2>
            <p className={`text-xl ${styles.text.secondary} max-w-3xl mx-auto`}>
                {t("associated_partners.description")}
            </p>
            </motion.div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner: Partner, index: number) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                ref={inViewRef}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${styles.background.card} rounded-xl overflow-hidden ${styles.glow.primary}`}
                >
                <div className="relative h-48 overflow-hidden">
                    <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        theme === 'dark'
                        ? 'bg-violet-500/80 text-white'
                        : 'bg-violet-100 text-violet-700'
                    }`}>
                        {partner.category}
                    </span>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className={`text-xl font-semibold ${styles.text.primary} mb-3 group-hover:text-violet-400 transition-colors`}>
                    {partner.name}
                    </h3>
                    <p className={`${styles.text.secondary} mb-4 line-clamp-2`}>
                    {partner.description}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}

export default AssociatedPartners;