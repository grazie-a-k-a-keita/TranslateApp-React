interface Props {
  hidden: string;
}

function Loading(props: Props) {
  const { hidden } = props;
  return (
    <div className={hidden}>
      <div className="loadingBox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
          fill="#1c0040"
        >
          <circle cx="12" cy="12" r="12" opacity=".5">
            <animate
              attributeName="r"
              values="0;12;0"
              keySplines="0.42 0.0 0.58 1.0"
              dur="2s"
              repeatCount="indefinite"
              begin="0"
            />
          </circle>
          <circle cx="12" cy="12" r="0" opacity=".5">
            <animate
              attributeName="r"
              values="0;12;0"
              keySplines="0.42 0.0 0.58 1.0"
              dur="2s"
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
        </svg>
      </div>
      <p className="loadingText">翻訳中</p>
    </div>
  );
}

export default Loading;
