'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [projects, setProjects] = useState<any[]>([])
  const [message, setMessage] = useState('')
  const [loadingId, setLoadingId] = useState<string | null>(null)

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser()

      if (!data.user) {
        router.push('/admin/login')
        return
      }

      fetchProjects()
    }

    checkUser()
  }, [])

  async function fetchProjects() {
    const { data } = await supabase
      .from('projects')
      .select('*')

    setProjects(data || [])
  }

  async function deleteProject(id: string) {
    setLoadingId(id)
    await supabase.from('projects').delete().eq('id', id)

    setMessage('Projeto deletado com sucesso')

    fetchProjects()
    setLoadingId(null)

    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 pt-28 pb-12">

      {/* TOAST */}
      {message && (
        <div className="fixed top-5 right-5 bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="flex gap-3">
          <button
            onClick={() => router.push('/admin/create')}
            className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
          >
            Novo Projeto
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-md border border-zinc-600 hover:border-white transition"
          >
            Sair
          </button>
        </div>
      </div>

      {/* LISTA */}
      <div className="space-y-4">
        {projects.length === 0 ? (
          <p className="text-zinc-400 text-center mt-10">
            Nenhum projeto encontrado
          </p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 p-5 rounded-lg flex justify-between items-center hover:border hover:border-zinc-700 transition"
            >
              <span className="font-medium">{project.title}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/admin/edit/${project.id}`)}
                  className="px-3 py-1 rounded-md border border-zinc-600 hover:border-white transition"
                >
                  Editar
                </button>

                <button
                  onClick={() => {
                    const confirmDelete = confirm('Tem certeza que deseja deletar?')

                    if (confirmDelete) {
                      deleteProject(project.id)
                    }
                  }}
                  disabled={loadingId === project.id}
                  className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 disabled:opacity-50 transition"
                >
                  {loadingId === project.id ? 'Deletando...' : 'Deletar'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </main>
  )
}