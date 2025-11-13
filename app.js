// app.js
// Rendert die Checkliste und sammelt die Eingaben

function renderChecklist(checklist, container) {
  // vorhandene Inhalte im Formular löschen
  container.innerHTML = "";

  checklist.sections.forEach(section => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "checklist-section";

    const legend = document.createElement("legend");
    legend.textContent = section.title;
    fieldset.appendChild(legend);

    section.items.forEach(item => {
      const wrapper = document.createElement("div");
      wrapper.className = "checklist-item";

      const input = document.createElement("input");
      input.type = "checkbox"; // aktuell nur Ja/Nein
      input.id = item.id;
      input.name = item.id;

      const label = document.createElement("label");
      label.setAttribute("for", item.id);
      label.textContent = item.label;

      wrapper.appendChild(input);
      wrapper.appendChild(label);

      if (item.hasComment) {
        const comment = document.createElement("textarea");
        comment.id = item.id + "__comment";
        comment.name = item.id + "__comment";
        comment.placeholder = "Bemerkung (optional)";
        comment.className = "checklist-comment";
        wrapper.appendChild(comment);
      }

      fieldset.appendChild(wrapper);
    });

    container.appendChild(fieldset);
  });
}

function collectChecklistData(checklist, container) {
  const result = {
    checklistId: checklist.id,
    title: checklist.title,
    version: checklist.version,
    timestamp: new Date().toISOString(),
    values: {}
  };

  checklist.sections.forEach(section => {
    section.items.forEach(item => {
      const input = container.querySelector("#" + item.id);
      if (input) {
        result.values[item.id] = input.checked;
      }

      if (item.hasComment) {
        const c = container.querySelector("#" + item.id + "__comment");
        result.values[item.id + "__comment"] = c ? c.value : "";
      }
    });
  });

  return result;
}

function showMessage(text) {
  const area = document.getElementById("messageArea");
  if (!area) return;
  area.textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("checklistForm");
  const saveButton = document.getElementById("saveButton");

  // 1. Checkliste ins Formular rendern
  renderChecklist(dailyMobileCraneCheck, formContainer);

  // 2. Beim Klick: Daten einsammeln und speichern
  saveButton.addEventListener("click", () => {
    const data = collectChecklistData(dailyMobileCraneCheck, formContainer);

    // Beispiel: als JSON-Datei herunterladen
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);

    a.href = url;
    a.download = `kran-check-${date}.json`;
    a.click();

    URL.revokeObjectURL(url);

    showMessage("Checkliste wurde als Datei heruntergeladen.");
  });
});

