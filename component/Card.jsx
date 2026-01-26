import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  const { name, role, image, email, description } = data;
  return (
    <div>
      <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs text-center">
        <div className="relative w-32 h-32 mx-auto">
          <div href="#">
            <Image src={image} alt="person" fill={true} className="object-cover rounded-full"/>
          </div>
        </div>
        <a href="#">
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
            {name}
          </h5>
        </a>
        <h6 className="mt-6 mb-2 text-lg font-semibold tracking-tight text-heading">
          {role}
        </h6>
        <h6 className="mb-6 text-body">{email}</h6>

        <p className="mb-6 text-body">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Read more
          <svg
            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
