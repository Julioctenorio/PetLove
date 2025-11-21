import { Card } from "react-bootstrap"
import dogImage from "../images/dog.png"

export default function CardAnimal() {

    return (

        <Card className="p-4 shadow-lg rounded-xl flex flex-col items-center justify-center bg-[#FEF3C7]" 
        style={{ width: "18.75rem", height: "12.5rem" }}>

            <div className=" bg-lightorange flex items-center justify-center p-7 w-fit rounded-full">
                <Card.Img

                    variant="top"
                    src="/images/dog.png"
                    alt="icon de chachorro"
                    className="img-thumbnail rounded-circle w-14 h-14"
                />
            </div>

            <Card.Title 
            className="mt-3 text-amber-500 text-2xl font-bold">Cachorro</Card.Title>

        </Card>
    )
}
