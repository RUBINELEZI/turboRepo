'use client';

import ListingHead from "../ListingHead";
import ListingInfo from "../ListingInfo";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};



const ListingScreen = ({
  listing,
}) => {
 
  return ( 
      <div 
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            images={listing.images}
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo
              description={listing.description}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
            BOOKING WIDGET
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default ListingScreen;
