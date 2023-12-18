import Book1 from "../assets/book/book1.jpg";
import Book2 from "../assets/book/book2.jpg";
import Book3 from "../assets/book/book3.jpg";
import Book4 from "../assets/book/bookKete.jpg";
import Book5 from "../assets/book/book5.jpg";
import { nanoid } from "nanoid";
export const BooksData = [
  {
    id: nanoid(),
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: nanoid(),
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: nanoid(),
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: nanoid(),
    img: Book4,
    title: "Normal Rules",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: nanoid(),
    img: Book5,
    title: "Opera omnia",
    rating: 4.8,
    author: "Someone",
  },
];
