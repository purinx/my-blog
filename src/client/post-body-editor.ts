import { CheckIcon } from "@radix-ui/react-icons";
import { createElement } from "react";
import { createRoot } from "react-dom/client";

export function setButtonState(button: HTMLButtonElement, state: "idle" | "saving" | "saved") {
  button.dataset.state = state;

  const label =
    typeof button.querySelector === "function"
      ? button.querySelector<HTMLElement>('[data-role="submit-label"]')
      : null;
  function setLabel(text: string) {
    if (label) {
      label.textContent = text;
      return;
    }
    button.textContent = text;
  }

  if (state === "saving") {
    setLabel("保存中...");
    button.disabled = true;
    return;
  }

  if (state === "saved") {
    setLabel("保存済み");
    button.disabled = false;
    return;
  }

  setLabel("保存する");
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
  const textarea = document.getElementById("post-body-editor-textarea");
  const form = document.getElementById("post-body-editor-form");
  const submitButton = document.getElementById("post-body-editor-submit");
  const submitIcon = document.getElementById("post-body-editor-submit-icon");

  if (submitIcon) {
    const root = createRoot(submitIcon);
    root.render(createElement(CheckIcon));
  }

  if (titleInput instanceof HTMLTextAreaElement) {
    const titleField = titleInput;

    function resizeTitleField() {
      titleField.style.height = "auto";
      titleField.style.height = `${titleField.scrollHeight}px`;
    }

    function setTitleEditing(editing: boolean) {
      titleField.readOnly = !editing;
    }

    resizeTitleField();
    setTitleEditing(false);

    titleField.addEventListener("focus", function () {
      if (!titleField.readOnly) return;
      setTitleEditing(true);
    });

    titleField.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") return;
      event.preventDefault();
      titleField.blur();
    });

    titleField.addEventListener("blur", function () {
      setTitleEditing(false);
    });

    titleField.addEventListener("input", function () {
      resizeTitleField();
    });
  }

  if (!(textarea instanceof HTMLTextAreaElement)) return;
  if (!(form instanceof HTMLFormElement)) return;
  if (!(submitButton instanceof HTMLButtonElement)) return;

  if (titleInput instanceof HTMLTextAreaElement) {
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
