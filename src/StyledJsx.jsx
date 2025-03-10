export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSX입니다.</p>
        <button className="button">버튼</button>
      </div>

      <style jsx>{`
        .container {
          border: solid 1px #aaa;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #aaa;
          width: 300px;
        }
        .button {
          background-color: #ddd;
          border: none;
          padding: 8px;
          border-radius: 8px;
          width: 50px;
          &:hover {
            background-color: #aaa;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
