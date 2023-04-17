import { FaTruck } from "react-icons/fa";
const Hero = () => {
    return ( 
        <section className="h-screen w-full] mx-4 grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2">
  <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
  <li className="flex gap-2 items-center">
        <span className="text-3xl text-indigo-500"><FaTruck /></span>
        <h1 className="text-indigo-500 font-mono font-bold text-xl">SENDIT</h1>
    </li>
    <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">Take Control of your Delivery Experience.</h1>
    <div className="flex gap-3 items-center mt-4 md:justify-center">
        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
            Log in
        </a>
        <a href="javascript:void(0)" className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg">
            Sign up
        </a>
    </div>
    <p className="pt-4 pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">Get the #1 Business Messenger and start delivering personalized experiences at every stage of the customer journey.</p>
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
}
 
export default Hero;