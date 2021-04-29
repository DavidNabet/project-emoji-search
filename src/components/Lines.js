const Lines = ({ emojis }) => {
  console.log(emojis);
  return (
    <>
      {emojis.map((emoji, i) => {
        return (
          <div className="line" key={i}>
            <span>
              {emoji.symbol} {emoji.title}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Lines;
