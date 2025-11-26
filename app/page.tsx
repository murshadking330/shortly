import InputBox from "@/components/InputBox";
import URLTable from "@/components/URLTable";

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <header className="text-center my-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
          Shorten Your Loooong Links :)
        </h1>
        <p className="text-gray-400 mt-2">Linkly style URL shortener — simple & beautiful.</p>
      </header>

      <InputBox />

      <section className="mt-10">
        <URLTable />
      </section>
    </main>
  );
}
