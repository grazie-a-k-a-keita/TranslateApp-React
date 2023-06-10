interface Props {
  hidden: string;
}

function ErrorMessage(props: Props) {
  const { hidden } = props;
  return (
    <div>
      <div className={hidden}>
        <p className="errorMessage">入力してください！</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
