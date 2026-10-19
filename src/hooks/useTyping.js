import { useEffect, useState } from "react";

export default function useTyping(words, speed = 80, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && text === word) delay = pause;
    const id = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => (i + 1) % words.length);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
