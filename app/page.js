"use client"
import Image from "next/image";
import p1 from "../public/images/p1.avif";
import p2 from "../public/images/p2.avif";
import p3 from "../public/images/p3.avif";
import p4 from "../public/images/p4.avif";
import LocationIcon from "./components/LocationIcon";
import CloseIcon from "./components/CloseIcon";
import { useState } from "react";
import ClientList from "./components/ClientList";

// const usersJson = [
//     {
//         id: 1,
//         name: "Leslie Abbott",
//         role: "Co-Founder / CEO",
//         imageUrl: p1,
//         location: "Broadway",
//     },
//     {
//         id: 2,
//         name: "Blake Alexander",
//         role: "Account Coordinator",
//         imageUrl: p2,
//         location: "Wall Street",
//     },
//     {
//         id: 3,
//         name: "Cameron Barrett",
//         role: "Lead Developer",
//         imageUrl: p3,
//         location: "Madison Avenue",
//     },
//     {
//         id: 4,
//         name: "Dana Fisher",
//         role: "Marketing Specialist",
//         imageUrl: p4,
//         location: "Lexington Avenue",
//     },
// ];

export default function Home() {


    return (
        <main className="min-h-screen  p-24  ">
            <ClientList />
        </main>
    );
}
