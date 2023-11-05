import HomePage from "./components/HomePage";
import DonationForm from "./components/DonationForm";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ContactUs from "./components/ContactUs";
import ThankYou from "./components/ThankYou";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<DonationForm />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/succesfull" element={<ThankYou />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
