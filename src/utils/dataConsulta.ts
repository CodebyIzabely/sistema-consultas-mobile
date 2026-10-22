const DIAS_NA_JANELA = 60;

export function parsearDataBR(texto: string): Date | null {
  const partes = texto.trim().split("/");
  if (partes.length !== 3) {
    return null;
  }

  const [diaTexto, mesTexto, anoTexto] = partes;
  const dia = Number(diaTexto);
  const mes = Number(mesTexto);
  const ano = Number(anoTexto);
  const data = new Date(ano, mes - 1, dia);

  if (Number.isNaN(data.getTime())) {
    return null;
  }

  if (data.getDate() !== dia || data.getMonth() !== mes - 1 || data.getFullYear() !== ano) {
    return null;
  }

  return data;
}

export function mesmaDataCivil(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatarDataBR(data: Date): string {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  return `${dia}/${mes}/${data.getFullYear()}`;
}

export function dataEstaNaJanela(data: Date): boolean {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const limite = new Date(hoje);
  limite.setDate(limite.getDate() + DIAS_NA_JANELA);
  const dia = new Date(data);
  dia.setHours(0, 0, 0, 0);
  return dia >= hoje && dia <= limite;
}

export function mesesDaJanela(): Date[] {
  const hoje = new Date();
  const limite = new Date(hoje);
  limite.setDate(limite.getDate() + DIAS_NA_JANELA);

  const meses: Date[] = [];
  const cursor = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  while (cursor <= limite) {
    meses.push(new Date(cursor));
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return meses;
}

export function validarDataAgenda(data: Date | null): string | null {
  if (!data) {
    return "Escolha uma data.";
  }
  if (!dataEstaNaJanela(data)) {
    return "Escolha uma data dentro do período disponível.";
  }
  return null;
}