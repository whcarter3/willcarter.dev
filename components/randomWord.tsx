import React, { useState, useEffect } from 'react';

const RandomWord = (): JSX.Element => {
  // Create state variable for the current word
  const [currentWord, setCurrentWord] = useState(
    'Frontend Developer'
  );
  // Create state variable for the previous word
  const [prevWord, setPrevWord] = useState('');
  // Create an effect to animate the word every interval
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const words = [
      'frontend developer',
      'gamer',
      'disc golfer',
      'father',
      'son',
      'brother',
    ];
    // Set an interval to change the word every second
    const interval = setInterval(() => {
      let nextWord;
      // Keep running the loop until a new word is chosen
      do {
        nextWord = words[Math.floor(Math.random() * words.length)];
      } while (nextWord === prevWord);
      // Update the current word and previous word state variables
      setCurrentWord(nextWord);
      setPrevWord(nextWord);
      setAnimated(true);
      //timeout matches the animation duration
      setTimeout(() => {
        setAnimated(false);
      }, 2000);
    }, 2000);
    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [prevWord]);

  return (
    <span className={animated ? 'typing-animation' : ''}>
      {currentWord}
    </span>
  );
};

export default RandomWord;
