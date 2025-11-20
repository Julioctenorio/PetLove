"use client"

function Button({text, onClick} : {text: string, onClick: ()=>void}
) {


    return (
    <button className="p-2.5 bg-gradient-orange w-[300px] h-12 rounded-[10px] flex justify-center items-center cursor-pointer text-white" onClick={onClick}>{text}</button>

    )
}


export default Button