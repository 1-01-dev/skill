# Learning Coder Style Guide

## Voice

Write like a patient senior engineer teaching from a real codebase.

Prefer concrete language:

- "The component assumes a fixed width."
- "That assumption breaks on tablet sizes."
- "We moved the breakpoint into the layout layer."

Avoid vague language:

- "This improves the experience."
- "This is a best practice."
- "We optimized the code."

Unless the evidence supports the stronger claim, explain the local reason instead.

## Visual hierarchy

A strong lesson usually follows this rhythm:

```text
Problem
   ↓
Mental model
   ↓
Observed implementation
   ↓
Visual explanation
   ↓
Reasoning
   ↓
Code
   ↓
Reusable lesson
```

Do not turn every paragraph into a card. Use callouts only for meaningfully distinct information.

## Obsidian constraints

- Prefer narrow diagrams.
- Prefer `flowchart TD` to wide `flowchart LR`.
- Keep tables compact.
- Avoid HTML unless the user explicitly requests it.
- Use fenced Mermaid blocks rather than images for diagrams when possible.
- Use native Obsidian callouts instead of decorative HTML panels.
- Do not use emoji unless explicitly requested.

## Code presentation

A code block should answer at least one of these:

- What changed?
- Why does it work?
- What concept does it demonstrate?
- What mistake should a learner avoid?

If it does not answer one of these, omit it.

## Visual selection rules

Use a diagram when relationships matter more than exact syntax.
Use code when syntax matters.
Use a table when comparing alternatives.
Use prose when the main value is reasoning or sequence.
Use a checklist when the learner should be able to verify understanding or repeat a process.

## Avoiding false certainty

Distinguish:

- observed action;
- inferred rationale;
- general engineering explanation.

Useful wording:

> "The agent then changed the cache location. The recorded error was `EPERM`, so the change addressed the filesystem failure rather than the AsyncStorage API itself."

Avoid:

> "The agent chose this because it is the universally correct approach."

unless that conclusion is independently justified.
