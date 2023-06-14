import { DataTable } from 'strooks'
import * as tableComponents from 'shad/base/table'
import { useState } from 'react';

export default function PricingTable() {
    const [isExpanded, setIsExpanded] = useState(false);

    const services = [
        {
            category: 'Haircuts',
            items: [
                {
                    name: "Men's / Boy's Haircuts",
                    description: 'Standard haircut, you already know what this is about.',
                    price: '$20.00',
                    imageUrl: 'https://listeo.pro/wp-content/uploads/2022/01/handsome-man-barber-shop-styling-hair-150x150.jpg',
                },
                {
                    name: 'Senior Cuts',
                    description: 'The classic mens haircut, buzzes, comb-overs, fades, flattops etc.',
                    price: '$18.00',
                    imageUrl: 'https://listeo.pro/wp-content/uploads/2022/01/male-hairdresser-combing-hair-elderly-client-barbershop-150x150.jpg',
                },
                {
                    name: 'Straight Razor Fade',
                    description: 'The classic old fashion straight-razor shave',
                    price: '$15.00',
                    imageUrl: 'https://listeo.pro/wp-content/uploads/2022/01/barber-makes-ideal-hairstyle-haircut-fade-hairdresser-performs-dangerous-razor-150x150.jpg',
                },
            ],
        },
        {
            category: 'Shaves',
            items: [
                {
                    name: 'New Age Shave',
                    description: 'Shave with and against the grain, with pro shaving creams',
                    price: '$20.00',
                    imageUrl: 'https://listeo.pro/wp-content/uploads/2022/01/good-looking-hipster-young-bearded-man-visiting-hairstylist-barber-shop-150x150.jpg',
                },
                {
                    name: 'Beard Trim',
                    description: 'When you want to keep but make it look more manageable',
                    price: '$18.00',
                    imageUrl: 'https://listeo.pro/wp-content/uploads/2022/01/handsome-man-barbershop-shaving-beard-150x150.jpg',
                },
                {
                    name: 'Face Line-Up',
                    description: 'Straight-razor shave to line up the beard',
                    price: '$20.00',
                    imageUrl: 'https://listeo.pro/wp-content/uploads/2022/01/handsome-man-cutting-beard-barber-salon-150x150.jpg',
                },
            ],
        },
    ];

    return (
        <div className="mx-auto">
          <div className={`${isExpanded ? '' : 'max-h-[500px] overflow-hidden'}`}>
            {services.map((service, index) => (
              <div key={index} className="mb-6 cursor-pointer">
                <div className="bg-[#ff9292] text-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{service.category}</h3>
                </div>
                <DataTable
                  data={service.items}
                  components={tableComponents}
                  columns={[
                    {
                      field: 'imageUrl',
                      format: (val) => <img src={val} alt="" />,
                      label: '',
                    },
                    { field: 'name', label: '' },
                    { field: 'description', label: '', className: 'text-left' },
                    { field: 'price', label: '', className: 'text-left' },
                  ]}
                />
              </div>
            ))}
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        </div>
      );
    }