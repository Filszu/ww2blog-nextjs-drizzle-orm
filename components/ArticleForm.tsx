"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { Article, NewArticle } from "@/db/schema";
import { createArticle, updateArticle } from "@/app/actions/articles";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

type ArticleFormProps = {
  article?: Article;
  isEdit?: boolean;
};

const richTextFields = [
  "specifications",
  "development_and_production",
  "combat_performance",
  "legacy",
];

export function ArticleForm({ article, isEdit = false }: ArticleFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState<NewArticle>({
    title: article?.title ?? "",
    slug: article?.slug ?? "",
    intro: article?.intro ?? "",
    category: article?.category ?? "",
    select_a_category: article?.select_a_category ?? "",
    image_url: article?.image_url ?? "",
    specifications: article?.specifications ?? "",
    development_and_production: article?.development_and_production ?? "",
    combat_performance: article?.combat_performance ?? "",
    legacy: article?.legacy ?? "",
    created_by: article?.created_by ?? "admin",
    modified_by: article?.modified_by ?? "admin",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRichTextChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEdit && article) {
        await updateArticle(article.uuid, formData);
        toast({
          title: "Article Updated",
          description: "Your article has been successfully updated.",
        });
      } else {
        await createArticle(formData);
        toast({
          title: "Article Created",
          description: "Your new article has been successfully created.",
        });
      }
      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Error saving article:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "An unknown error occurred while saving the article.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="intro">Intro</Label>
        <Textarea
          id="intro"
          name="intro"
          value={formData.intro ?? ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          name="category"
          value={formData.category ?? ""}
          onValueChange={(value) => handleSelectChange(value, "category")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tanks">Tanks</SelectItem>
            <SelectItem value="planes">Planes</SelectItem>
            <SelectItem value="ships">Ships</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="image_url">Image URL</Label>
        <Input
          id="image_url"
          name="image_url"
          value={formData.image_url ?? ""}
          onChange={handleChange}
        />
      </div>

      {richTextFields.map((field) => (
        <div key={field}>
          <Label htmlFor={field}>
            {field
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Label>
          {typeof window !== "undefined" && (
            <div className="min-h-[200px]">
              <ReactQuill
                theme="snow"
                value={formData[field as keyof NewArticle] as string}
                onChange={(content) => handleRichTextChange(content, field)}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link"],
                    ["clean"],
                  ],
                }}
              />
            </div>
          )}
        </div>
      ))}

      <Button type="submit">{isEdit ? "Update" : "Create"} Article</Button>
    </form>
  );
}
