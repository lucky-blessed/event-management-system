import { Button, Input } from "antd";
import ThemeProvider from "./theme";
function App() {
  return (
    <ThemeProvider>
      <div className="h-screen flex justify-center items-center flex-col gap-10 p-10">
      <h1 className="text-gray-500 text-3xl font-bold">Homepage</h1>

      <Button type="primary">Primary Button</Button>

      <Button>Default Button</Button>

      <Input placeholder="For simple use"></Input>
    </div>
    </ThemeProvider>
  );
}

export default App;
