import { DEFAULT_ACADEMIC_SPACE } from "../data/academicSpaces";

function CandidateItem({ candidate, onEdit, onDelete, onVote, showActions = true }) {
  const space = candidate.espacioAcademico || DEFAULT_ACADEMIC_SPACE;

  return (
    <div className="candidate-item">
      <div>
        <h3>{candidate.nombre}</h3>
        <p>{candidate.propuesta}</p>
        <div className="badge-row">
          <span className="badge">Votos: {candidate.votos}</span>
          <span className="badge space-badge">{space}</span>
        </div>
      </div>

      {showActions && (
        <div className="actions">
          <button onClick={() => onVote(candidate.id)}>Votar</button>
          <button className="secondary" onClick={() => onEdit(candidate)}>
            Editar
          </button>
          <button className="danger" onClick={() => onDelete(candidate.id)}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}

export default CandidateItem;
