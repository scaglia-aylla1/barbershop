
import { Badge } from "./badge";
import { Card } from "./card";
import { Avatar, AvatarImage } from "./avatar";

interface BookingItemProps {
    serviceName: string;
    barbershopName: string;
    barbershopImageUrl: string;
    date: Date;
}

const BookingItem = ({serviceName, barbershopName, barbershopImageUrl, date } : BookingItemProps) => {
    return(
        <div>
            <Card className="flex flex-row items-center justify-between w-full min-w-full p-0">
                {/* Left side: Barbershop image and details */}
                <div className="flex flex-col gap-4 flex-1 p-4">
                    <Badge>Confirmado</Badge>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">{serviceName}</p>
                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={barbershopImageUrl} />
                            </Avatar>
                            <p className="text-muted-foreground text-sm">{barbershopName}</p>
                        </div>
                    </div>
                </div>
                {/* Right side: Date */}
                <div className="flex flex-col items-center justify-center p-4 h-full border-l py-3">
                    <p className="text-xs capitalize">
                        {date.toLocaleDateString("pt-BR", { month: "long" })}      
                    </p>
                    <p className="text-xs capitalize">
                        {date.toLocaleDateString("pt-BR", { day: "2-digit" })}      
                    </p>
                    <p className="text-xs capitalize">
                        {date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}      
                    </p>
                </div>
            </Card>

        </div>
    );
};
export default BookingItem;