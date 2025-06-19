import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

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
  const [isWaiting, setIsWaiting] = useState(false);

  const currentPhrase = useMemo(() => phrases[currentPhraseIndex], [phrases, currentPhraseIndex]);

  const updateText = useCallback(() => {
    if (isWaiting) return;

    if (isDeleting) {
      setCurrentText(prev => prev.slice(0, -1));
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      if (currentText === currentPhrase) {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    }
  }, [currentText, isDeleting, isWaiting, currentPhrase, phrases.length, pauseDuration]);

  useEffect(() => {
    if (isWaiting) return;
    
    const timer = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [updateText, isDeleting, isWaiting, deletingSpeed, typingSpeed]);

  const cursorVariants = useMemo(() => ({
    animate: { opacity: [1, 0] },
    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" as const }
  }), []);

  return (
    <div className="relative h-16 flex items-center justify-center overflow-hidden">
      <div className="flex items-center gap-2">
        <motion.span
          key={`${currentPhraseIndex}-${currentText.length}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-xl sm:text-2xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-bold min-h-[2rem] flex items-center"
          style={{ 
            minWidth: '20ch',
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          {currentText}
        </motion.span>
        <motion.span
          {...cursorVariants}
          className="inline-block w-0.5 h-6 sm:h-8 bg-purple-500"
        />
      </div>
    </div>
  );
});

TypewriterEffect.displayName = 'TypewriterEffect';

export default TypewriterEffect;