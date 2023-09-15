import Header from "./components/Header";
import Jobs from "./components/Jobs"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-[#effafa]">
      <Header />
      <Jobs />
    </div>
  )
}

export default App
