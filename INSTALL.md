# Install `dsh-learning-coder`

## GitHub installation

Install the package directly into the DSH web profile:

```bash
dsh plugin --profile web add github:1-01-dev/skill
dsh web
```

DeepSeek Harness supports installing out-of-tree bundles from GitHub with `dsh plugin --profile <name> add github:<owner>/<repo>`. citeturn4search2turn4search1

Because this repository ships the prebuilt `lib/` runtime files, the GitHub installation does not depend on a separate build step for the plugin itself.

## Local development

From a checkout of this repository:

```bash
dsh plugin --profile web add .
dsh web
```

The DSH plugin manager accepts a local checkout as a package spec and mounts packages declaring `dsh.bundle`. citeturn4search2

## Verify

After installation:

```bash
dsh --profile web --dump-config
```

Look for the `dsh-learning-coder` bundle layer.

Then open the Web UI. A `Learning` button should appear in the conversation header when a session is active.

## Configure

Open:

```text
Settings → Learning Coder
```

Set the global learning-library root, for example:

```text
~/Documents/Obsidian/Development
```

A workspace such as:

```text
/Users/me/Projects/voixi-app
```

will then use:

```text
~/Documents/Obsidian/Development/voixi-app/
```

The plugin creates `index.md` automatically and keeps chapters grouped by workspace.

## Generate a chapter

1. Open the DSH workspace/session for the project.
2. Click `Learning` in the conversation header.
3. Click `Create chapter`.
4. The current session receives a Learning Coder instruction.
5. The skill analyzes the completed task and writes an Obsidian Markdown chapter into the workspace library.

The session is source context only. The resulting learning library belongs to the workspace.

## Current limitation

The first plugin version is intentionally manual: `Create chapter` is explicit. It does not automatically generate a lesson after every completed turn.

That is deliberate. Automatic generation can be added later with task-level completion detection, without changing the workspace-level library model.
