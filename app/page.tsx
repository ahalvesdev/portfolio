export const dynamic = 'force-dynamic'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function Home() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: false })
    .limit(6)

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 pt-32 pb-16">

      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Desenvolvedor Fullstack
          </span>
        </h1>

        <p className="text-zinc-400 max-w-xl mx-auto">
        Criando sistemas reais com foco em performace e experiência do usuário
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition duration-300"
          >
            {/* IMAGEM */}
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTEÚDO */}
            <div className="p-5">
              <Link href={`/projects/${project.slug}`}>
                <h2 className="text-xl font-semibold hover:text-purple-400 transition cursor-pointer">
                  {project.title}
                </h2>
              </Link>

              <p className="text-zinc-400 mt-2">
                {project.description}
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://casa-da-empada-59260.web.app"
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
                >
                  Ver
                </a>

                <a
                  href={project.github_url}
                  target="_blank"
                  className="text-sm border border-zinc-600 px-4 py-2 rounded-md hover:border-white transition"
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA FINAL */}
      <Link href="/projects">
        <div className="flex justify-center mt-14">
          <span className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition cursor-pointer">
            Ver todos os projetos →
          </span>
        </div>
      </Link>

    </main>
  )
}