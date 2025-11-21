import { NavLinkCol } from "./NavLink";

export default function Footer() {
  return (
    <>
      <div className="flex gap-36 h-80 bg-[#1F2937] pt-15 px-14">
        <div className="text-[#F59E0B]">
          <h1 className="text-2xl font-bold">PetLove</h1>
          <p className="pt-3">
            O seu parceiro de confiança em cuidados com animais de estimação.
            Produtos de qualidade para animais de estimação felizes e saudáveis.
          </p>
        </div>
        <div className="flex w-56 flex-col gap-3 text-[#F59E0B]">
          <h2 className="font-semibold">Links Rápidos</h2>
          <NavLinkCol />
        </div>
        <div className="flex flex-col gap-3 text-[#F59E0B]">
          <h2 className="font-semibold">Suporte</h2>
          <div className="">
            <p className="">Em desenvolvimento</p>
          </div>
        </div>
        <div className="text-[#1F2937]">
          <h2 className="text-[#F59E0B] font-semibold">Siga-nos</h2>
          <div className="flex gap-4 items-center pt-4">
            <i className="flex items-center justify-center bi bi-facebook w-8 h-8 bg-[#F59E0B] rounded-full"></i>
            <i className="flex items-center justify-center bi bi-instagram w-8 h-8 bg-[#F59E0B] rounded-full"></i>
            <i className="flex items-center justify-center bi bi-tiktok w-8 h-8 bg-[#F59E0B] rounded-full"></i>
          </div>
        </div>
      </div>
        <small className="flex items-center justify-center pb-3 text-[#F59E0B] bg-[#1F2937]">© Desenvolvido por Julio && Marta by Bytes4Future</small>
      <div>
      </div>
    </>
  );
}