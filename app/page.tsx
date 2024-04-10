import { Button } from "@/components/ui/button";
import { FC } from "react";

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-dvh">
      Anish Ummenthala Blog
      <Button>Click Me !</Button>
    </main>
  );
};

export default HomePage;
