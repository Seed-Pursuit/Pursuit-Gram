import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {
        isAuthenticated ? (
          <Navigate to='/' />
        ) : (
          <>
            <section className="flex flex-col justify-center items-center w-full h-screen">
              <Outlet />
            </section>

            <img
              src="images/side-img.png"
              className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
              alt="logo"
            />
          </>
        )
      }

    </>
  )
}

export default AuthLayout