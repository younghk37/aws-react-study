import TestBox from "./components/TestBox/TestBox";
import TestBox2 from "./components/TestBox2/TestBox2";


function App() {
  return (
    <>
      <h1>test</h1>
      <TestBox inputTitleName={"username"}></TestBox>
      <TestBox inputTitleName={"password"}></TestBox>
      <TestBox2/>
    </>
  );
}

export default App;
