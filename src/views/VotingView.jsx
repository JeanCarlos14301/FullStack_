import { useMemo, useState } from "react";
import { academicSpaces, DEFAULT_ACADEMIC_SPACE } from "../data/academicSpaces";

function VotingView({ candidates, onVote }) {
  const [spaceFilter, setSpaceFilter] = useState("all");

  const availableSpaces = useMemo(() => {
    const fromCandidates = candidates
      .map((candidate) => candidate.espacioAcademico || DEFAULT_ACADEMIC_SPACE)
      .filter(Boolean);

    return Array.from(new Set([...academicSpaces, ...fromCandidates]));
  }, [candidates]);

  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
      const candidateSpace =
        candidate.espacioAcademico || DEFAULT_ACADEMIC_SPACE;
      return spaceFilter === "all" || candidateSpace === spaceFilter;
    });
  }, [candidates, spaceFilter]);

  const totalVotos = filteredCandidates.reduce(
    (acc, candidate) => acc + candidate.votos,
    0
  );
  const maxVotos =
    filteredCandidates.length > 0
      ? Math.max(...filteredCandidates.map((c) => c.votos))
      : 0;

  return (
    <section className="view">
      <section className="card">
        <h2>Panel de votación</h2>
        <p className="muted">
          Selecciona un candidato para registrar un voto de forma visual.
        </p>

        <div className="filter-bar">
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

        {filteredCandidates.length === 0 ? (
          <p className="muted">No hay candidatos disponibles para votar.</p>
        ) : (
          <div className="voting-cards">
            {filteredCandidates.map((candidate) => {
              const porcentaje =
                totalVotos > 0 ? ((candidate.votos / totalVotos) * 100).toFixed(1) : "0.0";

              const inicial = candidate.nombre?.trim()?.charAt(0)?.toUpperCase() || "?";
              const isLeader = candidate.votos === maxVotos && maxVotos > 0;
              const space = candidate.espacioAcademico || DEFAULT_ACADEMIC_SPACE;

              return (
                <article
                  className={`vote-card ${isLeader ? "leader-card" : ""}`}
                  key={candidate.id}
                >
                  <div className="vote-card-header">
                    <div className="vote-card-profile">
                      <div className="vote-avatar">{inicial}</div>

                      <div>
                        <h3>{candidate.nombre}</h3>
                        {isLeader ? (
                          <span className="leader-badge">Lidera la votación</span>
                        ) : (
                          <span className="sub-badge">Candidato</span>
                        )}
                      </div>
                    </div>

                    <span className="badge">Votos: {candidate.votos}</span>
                  </div>

                  <div className="badge-row">
                    <span className="badge space-badge">{space}</span>
                  </div>

                  <p className="vote-card-text">{candidate.propuesta}</p>

                  <div className="vote-stats">
                    <div className="vote-stats-row">
                      <span>Porcentaje actual</span>
                      <strong>{porcentaje}%</strong>
                    </div>

                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${porcentaje}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="vote-card-footer">
                    <button onClick={() => onVote(candidate.id)}>
                      Votar por {candidate.nombre}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </section>
  );
}

export default VotingView;
