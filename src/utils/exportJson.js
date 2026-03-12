import { DEFAULT_ACADEMIC_SPACE } from "../data/academicSpaces";

export function exportCandidatesToJson(candidates) {
  const normalized = candidates.map((candidate) => ({
    ...candidate,
    espacioAcademico:
      String(candidate.espacioAcademico ?? DEFAULT_ACADEMIC_SPACE).trim() ||
      DEFAULT_ACADEMIC_SPACE,
  }));

  const data = {
    exportedAt: new Date().toISOString(),
    candidates: normalized,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "candidatos_fullstack.json";
  a.click();
  URL.revokeObjectURL(url);
}
