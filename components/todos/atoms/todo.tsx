import React from "react";

type TodoProps = {
  title: string;
  desc: string;
  status: boolean;
};

export default function Todo({ title, desc, status }: TodoProps) {
  return (
    <div>
      <h1>
        {title} {status ? "✅" : "❌"}
      </h1>
      <p>{desc}</p>
    </div>
  );
}
