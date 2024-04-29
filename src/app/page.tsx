import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getrecipe(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");
  return result.json();
}

export default async function Home() {
  const recipes = await getrecipe;
  return (
    <div>
      <main>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Card key={recipe.id}>
              <CardHeader>
                <div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.time} minutes</CardDescription>
                  <CardContent>{recipe.description}</CardContent>
                  <CardFooter>
                    <button>View Recipe</button>
                    {recipe.vegan && <p>Vegan!</p>}
                  </CardFooter>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
