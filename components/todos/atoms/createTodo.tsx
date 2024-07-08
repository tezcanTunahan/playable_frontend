"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef } from "react";

export default function CreateTodo({
  className,
  createTodo,
  loading,
}: {
  className?: string;
  createTodo: (title: string, desc: string, img: File | null) => Promise<void>;
  loading: boolean;
}) {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
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
    } else {
      setImg(null);
    }
  };

  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    await createTodo(title, desc, img);
    setTitle("");
    setDesc("");
    setImg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-20 dark:border-slate-800 dark:bg-slate-950",
        className,
      )}
      onSubmit={handleSubmit}
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
            ref={fileInputRef}
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
      <Button type="submit" disabled={loading}>
        Create todo
      </Button>
    </form>
  );
}
