'use client'

import { useFormularioStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function PreviewPage() {
  const { formularios, formularioAtivoId } = useFormularioStore()
  const formulario = formularios.find(f => f.id === formularioAtivoId)

  if (!formulario) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500 px-4">
        <div className="text-center space-y-2">
          <p className="text-lg font-medium">Nenhum formulário selecionado.</p>
          <Link href="/">
            <Button variant="outline">← Voltar</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Visualizar Formulário</h1>
          <Link href="/">
            <Button variant="outline">← Voltar</Button>
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-md shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4 font-semibold bg-gray-50 text-lg">
            {formulario.titulo}
          </div>
          <div className="p-6 space-y-4">
            {formulario.perguntas.length === 0 && (
              <p className="text-sm text-gray-500">Este formulário ainda não possui perguntas.</p>
            )}

            {formulario.perguntas.map((pergunta, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm">
                <CardContent className="py-4 space-y-1">
                  <p className="font-medium text-base">{index + 1}. {pergunta.titulo}</p>
                  <p className="text-sm text-gray-500">
                    Tipo: <span className="capitalize">{pergunta.tipo.replace(/_/g, ' ')}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {pergunta.obrigatoria ? 'Obrigatória' : 'Opcional'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}