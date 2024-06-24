import "./App.css";
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <main className=" mx-auto  min-h-96 my-10   container">
        <div className="mx-40">
          <div className="text-center">
          <Link to={"/characters"}>
         <button className="bg-cyan-500 rounded-2xl px-3 py-1 text-white hover:scale-125"> go to characters!</button>
         </Link>
         </div>
        
        </div>
      </main>
    </>
  );
}

export default App;
