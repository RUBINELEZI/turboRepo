'use client';

import Image from "next/image";
import Heading from "./Heading";


const ListingHead = ({
  title,
  images,
}) => {
  return ( 
    <>
      <Heading
        title={title}
        subtitle={`Oslo Norway`}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        
        <Image
          src={images[0]}
          fill
          className="object-cover w-full"
          alt="Image"
        />
      </div>
    </>
   );
}
 
export default ListingHead;