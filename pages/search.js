import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { useRouter } from "next/router";
import format from "date-fns/format";
import InfoCard from "@/components/InfoCard";
import Map from "@/components/Map";
function Search({ searchResults }) {
  const router = useRouter();
  const { numberOfGuests, endDate, startDate, location } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMM yy");
  const formateEnddDate = format(new Date(endDate), "dd MMM yy");

  return (
    <div className=" h-[200vh] overflow-hidden">
      <Header
        placeholder={`${location} | ${formatedStartDate}-${formateEnddDate} | ${numberOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs font-semibold">
            300+ stays - {formatedStartDate} - {formateEnddDate} for{" "}
            {numberOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hiffen mb-5 space-x-3 text-gray-800 whitespace-nowrap lg:inline-flex">
            <p className="button">Cancellation Flexiblility</p>
            <p className="button">place </p>
            <p className="button">price</p>
            <p className="button">Rooms and Bedds</p>
          </div>
          {searchResults.map((item, index) => (
            <InfoCard
              key={index}
              img={item.img}
              location={item.location}
              description={item.description}
              title={item.title}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
        </section>
        <section className="w-96 h-6/12">
          <Map />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (response) => response.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
