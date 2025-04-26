import { EMessageType } from "@/interface/chats";
import { useEffect, useState } from "react";

interface props {
	type: EMessageType;
  message: string;
  disableAnimation?: boolean;
}

const RenderAmimate: React.FC<props> = ({ message, disableAnimation = false }) => {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [intervalSpeed, setIntervalSpeed] = useState<number>(50);
  const words = message.split(' ');

  useEffect(() => {
    if (disableAnimation) {
      setDisplayedWords(words);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayedWords(prev => [...prev, words[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, intervalSpeed);

    return () => clearInterval(interval);
  }, [message, intervalSpeed, disableAnimation]);

  return (
    <div className="flex flex-wrap text-1xl">
      {displayedWords.map((word, index) => (
        <span
          key={index}
          className={`inline-block ${!disableAnimation ? 'animate-fadeIn' : ''} mr-2`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default RenderAmimate;
