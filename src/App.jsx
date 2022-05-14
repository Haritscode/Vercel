import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
function App() {
  return (
    <>
      <div className="bg-mainImg md:bg-mainImage bg-cover w-screen h-screen z-10 flex flex-col">
        <Navbar/>
        <Main/>
      </div>
      <div className="bg-bgImage h-screen">
      </div>
      
      
    </>
  );
}

export default App;
