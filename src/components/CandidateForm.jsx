import { useState } from "react";
import {
  academicSpaces,
  DEFAULT_ACADEMIC_SPACE,
} from "../data/academicSpaces";

function CandidateForm({ onSave, editingCandidate, onCancelEdit, showToast }) {
  const [nombre, setNombre] = useState(editingCandidate?.nombre ?? "");
  const [propuesta, setPropuesta] = useState(editingCandidate?.propuesta ?? "");
  const [espacioAcademico, setEspacioAcademico] = useState(
    editingCandidate?.espacioAcademico ?? DEFAULT_ACADEMIC_SPACE
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !propuesta.trim() || !espacioAcademico.trim()) {
      showToast("error", "Campos obligatorios", "Todos los campos del formulario son obligatorios.");
      return;
    }

    onSave({
      nombre: nombre.trim(),
      propuesta: propuesta.trim(),
      espacioAcademico: espacioAcademico.trim(),
    });

    if (!editingCandidate) {
      setNombre("");
      setPropuesta("");
      setEspacioAcademico(DEFAULT_ACADEMIC_SPACE);
    }
  };

  return (
    <section className="card">
      <h2>{editingCandidate ? "Editar candidato" : "Registrar candidato"}</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Nombre del candidato
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Ana Gómez"
          />
        </label>

        <label>
          Propuesta
          <textarea
            value={propuesta}
            onChange={(e) => setPropuesta(e.target.value)}
            placeholder="Describe la propuesta del candidato"
            rows="4"
          />
        </label>

        <label>
          Espacio academico
          <select
            value={espacioAcademico}
            onChange={(e) => setEspacioAcademico(e.target.value)}
          >
            {academicSpaces.map((space) => (
              <option key={space} value={space}>
                {space}
              </option>
            ))}
          </select>
        </label>

        <div className="actions">
          <button type="submit">
            {editingCandidate ? "Actualizar" : "Guardar"}
          </button>

          {editingCandidate && (
            <button type="button" className="secondary" onClick={onCancelEdit}>
              Cancelar edición
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default CandidateForm;
