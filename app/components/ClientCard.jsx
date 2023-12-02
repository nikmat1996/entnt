import CloseIcon from "./CloseIcon";
import Image from "next/image";
import LocationIcon from "./LocationIcon";
import useUserStore from "../store/zustand";

export default ({ person }) => {

    const deleteUser = useUserStore(state => state.deleteUser)

    return (
        <li
            key={person.id}
            className="flex relative justify-between gap-x-6 p-5 bg-slate-800 rounded-2xl group hover:bg-blue-950 transition-all hover:shadow-lg selection:text-sky-900 selection:bg-blue-400"
        >
            <section className="flex min-w-0 gap-x-4">
                <span
                    onClick={() => deleteUser(person.id)}
                    className="absolute peer top-0 right-0 invisible cursor-pointer opacity-0 rounded-full bg-blue-800 transition-all hover:bg-blue-500 group-hover:opacity-100 group-hover:visible group-hover:translate-x-2 group-hover:-translate-y-3"
                >
                    <CloseIcon />
                </span>
                <Image
                    className="h-12 w-12 flex-none rounded-full bg-gray-50 opacity-90 group-hover:opacity-100 peer-hover:opacity-10"
                    src={person.imageUrl}
                    width={6}
                    height={6}
                    alt=""
                    unoptimized
                />
                <div className="min-w-0 flex-auto peer-hover:[&>p]:line-through">
                    <p className="text-sm font-semibold leading-6 text-gray-400 transition-all group-hover:text-blue-200">
                        {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500 transition-all group-hover:text-gray-400 flex items-center gap-1">
                        <LocationIcon />
                        {person.location}
                    </p>
                </div>
            </section>
            <section className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                    Co-Founder / CEO
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                </p>
            </section>
        </li>
    );
};
