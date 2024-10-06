const User = (props) => {
  let { user } = props;

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export { User };
