import { describe, expect, it } from "vitest";
import { insertTabAtCursor, setButtonState } from "./post-body-editor";

type MockButton = {
  dataset: Record<string, string>;
  textContent: string;
  disabled: boolean;
};

type MockTextArea = {
  value: string;
  selectionStart: number;
  selectionEnd: number;
};

function createButton(): HTMLButtonElement {
  return {
    dataset: {},
    textContent: "",
    disabled: false,
  } as unknown as HTMLButtonElement;
}

function createTextArea(value: string, selectionStart: number, selectionEnd: number): HTMLTextAreaElement {
  return {
    value,
    selectionStart,
    selectionEnd,
  } as unknown as HTMLTextAreaElement;
}

describe("setButtonState", function () {
  it("sets saving state", function () {
    const button = createButton();

    setButtonState(button, "saving");

    const target = button as unknown as MockButton;
    expect(target.dataset.state).toBe("saving");
    expect(target.textContent).toBe("保存中...");
    expect(target.disabled).toBe(true);
  });

  it("sets saved state", function () {
    const button = createButton();

    setButtonState(button, "saved");

    const target = button as unknown as MockButton;
    expect(target.dataset.state).toBe("saved");
    expect(target.textContent).toBe("保存済み");
    expect(target.disabled).toBe(false);
  });

  it("sets idle state", function () {
    const button = createButton();

    setButtonState(button, "idle");

    const target = button as unknown as MockButton;
    expect(target.dataset.state).toBe("idle");
    expect(target.textContent).toBe("保存する");
    expect(target.disabled).toBe(false);
  });
});

describe("insertTabAtCursor", function () {
  it("inserts a tab at the caret position", function () {
    const textarea = createTextArea("abcd", 2, 2);

    insertTabAtCursor(textarea);

    const target = textarea as unknown as MockTextArea;
    expect(target.value).toBe("ab\tcd");
    expect(target.selectionStart).toBe(3);
    expect(target.selectionEnd).toBe(3);
  });

  it("adds tab to each selected line", function () {
    const textarea = createTextArea("line1\nline2\nline3", 0, 11);

    insertTabAtCursor(textarea);

    const target = textarea as unknown as MockTextArea;
    expect(target.value).toBe("\tline1\n\tline2\nline3");
    expect(target.selectionStart).toBe(0);
    expect(target.selectionEnd).toBe(13);
  });
});
