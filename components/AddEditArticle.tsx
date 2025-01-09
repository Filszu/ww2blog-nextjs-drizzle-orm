"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css'

interface Article {
  id?: number
  title: string
  category: string
  image: string
  specifications: string
  development: string
  performance: string
  legacy: string
}

interface AddEditArticleProps {
  article?: Article | null
  onSave: () => void
}

const emptyArticle: Article = {
  title: '',
  category: '',
  image: '',
  specifications: '',
  development: '',
  performance: '',
  legacy: ''
}

export function AddEditArticle({ article, onSave }: AddEditArticleProps) {
  const [formData, setFormData] = useState<Article>(article || emptyArticle)

  useEffect(() => {
    if (article) {
      setFormData(article)
    } else {
      setFormData(emptyArticle)
    }
  }, [article])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRichTextChange = (content: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: content }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would be an API call
    console.log(formData)
    onSave()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select name="category" value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
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
        <Label htmlFor="image">Image URL</Label>
        <Input id="image" name="image" value={formData.image} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="specifications">Specifications</Label>
        {typeof window !== 'undefined' && (
          <ReactQuill 
            theme="snow" 
            value={formData.specifications} 
            onChange={(content) => handleRichTextChange(content, 'specifications')} 
          />
        )}
      </div>
      <div>
        <Label htmlFor="development">Development and Production</Label>
        {typeof window !== 'undefined' && (
          <ReactQuill 
            theme="snow" 
            value={formData.development} 
            onChange={(content) => handleRichTextChange(content, 'development')} 
          />
        )}
      </div>
      <div>
        <Label htmlFor="performance">Combat Performance</Label>
        {typeof window !== 'undefined' && (
          <ReactQuill 
            theme="snow" 
            value={formData.performance} 
            onChange={(content) => handleRichTextChange(content, 'performance')} 
          />
        )}
      </div>
      <div>
        <Label htmlFor="legacy">Legacy</Label>
        {typeof window !== 'undefined' && (
          <ReactQuill 
            theme="snow" 
            value={formData.legacy} 
            onChange={(content) => handleRichTextChange(content, 'legacy')} 
          />
        )}
      </div>
      <Button type="submit">Save Article</Button>
    </form>
  )
}

