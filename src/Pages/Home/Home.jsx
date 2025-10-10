import React, { useEffect, useState } from "react";
import { Outlet, useNavigation, useRouteError } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Error from "../../Pages/ErrorPage/Error";

const Home = () => {
  const navigation = useNavigation();
  const routeError = useRouteError(); // catch loader errors
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setShowSpinner(true);
    } else {
      const timeout = setTimeout(() => setShowSpinner(false), 1200);
      return () => clearTimeout(timeout);
    }
  }, [navigation.state]);

  // ✅ if routeError exists, show error page inside layout
  if (routeError) {
    return (
      <>
        <Navbar />
        <Error error={routeError} />
        <Footer />
      </>
    );
  }

  // ✅ show spinner while navigating
  if (showSpinner) {
    return <Spinner />;
  }
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[#D9D9D9]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
