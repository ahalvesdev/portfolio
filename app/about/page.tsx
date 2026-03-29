export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 pt-32 pb-16">
      <div className="max-w-4xl mx-auto">
        
        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Sobre mim
          </span>
        </h1>

        {/* INTRO */}
        <p className="text-zinc-300 text-lg mb-12 leading-relaxed">
        Me chamo Anderson e estou em transição para a área de desenvolvimento de software, com foco em desenvolvimento web.
Tenho me dedicado aos estudos de JavaScript e evoluído com React e Next.js, aplicando esses conhecimentos na construção de aplicações completas e funcionais.
Entre meus projetos, desenvolvi um sistema real com autenticação, painel administrativo e integração com banco de dados, buscando sempre simular cenários do mercado e resolver problemas práticos.
Busco minha primeira oportunidade na área para aplicar na prática minhas habilidades e evoluir como desenvolvedor.
        </p>

        {/* SEÇÕES */}
        <div className="space-y-10">
          
          <div>
            <h2 className="text-xl font-semibold mb-2">O que estou fazendo</h2>
            <p className="text-zinc-400 leading-relaxed">
             Plataforma em desenvolvimento para o piloto Fábio kveira (91), com o objetivo de centralizar informações sobre sua carreira, competições e conteúdos.
Conta com múltiplas páginas, formulários integrados com redirecionamento para WhatsApp e painel administrativo com autenticação para gerenciamento de conteúdo.
Desenvolvido com foco em aplicações reais, organização de código e experiência do usuário.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tecnologias</h2>
            <p className="text-zinc-400 leading-relaxed">
              Frontend:
              JavaScript, React, Next.js
              Backend / BaaS:
              Supabase
              Em evolução:
              TypeScript
              Ferramentas:
              Git, GitHub
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Objetivo</h2>
            <p className="text-zinc-400 leading-relaxed">
             Quero conquistar minha primeira oportunidade como desenvolvedor para colocar em prática o que venho construindo, contribuir com soluções úteis e seguir evoluindo com disciplina e propósito na área de tecnologia.
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}