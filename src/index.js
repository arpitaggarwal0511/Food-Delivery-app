import { createRoot }  from 'react-dom/client'
import Body from "./app";
import Header from "./components/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Layout />);
