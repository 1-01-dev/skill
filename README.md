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

## What makes it different

Learning Coder is designed around one principle:

> **Do not merely document the implementation. Teach the reasoning behind it.**

A lesson can combine prose, code, Mermaid diagrams, ASCII diagrams, tables, Obsidian callouts, and checklists. Visual material should be used only when it genuinely improves understanding.

## Output format

The generated lesson is Markdown-first and works well inside an Obsidian vault.

Typical frontmatter:

```yaml
---
type: learning
project: my-project
difficulty: intermediate
task_type: debugging
topics:
  - React
  - TypeScript
concepts:
  - state-management
  - component-composition
---
```

The skill may use:

- Obsidian callouts such as `[!abstract]`, `[!tip]`, `[!warning]`, `[!question]`, and `[!success]`;
- Mermaid diagrams for flows, architecture, state transitions, and relationships;
- compact ASCII diagrams when Mermaid would be unnecessarily large;
- focused code snippets rather than full-file dumps;
- comparison tables for alternatives and trade-offs;
- self-checklists and learning checkpoints;
- Dataview-compatible frontmatter for later aggregation into a learning dashboard.

## Typical lesson structure

The structure is adaptive rather than rigid. A lesson usually contains the parts that best fit the task:

1. Learning goal / problem statement
2. Mental model
3. Before → After
4. What actually changed
5. Important concepts
6. Visual explanation
7. Why this approach
8. Agent investigation and decisions
9. Relevant code deep dive
10. Common mistakes / failure modes
11. How to build it yourself
12. Connection to the wider project
13. Key takeaways
14. Glossary
15. Learning checkpoint
16. Further learning

A UI task, debugging task, backend task, architecture change, and refactor should not be forced into the same template. The agent should select and order sections according to the actual work.

## Visual principles

The output should feel like a polished technical lesson, not an AI-generated dashboard.

Use visuals when they reduce cognitive load:

- responsive UI → layout diagrams;
- architecture → component or dependency diagrams;
- data flow → flowcharts;
- state logic → state diagrams;
- API work → request/response diagrams;
- refactors → old/new architecture;
- debugging → symptom → hypothesis → evidence → fix;
- animations → timelines.

Keep diagrams narrow enough to work inside a normal Obsidian reading pane. Prefer vertical Mermaid layouts (`flowchart TD`) when a horizontal diagram would overflow.

## Learning principles

The skill should consistently answer four questions:

### What?
What actually changed?

### Why?
Why was this solution chosen?

### How?
How does the implementation work?

### When?
When would the same concept or technique be useful elsewhere?

The lesson should also capture significant agent decisions, especially when the path was not obvious.

For debugging tasks, prefer:

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

This makes the reasoning reusable instead of merely recording the final command.

## Dataview support

Dataview and DataviewJS are optional. They should be used when they add value across a collection of lessons, not as decoration inside every individual note.

Useful metadata can include:

```yaml
---
type: learning
project: VOIXI
date: 2026-08-24
status: completed
difficulty: intermediate
task_type: debugging
topics:
  - React Native
  - iOS
  - CocoaPods
technologies:
  - Expo
  - Xcode
concepts:
  - native-modules
  - dependency-management
  - ios-build
---
```

A separate dashboard can later aggregate these notes by project, technology, concept, difficulty, task type, or date.

## What it should avoid

Do not:

- invent implementation details that were not observed;
- describe every tool call as a separate lesson;
- dump complete files when a small excerpt explains the idea;
- use decorative diagrams that add no information;
- create excessively wide Mermaid diagrams;
- force every lesson into a fixed section list;
- confuse the agent's internal reasoning with verified facts;
- claim that an alternative was considered unless the evidence supports it;
- optimize for visual novelty over readability.

The finished chapter should explain the real work accurately and remain understandable months later.

## Recommended installation

For OpenCode, place the skill at one of the supported skill locations, for example:

```text
.opencode/skills/learning-coder/SKILL.md
```

or globally:

```text
~/.config/opencode/skills/learning-coder/SKILL.md
```

See the OpenCode Skills documentation for the exact installation and discovery behavior.

## Example invocation

After completing a significant task, ask the agent:

```text
Create a Learning Coder chapter for the task you just completed.
Use the project changes, relevant files, and verification results as evidence.
Write an Obsidian-friendly Markdown lesson and save it under docs/learning/.
```

The skill can also be invoked explicitly with a request such as:

```text
Explain the last completed debugging task as a visual learning chapter.
```

## Project philosophy

Learning Coder is meant for **vibe coding with deliberate learning**.

The goal is not to slow down development by turning every action into documentation. The goal is to make meaningful completed work accumulate into a searchable, visual record of the engineering concepts learned while building the project itself.
