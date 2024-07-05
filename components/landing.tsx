import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">
        Welcome to the <br /> PLAYABLE FACTORY <br /> Case Study
      </h1>
      <p className="text-lg">
        This project is a demonstration of a full-stack To-Do application
        developed using Next.js for the frontend and Node.js with Express.js for
        the backend. The application also leverages MongoDB for data storage and
        JWT for authentication.
        <br />
        please click on{" "}
        <Link href="/login" className="font-semibold text-blue-600">
          login
        </Link>{" "}
        to get started
      </p>
    </div>
  );
}
