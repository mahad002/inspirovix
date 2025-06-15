import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = useMemo(() => phrases[currentPhraseIndex], [phrases, currentPhraseIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhrase, phrases.length, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="relative h-16 flex items-center justify-center">
      <motion.div
        key={currentText}
        className="flex items-center gap-2"
      >
        <span className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-bold">
          {currentText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-6 sm:h-7 md:h-8 bg-purple-500"
        />
      </motion.div>
    </div>
  );
};

export default React.memo(TypewriterEffect);