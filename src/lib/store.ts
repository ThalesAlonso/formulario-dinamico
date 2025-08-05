import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Formulario, Pergunta } from './types'
import { v4 as uuidv4 } from 'uuid'

interface FormularioState {
  formularios: Formulario[]
  formularioAtivoId?: string
  setFormularioAtivo: (id: string) => void
  adicionarFormulario: (titulo: string) => void
  adicionarPergunta: (formularioId: string, pergunta: Pergunta) => void
}

export const useFormularioStore = create<FormularioState>()(
  persist(
    (set, get) => ({
      formularios: [],
      formularioAtivoId: undefined,

      setFormularioAtivo: (id) => set({ formularioAtivoId: id }),

      adicionarFormulario: (titulo) =>
        set((state) => {
          const novo: Formulario = {
            id: uuidv4(),
            titulo,
            descricao: '',
            ordem: state.formularios.length + 1,
            perguntas: [],
          }
          return {
            formularios: [...state.formularios, novo],
            formularioAtivoId: novo.id,
          }
        }),

      adicionarPergunta: (formularioId, pergunta) =>
        set((state) => ({
          formularios: state.formularios.map((form) =>
            form.id === formularioId
              ? { ...form, perguntas: [...form.perguntas, pergunta] }
              : form
          ),
        }))
    }),
    {
      name: 'formulario-storage',
    }
  )
)