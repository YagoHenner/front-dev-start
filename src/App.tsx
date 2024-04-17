import '@/globals.css';
import { ModeToggle } from './components/mode-toggle';

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Front-Dev-Start by Yago Henner
      </h1>
      <ModeToggle />
    </div>
  );
}

export default App;
