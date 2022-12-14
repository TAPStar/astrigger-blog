import { IEmojiData } from "emoji-picker-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

interface Props_EmojiSelectBox {
  inputHtmlId?: string;
}

const initialEmoji: IEmojiData = {
  activeSkinTone: "neutral",
  emoji: "ð",
  names: ["slightly smiling face", "slightly_smiling_face"],
  originalUnified: "1f642",
  unified: "1f642",
};

const EmojiSelectBox: React.FC<Props_EmojiSelectBox> = (props) => {
  const { inputHtmlId } = props;

  const inputRef = useRef<HTMLDivElement>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState<IEmojiData>(initialEmoji);
  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    setChosenEmoji(emojiObject);
  };

  // çµµæå­Pickerã®è¡¨ç¤º/éè¡¨ç¤ºã®ã¤ãã³ããä½æ
  useEffect(() => {
    const el = inputRef.current;

    const hundleClick = (e: MouseEvent) => {
      // çµµæå­Pickerãã¯ãªãã¯ããæã®å¦ç
      if (el?.contains(e.target as Node)) {
        setShowPicker(true);
      }
      // çµµæå­Pickerä»¥å¤ãã¯ãªãã¯ããæã®å¦ç
      else {
        setShowPicker(false); // çµµæå­Pickerãéè¡¨ç¤ºå
      }
    };

    // ã¦ã¤ã³ãã¦å¨ä½ã®ã¯ãªãã¯ã¤ãã³ããä½æ
    document.addEventListener("click", hundleClick);

    // ã³ã³ãã¼ãã³ãã®ã¢ã³ãã¦ã³ãã»åã¬ã³ããªã³ã°æã«ãã¯ãªãã¯ã¤ãã³ããåé¤
    return () => {
      document.removeEventListener("click", hundleClick);
    };
  }, [inputRef]);

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3 relative" ref={inputRef}>
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={inputHtmlId}
          >
            çµµæå­
          </label>

          <input
            className={
              "block w-full h-12 text-3xl bg-gray-200 text-gray-700 border rounded px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
            }
            type="button"
            id={inputHtmlId}
            value={chosenEmoji.emoji}
          />

          <div className={"absolute bottom-16" + (showPicker ? "" : " hidden")}>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmojiSelectBox;
