import LandingNavbar from "@/components/landingNavbar";
import Link from "next/link";

const devLinks = [
  {
    label: "Website",
    href: "https://tunahantezcan.com",
    text: "tunahantezcan.com",
  },
  {
    label: "Email",
    href: "mailto:ttezcan.1999@gmail.com",
    text: "ttezcan.1999@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tunahantezcan/",
    text: "linkedin.com/in/tunahantezcan",
  },
  {
    label: "GitHub",
    href: "https://github.com/tezcanTunahan",
    text: "github.com/tezcanTunahan",
  },
];

const projectLinks = [
  {
    label: "Live link",
    href: "http://t8kgsc04808ow44wwosw404s.69.62.113.223.sslip.io/",
    text: "Playable Factory Live",
  },
  {
    label: "Frontend GitHub",
    href: "https://github.com/tezcanTunahan/playable_frontend",
    text: "Frontend Repo",
  },
  {
    label: "Backend GitHub",
    href: "https://github.com/tezcanTunahan/playable_backend",
    text: "Backend Repo",
  },
];

const ExternalLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {text}
  </Link>
);

export default function Page() {
  return (
    <div>
      <LandingNavbar />

      <main className="mt-20 w-10/12 mx-auto">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Playable Factory - Software Engineer Case Study
        </h1>

        <section className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">Developer Info</h3>
          <p className="mb-2">Tunahan Tezcan</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            {devLinks.map((item) => (
              <p key={item.label}>
                <strong>{item.label}: </strong>
                <ExternalLink href={item.href} text={item.text} />
              </p>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">Projects Info</h3>
          <div className="flex flex-col gap-2">
            {projectLinks.map((item) => (
              <p key={item.label}>
                <strong>{item.label}: </strong>
                <ExternalLink href={item.href} text={item.text} />
              </p>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">Tech Stack</h3>

          <div className="mb-4">
            <h4 className="font-semibold">Frontend</h4>
            <ul className="flex flex-wrap gap-2">
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Shadcn/ui</li>
              <li>Axios</li>
              <li>TanStack Query</li>
              <li>Zustand</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Backend</h4>
            <ul className="flex flex-wrap gap-2">
              <li>TypeScript</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">Deployment</h4>
            <ul className="flex flex-wrap gap-2">
              <li>Docker</li>
              <li>VPS</li>
              <li>Coolify</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">How to Run Locally</h3>

          <p>node version: v22.14.0</p>
          <article className="mb-4">
            <h4 className="font-semibold">Frontend</h4>
            <p className="whitespace-pre-line">
              check .env.example file
              {"\n"} Add and edit your .env file with your backend API URL.
              {"\n"}git clone
              https://github.com/tezcanTunahan/playable_frontend.git
              {"\n"}cd playable_frontend/
              {"\n"}npm install
              {"\n"}npm run dev
              {"\n"}It will run on http://localhost:3000.
            </p>
          </article>

          <article className="mb-4">
            <h4 className="font-semibold">Backend</h4>
            <p className="whitespace-pre-line">
              You need a MongoDB database to access. You can create one on your
              VPS or via cloud.mongodb.com and set up your .env file as per
              .env.example.{"\n"}
              git clone https://github.com/tezcanTunahan/playable_backend.git
              {"\n"}cd playable_backend
              {"\n"}npm install
              {"\n"}npm run dev
            </p>
          </article>

          <article className="mb-4">
            <h4 className="font-semibold">Login & Register</h4>
            <p className="whitespace-pre-line">
              admin account:
              {"\n"} mail: admin@gmail.com
              {"\n"} password: 123456
              {"\n"} user accunt
              {"\n"} mail: user@gmail.com
              {"\n"} password: 123456
              {"\n"} there is only one admin account but you can register more
              users
            </p>
          </article>

          <article>
            <h4 className="font-semibold">dev notes</h4>
            <p className="whitespace-pre-line">
              I only implemented login with an access token for faster
              development experience, but it would be better to have refresh
              tokens and HTTP-only cookies. I should also add input sanitization
              and more validation on the backend. Some features from the task
              weren’t implemented because they would take more time than I
              anticipated, but my code structure is clear, and if I add them
              later, I will follow the same structure.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
