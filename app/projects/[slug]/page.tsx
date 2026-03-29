import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!project) {
    notFound()
  }

  const techList = Array.isArray(project.tech) ? project.tech : []

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition mb-8"
        >
          ← Voltar para a home
        </Link>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-[320px] object-cover"
          />

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                Projeto em destaque
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>

            <p className="text-zinc-400 text-lg mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <section>
                <h2 className="text-xl font-semibold mb-3">Sobre o projeto</h2>
                <p className="text-zinc-300 leading-7 whitespace-pre-line">
                  {project.content}
                </p>
              </section>

              <aside className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 h-fit">
                <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
                  Tecnologias
                </h3>

                <div className="flex flex-wrap gap-2">
                  {techList.length > 0 ? (
                    techList.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-zinc-500 text-sm">
                      Nenhuma tecnologia cadastrada
                    </span>
                  )}
                </div>
              </aside>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition font-medium"
                >
                  🔗 Ver projeto
                </a>
              )}

              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-md border border-zinc-700 hover:border-zinc-200 transition font-medium"
                >
                  💻 Ver código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}