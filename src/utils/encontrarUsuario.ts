import { Usuario } from "../types/usuario";

export function encontrarUsuario(
  usuarios: Usuario[],
  identificador: string,
  senha: string
): Usuario | undefined {
  const alvo = identificador.trim().toLowerCase();
  return usuarios.find(
    (usuario) =>
      (usuario.email.toLowerCase() === alvo ||
        usuario.login?.toLowerCase() === alvo) &&
      usuario.senha === senha
  );
}