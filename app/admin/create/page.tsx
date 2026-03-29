'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function CreateProject() {
  const router = useRouter()

  const [form, setForm] = useState({
    title: '',
    description: '',
    content: '',
    image_url: '',
    live_url: '',
    github_url: '',
    slug: '',
  })

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: any) {
    e.preventDefault()

    await supabase.from('projects').insert([form])

    router.push('/admin/dashboard')
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-2xl mb-6">Novo Projeto</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800"
          />
        ))}

        <button className="bg-green-600 px-4 py-2 rounded">
          Criar Projeto
        </button>
      </form>
    </main>
  )
}