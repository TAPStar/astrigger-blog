interface Props_InputTextBoxE {
  title: string;
  multiLine: boolean;
  placeholder?: string;
  errorMessage?: string;
  id?: string;
}

/**
 * テキスト入力ボックス　エラー表示機能付き
 */
const InputTextBoxE = (props: Props_InputTextBoxE) => {
  const { title, multiLine, id, placeholder, errorMessage } = props;
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            {title}
          </label>
          {multiLine ? (
            <textarea
              className="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
              placeholder={placeholder}
              id={id}
            ></textarea>
          ) : (
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder={placeholder}
              type="text"
              id={id}
            />
          )}
          <p className=" text-red-600 text-xs italic">{errorMessage}</p>
        </div>
      </div>
    </>
  );
};

export default InputTextBoxE;