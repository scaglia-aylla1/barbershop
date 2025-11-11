import SearchInput from "@/app/components/ui/search-input";
import Header from "./components/ui/header";
import Image from "next/image";
import banner from "../public/banner.png";
import BookingItem from "./components/ui/booking-item";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Banner"
          sizes="100vw"
          className="h-auto w-full"
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem 
          serviceName="Corte de Cabelo"
          barbershopName="Barbearia do Zé"
          barbershopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
          date={new Date()}
        />
      </div>
    </main>
  );
};

export default Home;
