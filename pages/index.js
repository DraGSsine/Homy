import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer"
export default function Home({ exploreData, cardsData }) {
  console.log(exploreData);
  return (
    <div>
      <Header />
      <Banner />
      <main className=" max-w-7xl px-8 sm:px-16 mx-auto">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          <div className=" md:grid md:grid-cols-4">
            {exploreData.map((item, index) => (
              <SmallCard
                img={item.img}
                location={item.location}
                distance={item.distance}
                key={index}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold mb-5">live anywhere</h2>
          <div className="flex space-x-3 scrollbar-hide overflow-scroll">
            {cardsData.map((item, index) => (
              <MediumCard img={item.img} title={item.title} key={index} />
            ))}
          </div>
        </section>
        <LargeCard
              img='https://links.papareact.com/4cj'
              title='The Greatest Outdoors'
              description='Whshlist curated by Homy'
              buttonText='Get Inspired'
        />
      </main>
      <Footer/>
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("http://localhost:3000/api/cardData").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
