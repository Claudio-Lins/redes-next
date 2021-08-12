import Navbar from "../components/navbar/Navbar"

const Layout = ({ children }) => {
    return (
        <div className="mx-auto min-h-screen py-32">
            <Navbar />
            { children }
        </div>
    );
}
 
export default Layout;