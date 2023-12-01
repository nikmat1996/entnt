import Image from "next/image";
import p1 from "../public/images/p1.avif";
import p2 from "../public/images/p2.avif";
import p3 from "../public/images/p3.avif";
import p4 from "../public/images/p4.avif";
import LocationIcon from "./components/locationIcon";
import CloseIcon from "./components/closeIcon";

const users = [
  {
      id: 1,
      name: "Leslie Abbott",
      role: "Co-Founder / CEO",
      imageUrl: p1,
      location: "Broadway",
  },
  {
      id: 2,
      name: "Blake Alexander",
      role: "Account Coordinator",
      imageUrl: p2,
      location: "Wall Street",
  },
  {
      id: 3,
      name: "Cameron Barrett",
      role: "Lead Developer",
      imageUrl: p3,
      location: "Madison Avenue",
  },
  {
      id: 4,
      name: "Dana Fisher",
      role: "Marketing Specialist",
      imageUrl: p4,
      location: "Lexington Avenue",
  },
];

export default function Home() {
    return (
      <main className="min-h-screen  p-24  ">
            <h1 className="text-slate-300">Hello</h1>
            <ul role="list" className="flex flex-col gap-4 ">
                {users.map((person) => (
                  <li key={person.id} className="flex relative justify-between gap-x-6 p-5 bg-slate-800 rounded-2xl group hover:bg-blue-950 transition-all ">
                        <section className="flex min-w-0 gap-x-4">
                            <span className="absolute top-0 right-0 invisible cursor-pointer opacity-0 rounded-full bg-blue-800 transition-all hover:bg-blue-500 group-hover:opacity-100 group-hover:visible group-hover:translate-x-2 group-hover:-translate-y-3"><CloseIcon /></span>
                            <Image
                                className="h-12 w-12 flex-none rounded-full bg-gray-50 opacity-90 group-hover:opacity-100"
                                src={person.imageUrl}
                                width={6}
                                height={6}
                                alt=""
                                unoptimized
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-400 group-hover:text-blue-200">
                                    {person.name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500 group-hover:text-gray-400 flex items-center gap-1">
                                    <LocationIcon  />{person.location}
                                </p>
                            </div>
                        </section>
                        <section className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                                Co-Founder / CEO
                            </p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Last seen{" "}
                                <time datetime="2023-01-23T13:23Z">3h ago</time>
                            </p>
                        </section>
                    </li>
                ))}
            </ul>
        </main>
    );
}
