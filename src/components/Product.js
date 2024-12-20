import { StarIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id,title,price, description, category, image}) {

  const dispatch = useDispatch();

  const[rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )  

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product));
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

        <Image src={image} height={200} width={200} objectFit="contain" />

        <h4 className="my-3">{title}</h4>

        <div className="flex">
            {Array(rating)
                .fill()
                .map((_, i) => (<StarIcon className="h-4 text-yellow-400"/>))}
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <p className="mb-5">{price}</p>

        <button onClick={addItemToBasket} className="button">Add to Bag</button>
    </div>
  )
}

export default Product