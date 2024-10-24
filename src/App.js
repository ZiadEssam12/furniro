import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExtendedFooterProvider from "./Components/Context/ExtendedFooterContext";
import ProductsProvider from "./Components/Context/ProductsContext";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SectionHeader from "./Components/SectionHeader/SectionHeader";
import Shop from "./Components/Shop/Shop";
import Layout from "./Components/Layout/Layout";
import ProductInfo from "./Components/ProductInfo/ProductInfo";

export default function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "shop", element: <Shop /> },
        {
          path: "/product",
          element: <ProductInfo />,
        },
        {
          // path :"/contact" , element : <contact />
        },
      ],
    },
  ]);

  return (
    <ExtendedFooterProvider>
      <ProductsProvider>
        <RouterProvider router={routers} />
      </ProductsProvider>
    </ExtendedFooterProvider>
  );
}
