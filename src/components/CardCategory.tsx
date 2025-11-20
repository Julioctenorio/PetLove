import { Card, CardImg } from "react-bootstrap"
import bowlfood from "/..images/bowlfood.png"
import Button from "./Button";

export default function CardCategory() {

    return (
        <Card
            className="w-[361px] h-[450px] bg-[#FEF3C7] rounded-2xl shadow-xl p-4 border border-gray-200 md-[224.62px] ">

            <CardImg
                src="/images/bowlfood.jpg"
                alt="tigela de comida para cao">
            </CardImg>
            <Card.Body className="px-4 pb-5">


                <Card.Title className="text-amber-500 text-xl font-semibold">
                    Rações Premium
                </Card.Title>
                <Card.Text className="text-gray-700 text-sm mt-1" >
                    Mistura nutritiva para todas as raças
                </Card.Text>
                <Button text="Ir Para Categoria" onClick={() => (console.log("hello"))} />
            </Card.Body>

        </Card>




    );
}