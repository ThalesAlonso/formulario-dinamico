'use client'

import { useFormularioStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PreviewPage() {
  const { formularios, formularioAtivoId } = useFormularioStore()
  const formulario = formularios.find(f => f.id === formularioAtivoId)

  if (!formulario) return <p className="text-center mt-10">Nenhum formulário selecionado.</p>

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      {}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-xl">📄</span>
          Visualizar Formulário
        </h1>
        <Link href="/">
          <Button variant="outline">← Voltar</Button>
        </Link>
      </div>

      <h2 className="text-xl font-semibold mb-2">teste {formulario.titulo}</h2>
      <p className="text-sm text-gray-600 mb-6">Perguntas: {formulario.perguntas.length}</p>

      <form className="space-y-6">
        {formulario.perguntas.map((pergunta) => (
          <div key={pergunta.id}>
            <label className="block font-medium mb-1">{pergunta.texto}</label>
            <input
              type="text"
              placeholder="Sua resposta"
              className="border border-gray-300 rounded px-4 py-2 w-[600px] max-w-full"
            />
          </div>
        ))}

        <Button className="mt-6 flex items-center gap-2">
          <span className="text-base">💾</span>
          <span>Salvar Respostas</span>
        </Button>
      </form>
    </div>
  )
}
