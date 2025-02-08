import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-screen h-screen justify-center items-center">
      <h1 className="font-bold text-4xl">Alexandre Barros/ Shadcn UI</h1>
      <div className="flex dlex-col justify-center items-center border-2 border-neutral-300 w-96 h-48 ">
        <Button>Clique aqui</Button>
      </div>
    </main>
  );
}
