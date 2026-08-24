# Learning Coder

> Turn meaningful coding work into visual, Obsidian-friendly lessons — with an optional DeepSeek Harness workspace UI.

Learning Coder is the learning layer for developers who use AI coding agents to build real projects while learning software engineering at the same time.

The repository now contains two cooperating pieces:

1. **`learning-coder` skill** — teaches the agent how to turn completed engineering tasks into high-quality Markdown chapters.
2. **`dsh-learning-coder` plugin** — adds a `Learning` button to DeepSeek Harness, a workspace-level learning library view, an Obsidian-friendly project index, and a Settings page for the library root.

## Core idea

The primary unit of learning is a **completed task**, not a session.

```text
DSH Workspace
    │
    ├── Session A ─┐
    ├── Session B ─┼── source context
    └── Session C ─┘
             │
             ▼
       Learning Coder
             │
             ▼
     Workspace Learning Library
             │
             ▼
          Obsidian
```

A workspace can contain many sessions and many chapters. A session is only evidence/context for a chapter; it is not the owner of the learning library.

## What a chapter teaches

A chapter explains:

- what changed;
- why it changed;
- how the implementation works;
- which engineering concepts were involved;
- why the chosen approach fits the context;
- how the agent investigated problems and made decisions;
- how the task fits into the wider architecture;
- how to recognize or reproduce the same concept later.

The default format is **Markdown for Obsidian**.

The skill may use:

- Obsidian callouts;
- Mermaid diagrams;
- compact ASCII diagrams;
- focused code snippets;
- comparison tables;
- learning checklists;
- Dataview-compatible YAML frontmatter.

Visuals are used only when they improve comprehension.

## DSH plugin

The plugin package is named:

```text
dsh-learning-coder
```

It adds:

### Header button

A `Learning` utility appears in the DSH conversation header. It represents the **current workspace**, not the current session.

The panel shows:

- current workspace/project;
- number of learning chapters;
- recent chapters;
- learning-library path;
- actions to create a chapter, open the library, open it in Obsidian, and refresh.

### Workspace-level library

The plugin resolves the current session's `cwd`, uses that directory as the workspace identity, and maps it to a project directory under the configured learning root.

For example:

```text
~/Documents/Obsidian/Development/
└── voixi-app/
    ├── index.md
    ├── 001-responsive-player.md
    ├── 002-async-storage-ios.md
    └── 003-media-placeholder-system.md
```

The generated `index.md` contains optional Dataview queries for recent chapters, technologies, and concepts.

### Settings

The plugin adds a `Learning Coder` settings page where you configure the global learning-library root, for example:

```text
~/Documents/Obsidian/Development
```

The plugin creates the project-specific directory automatically.

The host stores this setting in:

```text
~/.config/dsh-learning-coder/config.json
```

### Create chapter

`Create chapter` sends a prompt to the current DSH session asking the agent to use the installed `learning-coder` skill and create a chapter for the last significant completed task.

The prompt explicitly treats the current session as **source context only** and the workspace as the owner of the learning library.

## Installation

### Skill only

For OpenCode, install the skill under a supported skills directory:

```text
.opencode/skills/learning-coder/SKILL.md
```

or globally:

```text
~/.config/opencode/skills/learning-coder/SKILL.md
```

### DSH plugin

The package is also a DSH plugin and exposes the standard `dsh.client` entry plus a bundle patch.

From a local checkout, the package root contains:

```text
package.json
lib/index.js
lib/client.js
cordis.patch.yml
```

The plugin follows the same package shape used by external DSH plugins: a Host half for filesystem/workspace operations and a browser half for UI slots. DeepSeek Harness is explicitly plugin-composed, and its web server exposes named route registration for feature plugins. citeturn0search0turn0search4

> **Current repository note:** the GitHub repository is still named `skill`; the publishable package name is `dsh-learning-coder`. Rename the GitHub repository to `dsh-learning-coder` when you want the repository URL to match the package name.

## Repository structure

```text
.
├── package.json
├── cordis.patch.yml
├── lib/
│   ├── index.js
│   └── client.js
├── skills/
│   └── learning-coder/
│       ├── SKILL.md
│       └── references/
│           └── STYLE.md
└── README.md
```

## Design principles

### Workspace first

The learning library belongs to the DSH workspace. Sessions are source context, not separate libraries.

### Task first

A meaningful completed task becomes a chapter. Several sessions may contribute to the same task.

### Evidence first

The skill grounds explanations in actual project changes, files, diffs, commands, tests, and verification results.

### Obsidian first

Markdown is the canonical learning format. HTML is not required.

### Visual, not decorative

Use Mermaid, ASCII, callouts, and code when they make a concept easier to understand. Avoid dashboard-like clutter.

### DSH is the control layer; Obsidian is the knowledge layer

DSH provides workspace context, navigation, and generation controls. Obsidian stores, links, searches, and aggregates the accumulated lessons.

## Development status

The repository currently contains the first functional plugin implementation and the reusable skill. DSH is a developer-preview product and its plugin/UI contracts can change between releases, so the plugin should be tested against the DSH version it is installed into. citeturn0search5

## License

MIT
