'use client';
import Map from 'map'

const ListingInfo = ({
  description,
  listing
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
      <div className="
      text-lg font-light text-neutral-500">
        <div className='mb-10'>
        {description}
        </div>
      
        <Map salons={[listing]}/>
      </div>
  
      <hr />
    </div>
  );
}

export default ListingInfo;