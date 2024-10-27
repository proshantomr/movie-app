import MovieSection from "@/components/home-page/MovieSection";

export const metadata = {
    title: 'Home',
    description: 'Movie app.',
};
export default function Home() {

  return (
    <div >
      <MovieSection/>
      
    </div>
  );
}