import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { nanoid } from 'nanoid'
import { TipoPergunta } from './types'

interface Pergunta {
  titulo: string
  tipo: TipoPergunta
  obrigatoria: boolean
  opcoes_respostas: string[]
}

interface Formulario {
  id: string
  titulo: string
  perguntas: Pergunta[]
}

interface StoreState {
  formularios: Formulario[]
  formularioAtivoId: string | null
  adicionarFormulario: (titulo: string) => void
  adicionarPergunta: (payload: Pergunta & { formularioId: string }) => void
  setFormularioAtivo: (id: string) => void
}

export const useFormularioStore = create<StoreState>()(
  persist(
    (set) => ({
      formularios: [],
      formularioAtivoId: null,

      adicionarFormulario: (titulo) =>
        set((state) => {
          const novo = { id: nanoid(), titulo, perguntas: [] }
          return {
            formularios: [...state.formularios, novo],
            formularioAtivoId: novo.id
          }
        }),

      adicionarPergunta: ({ formularioId, ...pergunta }) =>
        set((state) => {
          const formularios = state.formularios.map((f) =>
            f.id === formularioId
              ? { ...f, perguntas: [...f.perguntas, pergunta] }
              : f
          )
          return { formularios }
        }),

      setFormularioAtivo: (id) => set({ formularioAtivoId: id })
    }),
    {
      name: 'formulario-storage' // nome da chave no localStorage
    }
  )
)