import {
  TruckIcon,
  HomeIcon,
  ShoppingCartIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";


const features = [
  {
    name: "Courier Services",
    description:
      "Have your parcels delivered to you via us. We offer courier services over both long and short distances as well as accomodate most special requests. ",
      icon: TruckIcon,
  },
  {
    name: "Door to Door Delivery",
    description:
      "Feel free to send your parcels from the comfort of your home and have the dropped of at your recipients' door step. ",
    icon: HomeIcon,
  },
  {
    name: "Grocery Delivery",
    description:
      "Enjoy the absolute convinience of having groceries delivered from wherever they maybe to wherever you are. Get the most out of your lazy day and make an order.",
    icon: ShoppingCartIcon,
  },
  {
    name: "Bulk Delivery Services",
    description:
      "Have large and/or heavy items you need moved? Feel free to make a delivery order and let us sort it out. We'll have your package anywhere you'd like as as soon as is possible.",
    icon: GlobeEuropeAfricaIcon,
  },
];

export default function Info() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage your deliveries
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from the broad variety of services we offer and find what suits your needs. For everything deliveries, we've got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
