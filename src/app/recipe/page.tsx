import type { Metadata } from "next";
import Recipes from "@/features/recipes/components";

function RecipesPage() {
  return <Recipes />;
}

export const metadata: Metadata = {
  title: "Tastebites | Recipes",
  description: "Tastebites Recipes Page description"
};

export default RecipesPage;
