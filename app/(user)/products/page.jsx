import Productlist from "./Productlist";




const product = async ({ searchParams }) => {
  const searchParam = await searchParams;
  console.log("outer",searchParam)

  const category = searchParam?.category || "all";
  const brand = searchParam?.brand || "all";
  return (
    <>
      <Productlist />
      {category}&nbsp;{brand}
    </>
  );
};

export default product;
