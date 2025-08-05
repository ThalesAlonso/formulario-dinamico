'use client'

import { useFormularioStore } from '@/lib/store'
import { Button } from './ui/button'
import { useState } from 'react'
import Link from 'next/link'
import type { TipoPergunta } from '@/lib/types'

export default function FormularioBuilder() {
  const {
    formularios,
    adicionarFormulario,
    formularioAtivoId,
    setFormularioAtivo,
    adicionarPergunta
  } = useFormularioStore()

  const [titulo, setTitulo] = useState('')
  const [tituloPergunta, setTituloPergunta] = useState('')
  const [tipoPergunta, setTipoPergunta] = useState<TipoPergunta>('texto_livre')
  const [obrigatoria, setObrigatoria] = useState(false)

  const handleAdicionarFormulario = () => {
    if (titulo.trim() === '') return
    adicionarFormulario(titulo)
    setTitulo('')
  }

  const formularioAtivo = formularios.find((f) => f.id === formularioAtivoId)

  const salvarPergunta = () => {
    if (tituloPergunta.trim() === '' || !formularioAtivoId || !formularioAtivo) return

adicionarPergunta(formularioAtivoId, {
  id: crypto.randomUUID(),
  id_formulario: formularioAtivoId,
  titulo: tituloPergunta,
  texto: tituloPergunta,
  codigo: `P${formularioAtivo.perguntas.length + 1}`,
  tipo: tipoPergunta, // ✅ <-- ESSA LINHA RESOLVE o erro
  tipo_pergunta: tipoPergunta,
  obrigatoria,
  ordem: formularioAtivo.perguntas.length,
  sub_pergunta: false,
  opcoes_respostas: [],
  condicional: undefined,
})


    setTituloPergunta('')
    setTipoPergunta('texto_livre')
    setObrigatoria(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        Criar Formulário
      </h1>

<div className="bg-white shadow rounded-lg p-4 space-y-4 mb-6">
  <label className="block font-medium text-gray-700">Título do formulário</label>
  <input
    type="text"
    className="w-full border border-gray-300 rounded px-4 py-2"
    placeholder="Digite o título"
    value={titulo}
    onChange={(e) => setTitulo(e.target.value)}
  />
  <Button onClick={handleAdicionarFormulario} className="w-full">
    ➕ Adicionar
  </Button>
</div>


      {formularioAtivo && (
        <div className="bg-white shadow rounded-lg p-4 space-y-6">
          <h2 className="text-xl font-semibold text-red-700">{formularioAtivo.titulo}</h2>
          <p className="text-gray-500">Perguntas: {formularioAtivo.perguntas.length}</p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
              🌿 Nova Pergunta
            </h3>

            <input
              type="text"
              placeholder="Título da pergunta"
              value={tituloPergunta}
              onChange={(e) => setTituloPergunta(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <select
              value={tipoPergunta}
              onChange={(e) =>
                setTipoPergunta(e.target.value as TipoPergunta)
              }
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="texto_livre">Texto Livre</option>
              <option value="multipla_escolha">Múltipla Escolha</option>
              <option value="Sim_Nao">Sim/Não</option>
              <option value="unica_escolha">Única Escolha</option>
              <option value="Inteiro">Inteiro</option>
              <option value="Numero_com_duas_casas_decimais">Número com duas casas decimais</option>
            </select>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={obrigatoria}
                onChange={(e) => setObrigatoria(e.target.checked)}
              />
              Obrigatória?
            </label>

            <Button onClick={salvarPergunta} className="w-full">
              💾 Salvar Pergunta
            </Button>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-pink-700 flex items-center gap-2 mt-6">
              📌 Perguntas Salvas
            </h4>
            {formularioAtivo.perguntas.map((p) => (
              <div key={p.id} className="text-sm mt-2">
                <strong>{p.texto}</strong>
                <div className="italic text-gray-500">{p.tipo_pergunta}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/preview">
              <Button className="w-full">📄 Visualizar Formulário</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
