export declare interface AboutListingType {
  image: any;
  name: string;
  rating: number;
}

export declare interface AboutType {
  aboutlisting: AboutListingType[];
  aboutUS: {
    image: any;
    title: string;
    description: string;
    link: string;
  };
}

export declare interface CollectionListingType {
  image: any;
  name: string;
  recipes: number;
}

export declare interface LatestRecipeListingType {
  image: any;
  name: string;
  recipes: string;
  user_name: string;
  profile_image: any;
}

export declare interface FreshRecipeListingType {
  image: any;
  name: string;
}

export declare interface StateType {
  about: AboutType;
  collection: CollectionListingType[];
  latestRecipes: LatestRecipeListingType[];
  freshRecipes: FreshRecipeListingType[];
}
