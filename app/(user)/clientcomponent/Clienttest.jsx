"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [blogData, setBlogData] = useState([]);
  
  const URL = "https://jsonplaceholder.typicode.com/posts";
  
  const fetchData = async () => {
    const data = await fetch(URL);
    const formatedData = await data.json();
    console.log(formatedData)
    setBlogData(formatedData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Blogs</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quos
        voluptas veniam necessitatibus nihil magni provident! Earum maiores
        officiis eos ab aspernatur amet fugiat error voluptatem quisquam,
        excepturi assumenda nobis dolor dolores necessitatibus maxime accusamus
        rerum velit commodi exercitationem laborum, fuga cum voluptates vero.
        Quasi vero cupiditate quos officia et, possimus dicta ullam reiciendis.
        Dolor!
      </p>

      <button className="bg-red-400 p-4" onClick={() => alert("sadsadsa")}>
        Click me
      </button>

      <div className="grid grid-cols-3 gap-5">
        {
            blogData.map((data,index)=>{
                return <p key={index}>{data.body}</p>
            })
        }

      </div>
    </>
  );
};

export default Page;
