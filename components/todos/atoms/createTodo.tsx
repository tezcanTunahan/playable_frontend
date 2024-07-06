"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/api";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function CreateTodo({ className }: { className?: string }) {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [img, setImg] = React.useState<File | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  const handleClick = async () => {
    api.post("/todo", { title, desc, img: "selam" }).then(() => {
      setTitle("");
      setDesc("");
      setImg(null);
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-20 dark:border-slate-800 dark:bg-slate-950",
        className,
      )}
    >
      <Label>Todo title</Label>
      <Input
        value={title}
        onChange={handleTitleChange}
        placeholder="New todo"
      />
      <div>
        <Label>Picture</Label>
        <div className="flex gap-4">
          <Input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
            placeholder="Upload picture"
          />
          {img && (
            <Image
              src={URL.createObjectURL(img)}
              alt="Picture"
              className="rounded-xl"
              width={40}
              height={40}
            />
          )}
        </div>
      </div>
      <Label>description</Label>
      <Textarea
        value={desc}
        onChange={handleContentChange}
        placeholder="Todo description"
      />
      <Button onClick={handleClick}>Create todo</Button>
    </div>
  );
}
