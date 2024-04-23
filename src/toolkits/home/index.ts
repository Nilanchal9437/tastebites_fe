import { createSlice } from "@reduxjs/toolkit";
import type { StateType } from "@/toolkits/types/home";

import about from "@/features/home/assets/about/about.svg";
import aboutItemOne from "@/features/home/assets/about/item-1.svg";
import aboutItemTwo from "@/features/home/assets/about/item-2.svg";
import aboutItemThree from "@/features/home/assets/about/item-3.svg";

import sandwichicon from "@/features/home/assets/collections/bagel-sandwich.svg";
import mayyonaiseicon from "@/features/home/assets/collections/cheese-mayyonaise-salad.svg";
import cookiesicon from "@/features/home/assets/collections/delicious-cookies-with-glass-milk.svg";
import traditionalicon from "@/features/home/assets/collections/indian-traditional-dish-with-rice.svg";
import japaneseicon from "@/features/home/assets/collections/japanese-food-sushi-sashimi.svg";
import pexelsalishaIcon from "@/features/home/assets/collections/pexels-alisha-mishra-579430-1346215.svg";

import profileIcon from "@/features/home/assets/recipes/profile.svg";
import pizzaIcon from "@/features/home/assets/recipes/pizza.svg";
import recipeOneIcon from "@/features/home/assets/recipes/recipe-1.svg";
import recipeTwoIcon from "@/features/home/assets/recipes/recipe-2.svg";
import recipeThreeIcon from "@/features/home/assets/recipes/recipe-3.svg";
import recipeFourIcon from "@/features/home/assets/recipes/recipe-4.svg";

const initialState: StateType = {
  about: {
    aboutlisting: [
      {
        name: "Very berry Healthy Summer Smoothie",
        image: aboutItemOne.src,
        rating: 4.5
      },
      {
        name: "Carrot and ginger soup",
        image: aboutItemTwo.src,
        rating: 2.5
      },
      {
        name: "Loaded mixed berries Mini Tart",
        image: aboutItemThree.src,
        rating: 3.5
      },
      {
        name: "Very berry Healthy Summer Smoothie",
        image: aboutItemOne.src,
        rating: 4.5
      }
    ],
    aboutUS: {
      image: about.src,
      title: "About US",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1967",
      link: "/about"
    }
  },
  collection: [
    {
      name: "Sushi combos for your next party",
      image: sandwichicon.src,
      recipes: 145
    },
    {
      name: "Everything Bagel",
      image: mayyonaiseicon.src,
      recipes: 145
    },
    {
      name: "Biriyani combos",
      image: cookiesicon.src,
      recipes: 74
    },
    {
      name: "Dinner recipe ideas",
      image: traditionalicon.src,
      recipes: 34
    },
    {
      name: "The ultimate cookie frenzy",
      image: japaneseicon.src,
      recipes: 54
    },
    {
      name: "for the love of donuts",
      image: pexelsalishaIcon.src,
      recipes: 65
    },
    {
      name: "Biriyani combos 23",
      image: cookiesicon.src,
      recipes: 34374
    },
    {
      name: "Dinner recipe ideas 543",
      image: traditionalicon.src,
      recipes: 3434
    }
  ],
  latestRecipes: [
    {
      name: "Pumpkin marshmallow pie",
      image: pizzaIcon.src,
      user_name: "John Doe",
      profile_image: profileIcon.src,
      recipes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      name: "Pumpkin marshmallow pie",
      image: pizzaIcon.src,
      user_name: "John Doe",
      profile_image: profileIcon.src,
      recipes:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    }
  ],
  freshRecipes: [
    {
      name: "Pumpkin marshmallow pie",
      image: recipeOneIcon.src
    },
    {
      name: "Pizza",
      image: recipeTwoIcon.src
    },
    {
      name: "recipe two",
      image: recipeThreeIcon.src
    },
    {
      name: "recipe one",
      image: recipeFourIcon.src
    }
  ]
};

const home = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {}
});

export default home.reducer;
