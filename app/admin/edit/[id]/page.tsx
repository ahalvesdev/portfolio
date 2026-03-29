'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter, useParams } from 'next/navigation'

export default function EditProject() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [form, setForm] = useState({
    title: '',
    description: '',
    content: '',
    image_url: '',
    live_url: '',
    github_url: '',
    slug: '',
  })

  useEffect(() => {
    async function fetchProject() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single()

      if (data) setForm(data)
    }

    fetchProject()
  }, [id])

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleUpdate(e: any) {
    e.preventDefault()

    await supabase
      .from('projects')
      .update(form)
      .eq('id', id)

    router.push('/admin/dashboard')
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-2xl mb-6">Editar Projeto</h1>

      <form onSubmit={handleUpdate} className="space-y-4 max-w-lg">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            value={(form as any)[key]}
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800"
          />
        ))}

        <button className="bg-yellow-600 px-4 py-2 rounded">
          Salvar alterações
        </button>
      </form>
    </main>
  )
}