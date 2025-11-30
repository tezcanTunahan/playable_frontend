import LandingNavbar from "@/components/landingNavbar";
import Link from "next/link";

export default function Page() {
  const devLinks = [
    {
      label: "url",
      href: "https://tunahantezcan.com",
      text: "tunahantezcan.com",
    },
    {
      label: "mail",
      href: "mailto:ttezcan.1999@gmail.com",
      text: "ttezcan.1999@gmail.com",
    },
    {
      label: "linkdin",
      href: "https://www.linkedin.com/in/tunahantezcan/",
      text: "linkedin.com/in/tunahantezcan",
    },
    {
      label: "github",
      href: "https://github.com/tezcanTunahan",
      text: "github.com/tezcanTunahan",
    },
  ];

  const projectLinks = [
    {
      label: "Live link",
      href: "http://t8kgsc04808ow44wwosw404s.69.62.113.223.sslip.io/",
      text: "http://t8kgsc04808ow44wwosw404s.69.62.113.223.sslip.io",
    },
    {
      label: "github frontend",
      href: "https://github.com/tezcanTunahan/playable_frontend",
      text: "https://github.com/tezcanTunahan/playable_frontend",
    },
    {
      label: "github backend",
      href: "https://github.com/tezcanTunahan/playable_backend",
      text: "https://github.com/tezcanTunahan/playable_backend",
    },
  ];

  const renderLink = (href: string, text: string) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </Link>
  );

  return (
    <div>
      <LandingNavbar />

      <main className="mt-20 w-10/12 mx-auto">
        <h1 className="mb-8 text-center">
          Playable Factory - Software Engineer Case Study
        </h1>

        <h3 className="mb-0.5">Developer Info</h3>
        <div className="flex flex-row gap-4 mb-6">
          <p>tunahan tezcan.</p>
          {devLinks.map((item) => (
            <p key={item.label}>
              <b>{item.label}: </b>
              {renderLink(item.href, item.text)}
            </p>
          ))}
        </div>

        <h3 className="mb-0.5">Projects info</h3>
        <div className="mb-6">
          {projectLinks.map((item) => (
            <p key={item.label}>
              <b>{item.label}: </b>
              {renderLink(item.href, item.text)}
            </p>
          ))}
        </div>
        <h3>Tech Stack</h3>

        <h4>Frontend</h4>
        <ul className="flex gap-2">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Shadcn/ui</li>
          <li>Axios</li>
          <li>TanStack Query</li>
          <li>Zustand</li>
        </ul>

        <h4>Backend</h4>
        <ul className="flex gap-2">
          <li>TypeScript</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>

        <h4>Deployment</h4>
        <ul className="flex gap-2 mb-6">
          <li>Docker</li>
          <li>VPS</li>
          <li>Coolify</li>
        </ul>

        <div>
          <h3>How to run locally </h3>
          <h4>frontend</h4>
          <p>
            git clone https://github.com/tezcanTunahan/playable_frontend.git
            <br />
            cd playable_frontend/ <br />
            npm install <br />
            npm run dev <br />
            it will be run on http://localhost:3000
          </p>
          <h4>backend</h4>
          <p>
            git clone https://github.com/tezcanTunahan/playable_backend.git
            <br />
            cd playable_backend <br />
            npm install <br />
            npm run dev <br />
            you needto mongodb database to acsess url I craete one on my vps you
            can do the same or you can crate on cloud.mongodb.com and time to
            create ur .env file as .env.example
          </p>
        </div>
      </main>
    </div>
  );
}
