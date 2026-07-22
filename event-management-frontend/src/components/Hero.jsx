import { Link } from "react-router-dom";

export default function Hero() {

    return (

        <section className="bg-blue-600 text-white">

            <div className="max-w-7xl mx-auto px-6 py-28">

                <h1 className="text-6xl font-bold">

                    Discover Amazing Events

                </h1>

                <p className="mt-6 text-xl w-2/3">

                    Book concerts, conferences, sports,
                    festivals and unforgettable experiences
                    around South Africa.

                </p>

                <div className="mt-10 flex gap-5">

                    <Link

                        to="/events"

                        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold">

                        Explore Events

                    </Link>

                    <Link

                        to="/register"

                        className="border px-8 py-4 rounded-xl">

                        Join Now

                    </Link>

                </div>

            </div>

        </section>

    );

}