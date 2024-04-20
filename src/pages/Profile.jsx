import About from "../components/About";
import Profile from "../components/Profile";

export default function Hero() {
  return (
    <div className="flex justify-center items-center flex-col px-4">
      <Profile />
      <About />
    </div>
  );
}
