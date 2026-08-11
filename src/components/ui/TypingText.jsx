import { useEffect, useState } from "react";

function TypingText({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1500,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) {
      return;
    }

    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, text.length + 1);

        setText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        const nextText = currentWord.slice(0, text.length - 1);

        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);

          setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>

      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}

export default TypingText;
