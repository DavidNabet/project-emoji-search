import copy from "copy-to-clipboard";

const Lines = ({ emojis }) => {
  // console.log(emojis);
  return (
    <>
      {emojis.map(({ symbol, title }, i) => {
        return (
          <div className="line" key={i} onClick={() => copy(symbol)}>
            <span>
              {symbol} {title}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Lines;
