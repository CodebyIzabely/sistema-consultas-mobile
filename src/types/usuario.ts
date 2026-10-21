   export interface Usuario {
     id: number;
     nome: string;
   }
   
   export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  papel: "paciente" | "medico";
  cpf?: string;
  telefone?: string;
  medicoId?: number;
}