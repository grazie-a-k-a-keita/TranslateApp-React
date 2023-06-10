interface Props {
  hidden: string;
}

const errorMessage = (props: Props) => (
  <div>
    <div className={props.hidden}>
      <p className="errorMessage">入力してください！</p>
    </div>
  </div>
);

export default errorMessage;
