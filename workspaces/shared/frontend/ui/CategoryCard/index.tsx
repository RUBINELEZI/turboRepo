'use client';
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CardProps {
    image: string;
    text: string;
    onClick: () => void;
}

const CategoryCard  :React.FC<CardProps> =({ image, onClick , text }) => {
    return (
        <div
        onClick={onClick}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg h-48 w-48 hover:shadow-xl cursor-pointer transition ease-in-out duration-150 delay-150 hover:-translate-y-1 hover:scale-110 "
            >
        <img src={image} alt={text} className="w-full h-auto mb-2"/>
            <p className="text-lg font-semibold font-roboto">{text}</p>
        </div>
    );
};

export default CategoryCard