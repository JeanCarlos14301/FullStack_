import { useMemo, useState } from "react";
import CandidateList from "../components/CandidateList";
import { academicSpaces, DEFAULT_ACADEMIC_SPACE } from "../data/academicSpaces";

function CandidatesView({ candidates, onEdit, onDelete, onVote }) {
  const [query, setQuery] = useState("");
  const [spaceFilter, setSpaceFilter] = useState("all");

  const availableSpaces = useMemo(() => {
    const fromCandidates = candidates
      .map((candidate) => candidate.espacioAcademico || DEFAULT_ACADEMIC_SPACE)
      .filter(Boolean);

    return Array.from(new Set([...academicSpaces, ...fromCandidates]));
  }, [candidates]);

  const filteredCandidates = useMemo(() => {
    const text = query.trim().toLowerCase();

    return candidates.filter((candidate) => {
      const candidateSpace =
        candidate.espacioAcademico || DEFAULT_ACADEMIC_SPACE;
      const matchSpace =
        spaceFilter === "all" || candidateSpace === spaceFilter;
      if (!matchSpace) return false;

      if (!text) return true;

      return (
        candidate.nombre.toLowerCase().includes(text) ||
        candidate.propuesta.toLowerCase().includes(text)
      );
    });
  }, [candidates, query, spaceFilter]);

  return (
    <section className="view">
      <section className="card">
        <h2>Listado de candidatos</h2>
        <p className="muted">
          Administra candidatos, edítalos, elimínalos o registra votos manualmente.
        </p>

        <div className="filter-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre o propuesta"
          />

          <select
            value={spaceFilter}
            onChange={(e) => setSpaceFilter(e.target.value)}
            aria-label="Filtrar por espacio academico"
          >
            <option value="all">Todos los espacios</option>
            {availableSpaces.map((space) => (
              <option key={space} value={space}>
                {space}
              </option>
            ))}
          </select>

          <span className="filter-count">
            Mostrando {filteredCandidates.length} de {candidates.length}
          </span>
        </div>

        <CandidateList
          candidates={filteredCandidates}
          onEdit={onEdit}
          onDelete={onDelete}
          onVote={onVote}
        />
      </section>
    </section>
  );
}

export default CandidatesView;
