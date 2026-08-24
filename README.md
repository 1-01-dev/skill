# Learning Coder

> Turn completed coding tasks into visual, Obsidian-friendly learning chapters.

Learning Coder is an agent skill for developers who use AI coding agents to build real projects while learning software engineering at the same time.

Instead of producing a conventional changelog, the skill transforms a significant completed coding task into a teaching document that explains:

- what changed;
- why it changed;
- how the implementation works;
- which engineering concepts were involved;
- why the chosen approach was preferable to alternatives;
- how the agent investigated problems and made decisions;
- how the task fits into the larger architecture.

The default output is **Markdown designed for Obsidian**.

## Why Learning Coder

> **Do not merely document the implementation. Teach the reasoning behind it.**

A lesson can combine prose, code, Mermaid diagrams, ASCII diagrams, tables, Obsidian callouts, and learning checklists. Visual material should appear only when it genuinely improves understanding.

## What the skill produces

A typical lesson can include:

- a learning goal and problem statement;
- a compact mental model;
- Before → After comparisons;
- the actual implementation changes;
- important technical concepts;
- visual explanations;
- decision and trade-off blocks;
- focused code deep dives;
- debugging investigation paths;
- common failure modes;
- a "build it yourself" mental model;
- project-architecture context;
- key takeaways;
- a glossary;
- a learning checkpoint;
- further learning suggestions.

The structure is **adaptive**. A debugging task should not look like a UI lesson, and a backend task should not be forced into a mobile/native template.

## Obsidian-first

The primary format is Markdown suitable for an Obsidian vault.

The skill can use:

- Obsidian callouts such as `[!abstract]`, `[!tip]`, `[!warning]`, `[!question]`, `[!success]`, and `[!info]`;
- Mermaid diagrams for architecture, flows, state transitions, dependencies, and request paths;
- compact ASCII diagrams for small structures;
- focused code snippets rather than full-file dumps;
- comparison tables for alternatives;
- checklists for learning checkpoints;
- Dataview-compatible YAML frontmatter for later aggregation.

Prefer narrow, readable diagrams. Vertical Mermaid layouts (`flowchart TD`) are preferred when a horizontal diagram would overflow a normal Obsidian reading pane.

## Example frontmatter

```yaml
---
type: learning
project: my-project
date: 2026-08-24
status: completed
difficulty: intermediate
task_type: debugging
topics:
  - React Native
  - iOS
technologies:
  - Expo
  - Xcode
concepts:
  - native-modules
  - dependency-management
  - ios-build
---
```

Only add metadata that can be established reliably.

## Example invocation

After completing a significant task:

```text
Create a Learning Coder chapter for the task you just completed.
Use the project changes, relevant files, and verification results as evidence.
Write an Obsidian-friendly Markdown lesson and save it under docs/learning/.
```

Or simply:

```text
Explain the last completed debugging task as a visual learning chapter.
```

## Quality principles

Learning Coder should:

1. Base the chapter on the actual completed work.
2. Explain reasoning, not only actions.
3. Separate verified facts from inference.
4. Teach reusable mental models.
5. Use visuals only when they make a concept easier to understand.
6. Keep diagrams and code readable in Obsidian.
7. Avoid decorative or overly dashboard-like formatting.
8. Avoid inventing alternatives, decisions, or implementation details.
9. Make the resulting note useful even months after the task was completed.

For debugging, the preferred explanatory sequence is:

```text
Symptom
  ↓
Layer classification
  ↓
Hypothesis
  ↓
Evidence
  ↓
Decision
  ↓
Fix
  ↓
Verification
```

## Dataview / DataviewJS

Dataview and DataviewJS are optional. They are most useful for a collection-level dashboard rather than as decoration inside every lesson.

The metadata can later be aggregated by:

- project;
- date;
- difficulty;
- task type;
- technologies;
- concepts.

The skill should not create a DataviewJS dashboard unless requested or clearly justified by the task.

## Installation

For OpenCode, place the skill in a supported skill directory, for example:

```text
.opencode/skills/learning-coder/SKILL.md
```

or globally:

```text
~/.config/opencode/skills/learning-coder/SKILL.md
```

The skill consists of the main `SKILL.md` plus a small style reference under `references/`.

## Repository structure

```text
skills/
└── learning-coder/
    ├── SKILL.md
    └── references/
        └── STYLE.md
README.md
```

## Project philosophy

Learning Coder is designed for **vibe coding with deliberate learning**.

The purpose is not to turn every tool call into documentation. The purpose is to let meaningful completed work accumulate into a searchable, visual record of the engineering concepts learned while building a real project.
