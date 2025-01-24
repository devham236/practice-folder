const exampleRestaurant = {
  name: "Mustafa Burger",
  rating: 4,
  street: "Flotowstr. 87",
  zip: "56368",
  city: "Katzenelnbogen",
  website: "http://www.webseite-01.c24",
  burger_classic: "y",
  burger_cheese: "y",
  burger_bio: "n",
};

export type Restaurant = typeof exampleRestaurant;

export type DataContextType = {
  allRestaurants: Restaurant[];
  setAllRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
};

export type DataContextPropsType = {
  children: React.ReactNode;
};

export type ShopPropsType = {
  data: Restaurant;
};
