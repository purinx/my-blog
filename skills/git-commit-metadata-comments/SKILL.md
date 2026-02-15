---
name: git-commit-metadata-comments
description: Append AI provenance metadata as git commit message comments (model, reasoning mode, prompt). Use when Codex is asked to run `git commit`, craft or edit a commit message, or prepare a commit template, especially when commits should record AI context.
---

# Git Commit Metadata Comments

## Overview

Ensure every commit message includes a short comment block that records the model, reasoning mode, and prompt used for the work, without changing the actual commit message content.

## Workflow

1. Detect commit activity: trigger whenever asked to run `git commit`, write a commit message, or edit a commit template.
2. Gather metadata:
   - Use the current model name (from system context).
   - Use the current reasoning mode if available.
   - Use the user prompt that led to the commit (quote if short; otherwise summarize to one line).
3. If any metadata is missing or unclear, ask the user before committing.
4. Append the comment block at the end of the commit message, separated by a blank line from the message body.
5. Use the repository comment character (default `#`). If `core.commentChar` is known and different, use that instead.
6. If using `git commit -m` or `-F`, only include comment lines when you are confident comment-stripping will occur (e.g., `--cleanup=strip`). Otherwise, warn the user and prefer the editor-based flow.

## Comment Block Format

Use this format (single-line values, ASCII only unless the prompt already includes non-ASCII):

```
# AI-Metadata:
# Model: <model>
# Reasoning: <reasoning-mode>
# Prompt: <prompt>
```

## Examples

```
# AI-Metadata:
# Model: GPT-5 (Codex)
# Reasoning: Default
# Prompt: "Add commit metadata comments to git commits"
```
