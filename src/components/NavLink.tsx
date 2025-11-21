import Link from "next/link"

export function NavLink() {
  return (
    <div className="flex gap-10">
        <Link href="home">Home</Link>
        <Link href="products">Produtos</Link>
        <Link href="category">Categorias</Link>
        <Link href="about">About</Link>
      </div>
  )
}

export function NavLinkCol() {
  return (
    <div className="flex flex-col gap-1">
        <Link href="home">Home</Link>
        <Link href="products">Produtos</Link>
        <Link href="category">Categorias</Link>
        <Link href="about">About</Link>
      </div>
  )  
}