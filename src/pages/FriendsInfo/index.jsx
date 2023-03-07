import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cardData from "../../data/cardData.json";
import { Header, Sidebar, CustomButton } from "../../components/index";

const index = () => {
  const router = useRouter();
  const [parsedCard, setCard] = useState(null);
  const { id } = router.query;

  console.log("id -> ", id);

  const grabCardData = () => {
    try {
      const parsedCard = JSON.parse(card);
      return parsedCard;
    } catch (error) {
      console.log("no card data found");
    }
  };

  useEffect(() => {
    const parsedCard = cardData.find((card) => card.id === parseInt(id));
    setCard(parsedCard);
    console.log("parsedCard -> ", parsedCard);
  }, [id]);

  return (
    <div className="flex">
      <Sidebar className="flex-1" />
      <div className="flex-1">
        <Header />
        <main className="flex justify-start sm:justify-center mx-[30px] sm:mx-[120px] sm:px-4 py-6 sm:py-16 h-auto">
          {parsedCard ? (
            <div className="my-2 w-[100%] h-auto" key={parsedCard?.id}>
              <div className="rounded-md border p-5 w-full h-full bg-white">
                <div className="flex w-full items-center justify-center pb-2">
                  <div className="w-24 h-24 md:shrink-0 border rounded-full overflow-hidden">
                    <img src="/avatar.png" alt="avatar" />
                  </div>
                </div>
                <div className="text-center pb-3">
                  <h2 className="text-2xl font-bold text-slate-700 mb-2">
                    {parsedCard?.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {parsedCard ? (
                      parsedCard.category === "close" ? (
                        <CustomButton
                          bgColor="bg-blue-100"
                          textColor="text-blue-500"
                          text="Close Friend"
                        />
                      ) : parsedCard.category === "superclose" ? (
                        <CustomButton
                          bgColor="bg-green-100"
                          textColor="text-green-500"
                          text="Super Close Friend"
                        />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div className="px-4 py-2">
                  <p className="text-lg text-center font-medium text-gray-700">
                    {parsedCard
                      ? "Hello! My name is " +
                      parsedCard.name +
                      " and I'm happy to be here!"
                      : ""}
                  </p>
                </div>
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <div className="flex space-x-4 md:space-x-8">
                    <div className="flex cursor-pointer items-center transition">
                      <span className="text-[#ABABAB]">
                        Email: {parsedCard?.email} &nbsp;• Phone:{" "}
                        {parsedCard?.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>Error: Card Data Not Available.</>
          )}
        </main>
      </div>
    </div>
  );
};

export default index;
