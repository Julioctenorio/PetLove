export default interface IProduct {
  _id: string;
  name: string;
  description: string;
  images: string[];
  animal: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  evaluations: number;
}