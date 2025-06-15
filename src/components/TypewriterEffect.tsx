import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterEffect = React.memo<TypewriterEffectProps>(({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = useMemo(() => phrases[currentPhraseIndex], [phrases, currentPhraseIndex]);

  const updateText = useCallback(() => {
    if (isDeleting) {
      setCurrentText(prev => prev.slice(0, -1));
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      if (currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }
  }, [currentText, isDeleting, currentPhrase, phrases.length, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [updateText, isDeleting, deletingSpeed, typingSpeed]);

  const cursorVariants = useMemo(() => ({
    animate: { opacity: [1, 0] },
    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" as const }
  }), []);

  return (
    <AnimatePresence mode="wait">
      <div className="relative h-20 flex items-center justify-center overflow-hidden">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-bold">
            {currentText}
          </span>
          <motion.span
            {...cursorVariants}
            className="inline-block w-0.5 h-8 bg-purple-500"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
});

TypewriterEffect.displayName = 'TypewriterEffect';

export default TypewriterEffect;