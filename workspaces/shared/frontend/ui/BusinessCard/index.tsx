import React from 'react';
interface BussinessCardProps {
    image: string;
    name: string;
    isOpen:boolean;
    address:string;
    onClick: () => void;
    priceRange:string;
}
const BusinessCard  :React.FC<BussinessCardProps> =  ({ image , name , isOpen , address , onClick , priceRange }) => {
    return (
        <div onClick={onClick} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${image})`,
            width:'full',height:'20em', backgroundPosition:"center", backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className="relative text-white bg-white shadow-lg rounded-lg overflow-hidden">
            <div style={{ backgroundColor: isOpen ? 'green' : 'red' }} className="float-left absolute rotate-45 -right-[28px] top-[21px] align-middle text-xs">
                <div className="text-white py-[5px] px-[30px]">
                    {isOpen ? 'Now Open' : 'Now Closed'}
                </div>
            </div>
            <div className="p-4"> <p className="text-sm bg-gray-100 w-fit text-black py-1 px-2 rounded-3xl">{priceRange}</p></div>

            <div className="flex flex-col justify-end h-[80%]">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-sm mb-2">{address}</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard