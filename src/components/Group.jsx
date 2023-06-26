import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Emmanuel Mutisya',
    title: 'Software Engineer',
    role: 'Admin',
    email: 'emmanuelmutisya254@gmail.com',
    telephone: '+254792754923',
    imageUrl:
      'https://mutisya.techmates.team/wp-content/uploads/2023/06/Emmax.jpeg',
  },
  {
    name: 'Emilly Wanjiku',
    title: 'Software Engineer',
    role: 'Admin',
    email: 'emmanuelmutisya254@gmail.com',
    telephone: '+254715342910',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU',
  },
  {
    name: 'Catherine Renee',
    title: 'Software Engineer',
    role: 'Admin',
    email: 'emmanuelmutisya254@gmail.com',
    telephone: '+254723489197',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU',
  },
  {
    name: 'Gikonyo Otieno',
    title: 'Software Engineer',
    role: 'Admin',
    email: 'emmanuelmutisya254@gmail.com',
    telephone: '+254716557517',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQFJ-uo5U0ToGw/profile-displayphoto-shrink_800_800/0/1684404383203?e=1693440000&v=beta&t=yxO0wu_2WC2SmgnKa6HeYa0uZjlxxUUqa0hXY5eDAcg',
  },
  {
    name: 'John Vundi',
    title: 'Software Engineer',
    role: 'Admin',
    email: 'emmanuelmutisya254@gmail.com',
    telephone: '+254778878232',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQGqP1ruioQCOQ/profile-displayphoto-shrink_800_800/0/1687712797737?e=1693440000&v=beta&t=jra-qKcDijDGeuDZrjRir4YN77ojGaGTcP99r_J8fPs',
  },
  {
    name: 'Khalif Onyango',
    title: 'Software Engineer',
    role: 'Admin',
    email: 'emmanuelmutisya254@gmail.com',
    telephone: '+254743425004',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU',
  },
]

export default function Group() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 border">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  {person.telephone}
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
