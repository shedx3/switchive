"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";



const  ProductDetails = ({params}) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); 

  async function getProductDetails() {
    try {
      const res = await fetch(`https://dummyjson.com/products/${params?.id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const product = await res.json();
      
      setProduct(product);
    } catch (error) {
      
      setError(error); 
    }
  }

  useEffect(() => {
    getProductDetails();
  }, [product]);

  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const day = String(dateObj.getDate()).padStart(2, "0"); 
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  if (error) {
    return (
      <div>
        <Error error={error} reset={() => window.location.reload()} />
      </div>
    );
  }

  if (!product) {
    return (
      <>
        <div className="backdrop"></div>
        <div className="loading-spinner">
          <div className="la-ball-clip-rotate-multiple">
            <span className="loader"></span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Link href="/">
        <p className="text-balck mb-4 block text-4xl font-bold">&lt;</p>
      </Link>
      <div className="flex flex-wrap justify-between ">
        <div className="w-full md:w-3/6 bg-[#F5F5FA] p-4 shadow-lg">
          <div className="relative size-96 w-full">
            <Image
              src={product?.thumbnail}
              alt={product?.title}
              layout="fill"
              objectFit="cover"
              className="mb-4 rounded"
            />
          </div>
        </div>

        <div className="w-full md:w-2/6 p-4 text-[#101828]">
          <h1 className="text-xl  font-bold mb-4 ">{product?.title}</h1>
          <div className="flex items-center gap-6">
            <p className="mb-4 font-semibold">
              Brand : <span className="text-blue-800">{product?.brand}</span>
            </p>
            <div
              className={`py-1 px-2 item-center  text-sm ${
                product?.stock > 0
                  ? "text-switchGreen bg-green-50"
                  : "bg-red-100 text-red-600"
              }`}
            >
              <p>{product?.stock > 0 ? `In Stock` : "Out of Stock"}</p>
            </div>
          </div>
          {/* <p className="text-switchGrey"> {product?.category} / sku : <span>{product?.sku}</span> </p> */}
          <div className="h-0.5 bg-gray-300"></div>

          <p className="text-switchGrey my-4 text-2xl">
            $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          <p className="font-extrabold text-xl mb-2">Description</p>
          <div className="bg-[#F5F5FA] rounded-lg p-4 mb-4">
            <p className="">{product?.description}</p>
          </div>
          <div className="h-0.5 bg-gray-300 mb-4"></div>

          <p className="text-base font-extrabold">Delivery :</p>

          <p className="text-sm mb-4 ">{product?.shippingInformation}</p>

          <p className="text-base font-extrabold">Return Policy :</p>

          <p className="text-sm mb-4 text-red-500">{product?.returnPolicy}</p>

          <p className="text-base font-extrabold">Warranty:</p>

          <p className="text-sm mb-4">{product?.warrantyInformation}</p>
        </div>
      </div>

      <div className="shadow-lg mt-8  p-4">
        <h1 className="font-bold text-2xl mb-8"> Review</h1>

        <div>
          {product?.reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-4 ">
              <p className="font-semibold ">{review?.reviewerName}</p>
              <p className="text-sm">{review?.comment}</p>
              <p className="text-switchGrey">
                {review?.date ? formatDate(review.date) : "No date available"}{" "}
              </p>
              <div className="h-0.5 bg-blue-800 mb-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
