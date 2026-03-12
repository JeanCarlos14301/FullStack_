import { DEFAULT_ACADEMIC_SPACE } from "../data/academicSpaces";

export function importCandidatesFromJson(file, onSuccess, onError) {
  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);

      if (!parsed.candidates || !Array.isArray(parsed.candidates)) {
        throw new Error("Estructura inválida");
      }

      const normalized = parsed.candidates.map((candidate, index) => ({
        id: candidate.id ?? Date.now() + index,
        nombre: String(candidate.nombre ?? "").trim(),
        propuesta: String(candidate.propuesta ?? "").trim(),
        espacioAcademico: String(
          candidate.espacioAcademico ?? DEFAULT_ACADEMIC_SPACE
        ).trim() || DEFAULT_ACADEMIC_SPACE,
        votos: Number(candidate.votos ?? 0),
      }));

      onSuccess(normalized);
    } catch (error) {
      onError(error);
    }
  };

  reader.readAsText(file);
}
