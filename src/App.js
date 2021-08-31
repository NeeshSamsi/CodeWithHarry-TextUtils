import Nav from "./components/Nav";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Nav title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analize below" />
      </div>
    </>
  );
}

export default App;
