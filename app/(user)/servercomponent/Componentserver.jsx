const Componentserver = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const data = await fetch(URL);
  const formatedData = await data.json();
  
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {formatedData.map((data, index) => {
          return <div key={index}>{data.body}</div>;
        })}
      </div>
    </>
  );
};

export default Componentserver;
