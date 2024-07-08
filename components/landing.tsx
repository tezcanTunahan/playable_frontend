import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <h1 className="text-3xl font-semibold">
        Welcome to the PLAYABLE FACTORY case study
      </h1>
      <p>
        If you don&apos;t want to create account you can login as <br />{" "}
        <span className="font-bold text-green-500">
          email: t@gmail.com password: 123456
        </span>
        <span> || </span>
        <span className="font-bold text-green-500">
          email: a@gmail.com password: 123456
        </span>
        <br />
        login as two different users. so you can see how the todos are different
        for each user.
      </p>
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
      {/* missing parts */}
      <ul className="list-inside list-disc text-lg font-semibold text-red-700">
        <li>
          I didn&apos;t implement the email verification mechanism. maybe when a
          user register we should send an email with a verification token. and
          when the user click on the link we can verify the user.
        </li>
        <li>
          I didn&apos;t implement the forgot password mechanism. so if a user
          forgets his/her password, there is no way to reset it.
        </li>
        <li>
          When user try to login with wrong credentials, there is no protection
          against spamming the login button. I think we should implement a rate
          limiter to prevent this. user can try to login 5 times in 5 minutes.
          if the user try to login more than 5 times in 5 minutes,
        </li>
        <li className="">
          I didn&apos;t implement refresh token mechanism, its just access
          token. because of that I made the access token expiration time longer
          but its not the best practice.
        </li>
        <li className="">
          When we change a todo status, a request is made to the server to get
          the updated todo list, which causes the list to refresh. There might
          be a smoother way to do this. For instance, if our API request is
          successful, we can update our local todos list state, or we could use
          WebSockets. I never use websockets before, so I just guess it might
          be.
        </li>

        <li>
          user can change todo status by clicking on the todo card. but user
          cant change the todo title or description.
        </li>
        <li className="">
          I think 2 days is not enough for me to learn and implement all the
          features that I want to implement.
        </li>
      </ul>
    </div>
  );
}
