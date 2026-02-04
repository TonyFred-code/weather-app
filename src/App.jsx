import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import WeatherOutput from "./components/WeatherOutput.jsx";

export default function App() {
  return (
    <div className="p-4 mx-auto max-w-5xl flex flex-col gap-8 items-center">
      <Header />
      <Form />
      <WeatherOutput />
    </div>
  );
}
