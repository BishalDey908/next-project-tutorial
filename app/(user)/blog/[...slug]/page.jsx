const blog = async (props) => {
  const { slug } = await props.params;

  return (
    <>
      <div>{slug}</div>
    </>
  );
};

export default blog;
