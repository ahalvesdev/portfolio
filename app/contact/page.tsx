'use client'

export default function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const name = (form[0] as HTMLInputElement).value
    const email = (form[1] as HTMLInputElement).value
    const message = (form[2] as HTMLTextAreaElement).value

    const mailtoLink = `mailto:ahalves.dev@gmail.com?subject=Contato de ${name}&body=Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`

    window.location.href = mailtoLink
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 pt-32 pb-16">
      <div className="max-w-2xl mx-auto">

        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Contato
          </span>
        </h1>

        <p className="text-zinc-400 mb-10">
          Quer falar comigo? Pode me mandar uma mensagem ou entrar em contato
          pelas redes abaixo.
        </p>

        {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm mb-2 text-zinc-300">Nome</label>
            <input
              type="text"
              required
              className="w-full p-3 rounded-md bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-purple-500 transition"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-zinc-300">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-md bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-purple-500 transition"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-zinc-300">Mensagem</label>
            <textarea
              required
              className="w-full p-3 rounded-md bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-purple-500 transition"
              rows={5}
              placeholder="Digite sua mensagem..."
            />
          </div>

          {/* BOTÃO EMAIL */}
          <button
            type="submit"
            className="w-full py-3 rounded-md font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition shadow-lg shadow-purple-500/20"
          >
            Enviar mensagem
          </button>
        </form>

        {/* BOTÃO WHATSAPP */}
        <a
          href="https://wa.me/5575998801513"
          target="_blank"
          className="block text-center w-full py-3 mt-4 rounded-md font-medium bg-green-600 hover:bg-green-700 transition"
        >
          Falar no WhatsApp
        </a>

        {/* REDES */}
        <div className="mt-10 flex gap-6 text-zinc-400">
          <a
            href="https://github.com/ahalvesdev"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anderson-alves-2aa4403b8"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </main>
  )
}