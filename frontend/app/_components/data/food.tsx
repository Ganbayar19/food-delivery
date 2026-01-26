export type Food = {
  id: number;
  title: string;
  price: number;
  img: string;
  category: "appetizer" | "salad" | "lunch";
};

export const foods: Food[] = [
<<<<<<< HEAD
=======
  // Appetizers
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
  {
    id: 1,
    title: "Spring Rolls",
    price: 6.5,
    img: "/foods/spring-rolls.jpg",
    category: "appetizer",
  },
  {
    id: 2,
    title: "Garlic Bread",
    price: 5,
    img: "/foods/garlic-bread.jpg",
    category: "appetizer",
  },
<<<<<<< HEAD
=======

  // Salads
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
  {
    id: 3,
    title: "Caesar Salad",
    price: 9,
    img: "/foods/caesar.jpg",
    category: "salad",
  },
  {
    id: 4,
    title: "Greek Salad",
    price: 8.5,
    img: "/foods/greek.jpg",
    category: "salad",
  },
<<<<<<< HEAD
=======

  // Lunch Favorites
>>>>>>> 1fe0014feacf081cd9f996ae25323c7a8c5343e9
  {
    id: 5,
    title: "Grilled Chicken",
    price: 12,
    img: "/foods/grilled-chicken.jpg",
    category: "lunch",
  },
  {
    id: 6,
    title: "Beef Burger",
    price: 11,
    img: "/foods/burger.jpg",
    category: "lunch",
  },
  {
    id: 7,
    title: "Pasta Alfredo",
    price: 13,
    img: "/foods/pasta.jpg",
    category: "lunch",
  },
];
