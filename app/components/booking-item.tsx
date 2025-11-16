import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BookingItemProps {
  serviceName: string;
  barbershopName: string;
  barbershopImageUrl: string;
  date: Date;
  status: "confirmed" | "finished";
}

const BookingItem = ({
  serviceName,
  barbershopName,
  barbershopImageUrl,
  date,
  status,
}: BookingItemProps) => {
  return (
    <div>
      <Card className="flex w-full min-w-full flex-row items-center justify-between p-0">
        {/* Left side: Barbershop image and details */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Badge
             className={
              status === "confirmed"
              ? "bg-primary/10 text-primary uppercase"
              : "bg-muted text-muted-foreground uppercase"
             }
          >
            {status === "confirmed" ? "Confirmado" : "Finalizado"}
          </Badge>

          <div className="flex flex-col gap-2">
            <p className="font-bold">{serviceName}</p>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={barbershopImageUrl} />
              </Avatar>
              <p className="text-sm">{barbershopName}</p>
            </div>
          </div>
        </div>
        {/* Right side: Date */}
        <div className="flex h-full w-[106px] flex-col items-center justify-center border-l py-3">
          <p className="text-xs capitalize">
            {date.toLocaleDateString("pt-BR", { month: "long" })}
          </p>
          <p className="text-2xl">
            {date.toLocaleDateString("pt-BR", { day: "2-digit" })}
          </p>
          <p className="text-x">
            {date.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </Card>
    </div>
  );
};
export default BookingItem;
