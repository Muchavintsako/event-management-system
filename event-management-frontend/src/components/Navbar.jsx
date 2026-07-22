import { Link } from "react-router-dom";

export default function Navbar() {

    return (

        <nav className="bg-white shadow">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center h-20">

                    <h1 className="text-3xl font-bold text-blue-600">
                        EventHub
                    </h1>

                    <div className="flex gap-8">

                        <Link to="/">Home</Link>

                        <Link to="/events">Events</Link>

                        <Link to="/">About</Link>

                        <Link to="/">Contact</Link>

                    </div>

                    <div className="flex gap-4">

                        <Link
                            to="/login"
                            className="px-5 py-2 border rounded-lg">

                            Login

                        </Link>

                        <Link
                            to="/register"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">

                            Register

                        </Link>

                    </div>

                </div>

            </div>

        </nav>

    );

}