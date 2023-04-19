import { FaTruck } from "react-icons/fa";
const About = () => {
  return (
    <section className="h-screen m-4 grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
        <li className="flex gap-2 items-center">
          <span className="text-3xl text-indigo-500">
            <FaTruck />
          </span>
          <h1 className="text-black font-bold md:text-4xl lg:text-5xl">
            SENDIT
          </h1>
        </li>
        <p className="pt-4 pr-0 mb-4 font-medium text-md text-black tracking-relaxed lg:pr-16">
          Welcome to Sendit - your go-to parcel delivery app! We are a team of
          dedicated individuals passionate about providing reliable and
          efficient parcel delivery services for individuals and businesses
          alike.
        </p>
        <p className="pt-4 pr-0 mb-4 font-medium text-md text-black tracking-relaxed lg:pr-16">
          At Sendit, we understand that time and convenience are of utmost
          importance when it comes to parcel delivery. That's why we have
          developed a user-friendly app that allows you to book, track, and
          manage your parcel deliveries with just a few taps on your smartphone.
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="3 women looking at a laptop"
          className="object-cover w-full h-64 bg-gray-100 md:h-full"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
