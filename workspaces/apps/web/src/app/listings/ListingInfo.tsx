'use client';

const ListingInfo = ({
  description,
}) => {
  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>About Us</div>
          
        </div>
      </div>
      <hr />
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
    </div>
   );
}
 
export default ListingInfo;