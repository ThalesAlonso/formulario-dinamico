
'use client'

import { useFormularioStore } from '@/lib/store'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react'
import { PerguntaEditor } from './PerguntaEditor'
import Link from 'next/link'

export default function FormularioBuilder() {
  const { formularios, adicionarFormulario, formularioAtivoId, setFormularioAtivo } =
    useFormularioStore()
  const [titulo, setTitulo] = useState('')

  const handleAdicionar = () => {
    if (titulo.trim() === '') return
    adicionarFormulario(titulo)
    setTitulo('')
  }

  const formularioAtivo = formularios.find((f) => f.id === formularioAtivoId)

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Construtor de Formulário</h1>
          <Link href="/preview">
            <Button variant="outline">Visualizar</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Formulário</label>
              <Input
                placeholder="Título do formulário"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <Button className="mt-2" onClick={handleAdicionar}>
                Adicionar Formulário
              </Button>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">Formulários Criados</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {formularios.map((formulario) => (
                  <Button
                    key={formulario.id}
                    variant={formulario.id === formularioAtivoId ? 'default' : 'ghost'}
                    onClick={() => setFormularioAtivo(formulario.id)}
                  >
                    {formulario.titulo}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {formularioAtivo ? (
              <>
                <PerguntaEditor formularioId={''} />
              </>
            ) : (
              <p className="text-gray-500">Selecione um formulário para adicionar perguntas.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
