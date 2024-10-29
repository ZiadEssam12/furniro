import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ExtendedFooterProvider from "./Components/Context/ExtendedFooterContext";
import ProductsProvider from "./Components/Context/ProductsContext";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SectionHeader from "./Components/SectionHeader/SectionHeader";
import Shop from "./Components/Shop/Shop";
import Layout from "./Components/Layout/Layout";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Contact from "./Components/Contact/Contact";

export default function App() {
  let routers = createHashRouter([
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/contact",
          element: <Contact />,
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
