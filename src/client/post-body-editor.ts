export function setButtonState(button: HTMLButtonElement, state: "idle" | "saving" | "saved") {
  button.dataset.state = state;

  if (state === "saving") {
    button.textContent = "保存中...";
    button.disabled = true;
    return;
  }

  if (state === "saved") {
    button.textContent = "保存済み";
    button.disabled = false;
    return;
  }

  button.textContent = "保存";
  button.disabled = false;
}

export function insertTabAtCursor(textarea: HTMLTextAreaElement) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  if (start === end) {
    const nextValue = textarea.value.slice(0, start) + "\t" + textarea.value.slice(end);
    textarea.value = nextValue;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
    return;
  }

  const selected = textarea.value.slice(start, end);
  const indented = selected
    .split("\n")
    .map(function (line) {
      return "\t" + line;
    })
    .join("\n");

  const nextValue = textarea.value.slice(0, start) + indented + textarea.value.slice(end);
  textarea.value = nextValue;
  textarea.selectionStart = start;
  textarea.selectionEnd = start + indented.length;
}

export function setupPostBodyEditor() {
  const titleInput = document.getElementById("post-body-editor-title");
  const titleToggleButton = document.getElementById("post-body-editor-title-toggle");
  const textarea = document.getElementById("post-body-editor-textarea");
  const form = document.getElementById("post-body-editor-form");
  const submitButton = document.getElementById("post-body-editor-submit");

  if (
    titleInput instanceof HTMLInputElement &&
    titleToggleButton instanceof HTMLButtonElement
  ) {
    function setTitleEditing(editing: boolean) {
      titleInput.readOnly = !editing;
      titleToggleButton.dataset.state = editing ? "editing" : "idle";
      titleToggleButton.textContent = editing ? "編集完了" : "タイトル編集";

      if (editing) {
        titleInput.focus();
        titleInput.select();
      }
    }

    setTitleEditing(false);

    titleToggleButton.addEventListener("click", function () {
      setTitleEditing(titleInput.readOnly);
    });

    titleInput.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") return;
      event.preventDefault();
      setTitleEditing(false);
    });
  }

  if (!(textarea instanceof HTMLTextAreaElement)) return;
  if (!(form instanceof HTMLFormElement)) return;
  if (!(submitButton instanceof HTMLButtonElement)) return;

  if (titleInput instanceof HTMLInputElement) {
    titleInput.addEventListener("input", function () {
      if (submitButton.dataset.state !== "saved") return;
      setButtonState(submitButton, "idle");
    });
  }

  textarea.addEventListener("keydown", function (event) {
    if (event.key !== "Tab") return;
    event.preventDefault();
    insertTabAtCursor(textarea);
  });

  textarea.addEventListener("input", function () {
    if (submitButton.dataset.state !== "saved") return;
    setButtonState(submitButton, "idle");
  });

  form.addEventListener("submit", function () {
    setButtonState(submitButton, "saving");
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupPostBodyEditor, { once: true });
  } else {
    setupPostBodyEditor();
  }
}
