import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import WeatherOutput from "./components/WeatherOutput.jsx";

export default function App() {
  return (
    <div className="px-2 py-3 xs:p-4 mx-auto max-w-5xl flex flex-col gap-8 items-center">
      <Header />
      <Form />
      <WeatherOutput />
    </div>
  );
}
