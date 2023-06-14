'use client';
import BookingWidget from "../BookingWidget";
import ListingHead from "../ListingHead";
import ListingInfo from "../ListingInfo";
import Map from 'map'
import OpeningHours from "../OpenigHours";
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
        max-w-screen-xl
          mx-auto
          px-10
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            subTitle={listing.locationValue}
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
              listing={listing}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
          
            <BookingWidget />
            <OpeningHours />
            </div>
          </div>


          <div className="h-40 mb-10">
          <Map salons={[listing]}/>
          </div>
        </div>
      </div>
   );
}
 
export default ListingScreen;
