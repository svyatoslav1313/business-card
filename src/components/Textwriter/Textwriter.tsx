import type React from "react";
import { useEffect, useState } from "react";
import './Textwriter.scss';

type Props = {
  text: string;
}

export const Textwriter: React.FC<Props> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const stop = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stop) {
        if (!isDeleting) {
          if (displayText.length < text.length) {
            setDisplayText(prev => prev + text.charAt(prev.length));
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, 15000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(prev => prev.slice(0, -1));
          } else {
            setTimeout(() => {
              setIsDeleting(false);
            }, 700);
          }
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timer);
  }, [displayText.length, text, isDeleting, stop]);
  return (
    <div className="textwriter-wrapper">
      <p className="textwriter real">{displayText}</p>
      <p className="textwriter ghost">{text}</p>
    </div>
  );
}