import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
