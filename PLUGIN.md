# DSH Learning Coder Plugin

The repository root is a publishable DeepSeek Harness plugin named `dsh-learning-coder`.

## Responsibilities

The plugin is the UI/control layer. It does not replace the `learning-coder` skill.

It provides:

- a `Learning` button in `conversation.session.header.utilities`;
- a workspace-level learning panel;
- workspace chapter discovery;
- `Create chapter`, which sends the Learning Coder instruction to the current session;
- `Open in Obsidian` and `Open library` actions;
- a `Learning Coder` settings page;
- persistent configuration for the global learning-library root;
- host-side filesystem access for the configured library.

## Workspace model

The current session provides the workspace `cwd`. The plugin uses that directory as workspace identity and stores chapters under a project directory inside the configured learning root.

Sessions are provenance, not library identity.

## Package shape

```text
package.json
cordis.patch.yml
lib/index.js       # Host half
lib/client.js      # Browser half
skills/            # Reusable agent skill
```

The package follows the external DSH plugin shape used by other public plugins: a Host entry plus a `dsh.client` browser entry. DeepSeek Harness documents that out-of-tree plugins are mounted through package manifests and Cordis composition. citeturn0search0turn0search6

## Current scope

This first plugin implementation intentionally keeps generation agent-driven. The UI sends a task-specific prompt to the current session; the agent and `learning-coder` skill produce the Markdown artifact.

Automatic post-task generation can be added later without changing the workspace library model.

## Configuration

The global library root is stored by the Host at:

```text
~/.config/dsh-learning-coder/config.json
```

The default is:

```text
~/Documents/Obsidian/Development
```

Each workspace becomes a child directory under that root.
