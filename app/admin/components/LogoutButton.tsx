'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    const response = await fetch('/api/admin/logout', { method: 'POST' })
    if (response.ok) {
      router.push('/admin/login')
    }
  }

  return (
    <Button onClick={handleLogout} variant="outline">Logout</Button>
  )
}

