
'use client'

import { useFormularioStore } from '@/lib/store'

export default function PreviewPage() {
  const { formularios, formularioAtivoId } = useFormularioStore()
  const formulario = formularios.find(f => f.id === formularioAtivoId)

  if (!formulario) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-center flex items-center justify-center text-gray-800 dark:text-gray-100">
        <p>Nenhum formulário selecionado.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{formulario.titulo}</h1>
      <div className="space-y-6">
        {formulario.perguntas.map((pergunta, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <p className="font-medium text-lg mb-2">{pergunta.titulo}</p>
            <input
              disabled
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              placeholder="Resposta"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
