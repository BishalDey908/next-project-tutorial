import Card from "@/component/Card";
import { teamData } from "@/fakeData/fakeData";
import React from "react";

const arr = [1, 2, 3, 4, 5];
const page = () => {
  return (
    <div className="p-4">
      <h1>Our Team</h1>
      <div className="flex justify-content-between gap-4">
        {teamData.map((data, index) => {
          return <Card data={data} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default page;
