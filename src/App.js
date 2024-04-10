import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileCreate from "./pages/ProfileCreate";
import SelectOptions from "./pages/SelectOptions";
import SignupPage from "./pages/SignupPage";
import SendEmailPage from "./pages/SendEmailPage";
import RootLayout from "./layout/RootLayout";
import PrivateRoute from "./layout/PrivateRoute";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
         path: '/verify-email',
         element: <SendEmailPage/>
      },
      {
        path: '/verify',
        element: <VerifyEmailPage/>
     }
    ],
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/create-profile',
    element: <ProfileCreate />,
  },
  {
    path: '/select-options',
    element: <SelectOptions />,
  },
]);


function App() {
 
  return (
    <>

      {/* <RootLayout>
        <Routes>
          <Route path="/select-options" element={<VerifyEmail />} />
          <Route path="/" element={<h1>Hiii</h1>} />
        </Routes>
      </RootLayout> */}

      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/select-options" element={<SelectOptions />} />
      </Routes> */}

    </>
  );
}

export default App;
