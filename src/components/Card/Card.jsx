import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import cardData from "../../data/cardData.json";

// skeleton shimmer effect dependencies
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = ({ filterProp }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(null);
  let [filter, setFilter] = useState(filterProp);
  // Filter the cards based on the category prop
  filter = filterProp;

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  let [cardsPerPage, setCardsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    setCurrentPage(1);

    if (
      filterProp === "close" ||
      filterProp === "superclose" ||
      filterProp === "mix"
    ) {
      setCardsPerPage(10);
    }

    setCardsPerPage(cardsPerPage + 5);
    console.log("current cards length -> ", cards.length);
    setCards([]); // Clear the cards

    const timeoutId = setTimeout(() => {
      const filteredCards = filterCards(cardData, filterProp);
      const totalCards = filteredCards.length;
      const totalPages = Math.ceil(totalCards / cardsPerPage);
      const startIndex = (currentPage - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const currentCards = filteredCards.slice(startIndex, endIndex);

      setCards((prevCards) => [...prevCards, ...currentCards]);
      setLoading(false);
      setHasMore(currentPage < totalPages);
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [filter, currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loaderRef.current && hasMore) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasMore]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const filterCards = (cards, filter) => {
    if (filter === "") {
      return cards.filter(
        (card) =>
          card.category === "close" ||
          card.category === "superclose" ||
          card.category === ""
      );
    }
    if (filter === "mix") {
      return cards.filter(
        (card) => card.category === "close" || card.category === "superclose"
      );
    }
    if (filter === "close") {
      return cards.filter((card) => card.category === "close");
    }
    if (filter === "superclose") {
      return cards.filter((card) => card.category === "superclose");
    }
    return cards;
  };

  return (
    <>
      {cards.map((card) => (
        <Link href={`/Info?id=${JSON.stringify(card.id)}`}>
          <div className="my-2 w-[100%] h-auto" key={card.id}>
            <div className="rounded-md border p-5 w-9/12 bg-white">
              <div className="flex w-full items-center justify-start pb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-md sm:text-lg font-bold text-slate-700">
                    <span className="text-[14px] font-bold">{card.name}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  {card.category === "close" && (
                    <button className="rounded-2xl border bg-blue-100 px-3 py-1 mx-3 text-xs font-semibold">
                      <span className="text-blue-500 text-[12px] font-medium">
                        Close Friends
                      </span>
                    </button>
                  )}
                  {card.category === "superclose" && (
                    <button className="rounded-2xl border bg-green-100 px-3 py-1 mx-3 text-xs font-semibold">
                      <span className="text-green-500 text-[12px] font-medium">
                        Super Close Friends
                      </span>
                    </button>
                  )}
                  {card.category === "" && <></>}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start text-slate-500 text-xs sm:text-[14px]">
                  <div className="flex space-x-4 md:space-x-8">
                    <div className="flex cursor-pointer items-center transition">
                      <span className="text-[#ABABAB]">
                        {card.email} &nbsp;• {card.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      {loading && (
        <>
          {[...Array(cardsPerPage)].map((_, index) => (
            <div className="my-2 w-[100%] h-auto" key={index}>
              <div className="rounded-md border p-5 w-9/12 bg-white">
                <Skeleton
                  height={20}
                  width={1000}
                  className="max-w-[180px] sm:max-w-[200px] md:max-w-[370px]"
                />
                <div className="flex justify-between mt-3">
                  <Skeleton
                    height={20}
                    width={1000}
                    className="max-w-[180px] sm:max-w-[200px] md:max-w-[370px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      <div ref={loaderRef} className="my-2 w-[100%] h-auto"></div>
    </>
  );
};

export default Card;
