import React, {useState} from 'react';

interface AddToCartProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    onCounterChange: (count: number) => void;

}

export const AddToCart: React.FC<AddToCartProps> = ({ title, description, imageUrl, price,onCounterChange }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCounterChange(newCount);
    };

    const decrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            onCounterChange(newCount);
        }
    };
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="container mx-auto max-w-sm w-full p-4 ">
                <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl uppercase text-gray-900 font-bold">{title}</p>
                        <p className="uppercase text-sm text-gray-400">{description}</p>
                    </div>
                    <div className="prod-img">
                        <img src={imageUrl} className="w-full object-cover object-center pb-5" alt="" />
                    </div>
                    <div className="prod-info grid gap-10">
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <p className="font-bold text-xl mb-5 md:mb-0">{price}</p>
                            <button className="px-3 py-2 transition ease-in text-xs duration-200 uppercase rounded-full hover:bg-amber-100 outline   focus:outline-none">
                                Add to cart
                            </button>
                            <div className="flex items-center mt-5 md:mt-0 text-sm font-bold">
                                <button
                                    className="px-2  bg-amber-50 py-2 bg-white text-gray-700 rounded-l focus:outline-none"
                                    onClick={decrement}
                                >
                                    -
                                </button>
                                <span className="px-2 py-2 bg-white text-gray-700  bg-amber-50">{count}</span>
                                <button
                                    className="px-2  bg-amber-50 py-2 bg-white text-gray-700 rounded-r focus:outline-none"
                                    onClick={increment}
                                >
                                    +
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
