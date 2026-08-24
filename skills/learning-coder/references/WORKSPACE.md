# Workspace Learning Library

When Learning Coder is invoked by the DSH plugin, the learning library is owned by the current **workspace**, not by the current session.

## Identity

Use the current session only as evidence/source context. Resolve its `cwd` to the DSH workspace and keep all chapters for that workspace in one library.

```text
Workspace
  ├── Session A
  ├── Session B
  └── Session C
        │
        ▼
   Learning Library
        ├── Chapter 001
        ├── Chapter 002
        └── Chapter 003
```

A meaningful completed task is the unit of a chapter. Several sessions may contribute to the same task.

## Metadata

Useful frontmatter includes:

```yaml
---
type: learning
project: voixi-app
workspace_path: /absolute/path/to/project
date: 2026-08-24
status: completed
difficulty: intermediate
task_type: debugging
topics:
  - React Native
technologies:
  - Expo
concepts:
  - native-modules
source_session: optional-session-id
---
```

`source_session` is optional provenance. It must never be used as the library identity.

## Output location

If the user or DSH plugin provides a learning-library path, save the chapter there rather than falling back to `docs/learning/`.

The plugin may provide an absolute workspace library path. Treat it as the authoritative destination for that request.

Do not create a separate learning directory for every session.

## Index

A workspace library may contain an `index.md` with Dataview queries. The index is a collection-level navigation surface, not part of every individual chapter.

## Chapter naming

Prefer stable, human-readable filenames:

```text
001-responsive-exercise-player.md
002-asyncstorage-ios.md
003-media-placeholder-system.md
```

If a numeric sequence is unavailable, use a descriptive slug without inventing a task number.

## Session provenance

A chapter may mention its source sessions when that information is useful:

```yaml
source_sessions:
  - abc123
  - def456
```

This is provenance only. The chapter remains a workspace-level learning artifact.
