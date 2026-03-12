export function exportCandidatesToCsv(candidates) {
  const headers = ["id", "nombre", "propuesta", "espacioAcademico", "votos"];
  const separator = ";";

  const rows = candidates.map((candidate) => [
    candidate.id,
    `"${String(candidate.nombre).replaceAll('"', '""')}"`,
    `"${String(candidate.propuesta).replaceAll('"', '""')}"`,
    `"${String(candidate.espacioAcademico ?? "General").replaceAll('"', '""')}"`,
    candidate.votos,
  ]);

  const csvContent =
    "\uFEFF" + // ← BOM UTF-8 para que Excel reconozca acentos
    [headers.join(separator), ...rows.map((row) => row.join(separator))].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "candidatos_fullstack.csv";
  a.click();

  URL.revokeObjectURL(url);
}
