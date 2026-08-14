// @ts-ignore
import {Button} from "@/components/ui/button.tsx";
import Navbar from "@/view/Navbar.tsx";
import TextBox from "@/view/TextBox.tsx";

function App() {

  return (
    <>
      <div className="min-h-screen bg-green-200">
      <Navbar />
        <TextBox/>
      </div>
    </>
  )
}

export default App
