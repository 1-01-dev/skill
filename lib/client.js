window.__ModuleLoader__.load({
  id: 'dsh-learning-coder',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    const React = require('react')

    const NS = 'dsh-learning-coder'
    const BASE = '/plugin/dsh-learning-coder'

    const EN = {
      'entry.label': 'Learning',
      'panel.title': 'Workspace Learning',
      'panel.loading': 'Loading workspace…',
      'panel.error': 'Unable to load learning library',
      'panel.chapters': 'chapters',
      'panel.recent': 'Recent chapters',
      'panel.empty': 'No learning chapters yet.',
      'panel.open': 'Open library',
      'panel.obsidian': 'Open in Obsidian',
      'panel.create': 'Create chapter',
      'panel.creating': 'Sending to agent…',
      'panel.refresh': 'Refresh',
      'panel.close': 'Close',
      'panel.settings': 'Settings',
      'settings.title': 'Learning Coder',
      'settings.libraryRoot': 'Learning library root',
      'settings.libraryHint': 'Each DSH workspace gets its own project folder inside this directory.',
      'settings.save': 'Save',
      'settings.saved': 'Saved',
      'settings.path': 'Path',
      'settings.current': 'Current workspace',
      'settings.notConfigured': 'Not available',
      'msg.created': 'The learning request was sent to the current session.',
      'msg.createFailed': 'Could not send the learning request.',
    }
    const ZH = {
      'entry.label': '学习',
      'panel.title': '工作区学习',
      'panel.loading': '正在加载工作区…',
      'panel.error': '无法加载学习库',
      'panel.chapters': '篇章',
      'panel.recent': '最近学习',
      'panel.empty': '还没有学习篇章。',
      'panel.open': '打开学习库',
      'panel.obsidian': '在 Obsidian 中打开',
      'panel.create': '生成学习篇章',
      'panel.creating': '正在发送给 Agent…',
      'panel.refresh': '刷新',
      'panel.close': '关闭',
      'panel.settings': '设置',
      'settings.title': 'Learning Coder',
      'settings.libraryRoot': '学习库根目录',
      'settings.libraryHint': '每个 DSH Workspace 会在这里拥有自己的项目学习目录。',
      'settings.save': '保存',
      'settings.saved': '已保存',
      'settings.path': '路径',
      'settings.current': '当前工作区',
      'settings.notConfigured': '不可用',
      'msg.created': '学习请求已发送到当前会话。',
      'msg.createFailed': '无法发送学习请求。',
    }

    function css() {
      if (typeof document === 'undefined' || document.querySelector('style[data-plugin-css="dsh-learning-coder"]')) return
      const tag = document.createElement('style')
      tag.dataset.plugin = 'dsh-learning-coder'
      tag.dataset.pluginCss = 'dsh-learning-coder'
      tag.textContent = `
        .dlc_btn{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:1px solid var(--dsw-alias-border-l1,#4b5563);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#25262b);color:var(--dsw-alias-label-primary,#f3f4f6);font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap}
        .dlc_btn:hover{border-color:var(--dsw-alias-brand-primary,#6d8cff);background:var(--dsw-alias-bg-layer-2,#303238)}
        .dlc_icon{width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center}
        .dlc_panel{position:fixed;top:48px;right:12px;width:430px;max-width:calc(100vw - 24px);max-height:78vh;z-index:9999;display:flex;flex-direction:column;overflow:hidden;background:var(--dsw-alias-bg-base,#17181c);color:var(--dsw-alias-label-primary,#f5f5f5);border:1px solid var(--dsw-alias-border-l1,#34363d);border-radius:14px;box-shadow:var(--dsw-shadow-lv3,0 20px 60px rgba(0,0,0,.35))}
        .dlc_head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31)}
        .dlc_title{font-size:13px;font-weight:650}.dlc_subtitle{font-size:11px;color:var(--dsw-alias-label-secondary,#9ca0aa);margin-top:2px}
        .dlc_iconBtn{width:28px;height:28px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary,#a5a8b0);cursor:pointer}.dlc_iconBtn:hover{background:var(--dsw-alias-bg-layer-2,#2a2c31);color:var(--dsw-alias-label-primary,#fff)}
        .dlc_body{padding:12px;overflow:auto;display:flex;flex-direction:column;gap:10px}
        .dlc_stat{display:flex;align-items:flex-end;justify-content:space-between;padding:13px 14px;border:1px solid var(--dsw-alias-border-l1,#34363d);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#1f2025)}
        .dlc_statNum{font-size:25px;font-weight:650;line-height:1}.dlc_statLabel{font-size:11px;color:var(--dsw-alias-label-secondary,#9ca0aa)}
        .dlc_sectionTitle{font-size:11px;font-weight:650;color:var(--dsw-alias-label-secondary,#9ca0aa);text-transform:uppercase;letter-spacing:.06em;padding:2px 2px 0}
        .dlc_list{display:flex;flex-direction:column;border:1px solid var(--dsw-alias-border-l1,#34363d);border-radius:10px;overflow:hidden}
        .dlc_item{padding:11px 12px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31);cursor:pointer}.dlc_item:last-child{border-bottom:0}.dlc_item:hover{background:var(--dsw-alias-bg-layer-1,#202126)}
        .dlc_itemTitle{font-size:12px;font-weight:550}.dlc_itemMeta{font-size:10px;color:var(--dsw-alias-label-secondary,#9397a1);margin-top:3px}
        .dlc_actions{display:flex;gap:7px;flex-wrap:wrap}.dlc_primary{background:var(--dsw-alias-brand-primary,#5d7cff);border-color:var(--dsw-alias-brand-primary,#5d7cff);color:#fff}.dlc_primary:hover{filter:brightness(1.08)}
        .dlc_message{font-size:11px;line-height:1.45;padding:8px 10px;border-radius:8px;background:rgba(93,124,255,.1);color:var(--dsw-alias-label-secondary,#b2b6c0)}
        .dlc_error{font-size:11px;line-height:1.45;padding:9px 10px;border-radius:8px;background:rgba(239,92,92,.1);color:#ff9696}
        .dlc_settings{max-width:680px;display:flex;flex-direction:column;gap:12px}.dlc_field{display:flex;flex-direction:column;gap:6px}.dlc_label{font-size:12px;font-weight:600}.dlc_input{width:100%;box-sizing:border-box;padding:9px 10px;border:1px solid var(--dsw-alias-border-l1,#3b3d45);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#202126);color:var(--dsw-alias-label-primary,#f5f5f5);font:inherit;font-size:12px}.dlc_input:focus{outline:none;border-color:var(--dsw-alias-brand-primary,#5d7cff)}.dlc_hint{font-size:11px;line-height:1.5;color:var(--dsw-alias-label-secondary,#969aa4)}
        .dlc_path{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;line-height:1.45;word-break:break-all;color:var(--dsw-alias-label-secondary,#9da1aa)}
        @media(max-width:560px){.dlc_panel{right:8px;width:calc(100vw - 16px);top:44px}.dlc_btn{padding:0 8px}.dlc_btnLabel{display:none}}
      `
      document.head.appendChild(tag)
    }

    function iconBook() {
      return React.createElement('span', { className: 'dlc_icon', 'aria-hidden': true },
        React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
          React.createElement('path', { d: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z' }),
          React.createElement('path', { d: 'M4 5.5v16' }),
          React.createElement('path', { d: 'M8 7h8M8 10h8' }),
        ),
      )
    }

    function fetchJson(url, options) {
      return fetch(url, { cache: 'no-store', ...(options || {}) }).then(async response => {
        const data = await response.json().catch(() => ({}))
        if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`)
        return data
      })
    }

    function LearningPanel(props) {
      const { sessionId, controller, t } = props
      const [open, setOpen] = React.useState(false)
      const [info, setInfo] = React.useState(null)
      const [loading, setLoading] = React.useState(false)
      const [error, setError] = React.useState(null)
      const [message, setMessage] = React.useState(null)
      const [creating, setCreating] = React.useState(false)

      const load = React.useCallback(() => {
        if (!sessionId) return
        setLoading(true)
        setError(null)
        fetchJson(`${BASE}/workspace?sessionId=${encodeURIComponent(sessionId)}`)
          .then(setInfo)
          .catch(e => setError(e.message))
          .finally(() => setLoading(false))
      }, [sessionId])

      React.useEffect(() => { if (open) load() }, [open, load])

      const createChapter = async () => {
        setCreating(true)
        setMessage(null)
        try {
          const current = info?.workspace
          const prompt = [
            'Create a Learning Coder chapter for the last significant completed coding task in this DSH workspace.',
            'The learning library is workspace-level, not session-level. Treat the current session only as source context.',
            'Use the installed learning-coder skill. Base the chapter on actual changes, files, diffs, commands, and verification evidence.',
            'Write an Obsidian-friendly Markdown chapter with adaptive structure, callouts, compact Mermaid or ASCII diagrams when useful, focused code examples, decision reasoning, glossary, and a learning checkpoint.',
            current?.libraryPath ? `Save the chapter in this workspace learning library: ${current.libraryPath}` : 'Save it in the configured workspace learning library.',
            'Do not create a chapter for every session. One meaningful completed task should produce one learning chapter.',
          ].join('\n\n')
          const result = await controller.prompt(sessionId, prompt)
          if (!result.ok) throw new Error(result.error?.message || 'prompt rejected')
          setMessage(t('msg.created'))
          setTimeout(load, 900)
        } catch (e) {
          setMessage(`${t('msg.createFailed')} ${e?.message || e}`)
        } finally {
          setCreating(false)
        }
      }

      const openPath = (mode, path) => {
        fetchJson(`${BASE}/open`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId, mode, path }) })
          .catch(e => setMessage(e.message))
      }

      const workspace = info?.workspace
      const chapters = (workspace?.chapters || []).filter(item => item.type === 'learning').slice(0, 8)

      if (!open) return null
      return React.createElement('section', { className: 'dlc_panel', role: 'dialog', 'aria-label': t('panel.title') },
        React.createElement('header', { className: 'dlc_head' },
          React.createElement('div', null,
            React.createElement('div', { className: 'dlc_title' }, t('panel.title')),
            React.createElement('div', { className: 'dlc_subtitle' }, workspace?.name || t('panel.loading')),
          ),
          React.createElement('button', { type: 'button', className: 'dlc_iconBtn', onClick: () => setOpen(false), 'aria-label': t('panel.close') }, '×'),
        ),
        React.createElement('div', { className: 'dlc_body' },
          loading && !info ? React.createElement('div', { className: 'dlc_message' }, t('panel.loading')) : null,
          error ? React.createElement('div', { className: 'dlc_error' }, `${t('panel.error')}: ${error}`) : null,
          workspace ? React.createElement(React.Fragment, null,
            React.createElement('div', { className: 'dlc_stat' },
              React.createElement('div', null,
                React.createElement('div', { className: 'dlc_statNum' }, workspace.chapterCount),
                React.createElement('div', { className: 'dlc_statLabel' }, t('panel.chapters')),
              ),
              React.createElement('div', { className: 'dlc_path' }, workspace.libraryPath),
            ),
            React.createElement('div', { className: 'dlc_sectionTitle' }, t('panel.recent')),
            chapters.length
              ? React.createElement('div', { className: 'dlc_list' }, chapters.map(chapter =>
                  React.createElement('div', { key: chapter.path, className: 'dlc_item', onClick: () => openPath('obsidian', chapter.path) },
                    React.createElement('div', { className: 'dlc_itemTitle' }, chapter.title),
                    React.createElement('div', { className: 'dlc_itemMeta' }, [chapter.date, chapter.taskType, chapter.difficulty].filter(Boolean).join(' · ')),
                  ),
                ))
              : React.createElement('div', { className: 'dlc_message' }, t('panel.empty')),
            React.createElement('div', { className: 'dlc_actions' },
              React.createElement('button', { type: 'button', className: 'dlc_btn dlc_primary', onClick: createChapter, disabled: creating }, iconBook(), creating ? t('panel.creating') : t('panel.create')),
              React.createElement('button', { type: 'button', className: 'dlc_btn', onClick: () => openPath('obsidian') }, t('panel.obsidian')),
              React.createElement('button', { type: 'button', className: 'dlc_btn', onClick: () => openPath('folder') }, t('panel.open')),
              React.createElement('button', { type: 'button', className: 'dlc_btn', onClick: load, disabled: loading }, t('panel.refresh')),
            ),
            message ? React.createElement('div', { className: 'dlc_message' }, message) : null,
          ) : null,
        ),
      )
    }

    function LearningHeaderAction(props) {
      const { sessionId, t, openPanel, controller } = props
      return React.createElement(React.Fragment, null,
        React.createElement('button', {
          type: 'button',
          className: 'dlc_btn',
          onClick: openPanel,
          title: t('entry.label'),
        }, iconBook(), React.createElement('span', { className: 'dlc_btnLabel' }, t('entry.label'))),
        React.createElement(LearningPanel, { sessionId, controller, t, open: props.open, onClose: props.close }),
      )
    }

    function SettingsPage({ controller, t }) {
      const [value, setValue] = React.useState('')
      const [loading, setLoading] = React.useState(true)
      const [saving, setSaving] = React.useState(false)
      const [saved, setSaved] = React.useState(false)
      const [error, setError] = React.useState(null)

      const load = React.useCallback(() => {
        setLoading(true)
        fetchJson(`${BASE}/settings`).then(data => setValue(data.libraryRoot || '')).catch(e => setError(e.message)).finally(() => setLoading(false))
      }, [])
      React.useEffect(load, [load])

      const save = () => {
        setSaving(true); setSaved(false); setError(null)
        fetchJson(`${BASE}/settings`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ libraryRoot: value }) })
          .then(data => { setValue(data.libraryRoot || value); setSaved(true) })
          .catch(e => setError(e.message))
          .finally(() => setSaving(false))
      }

      return React.createElement('div', { className: 'dlc_settings' },
        React.createElement('div', { className: 'dlc_title' }, t('settings.title')),
        React.createElement('div', { className: 'dlc_field' },
          React.createElement('label', { className: 'dlc_label' }, t('settings.libraryRoot')),
          React.createElement('input', { className: 'dlc_input', value, disabled: loading || saving, onChange: e => setValue(e.target.value), placeholder: '~/Documents/Obsidian/Development' }),
          React.createElement('div', { className: 'dlc_hint' }, t('settings.libraryHint')),
        ),
        React.createElement('div', { className: 'dlc_actions' },
          React.createElement('button', { type: 'button', className: 'dlc_btn dlc_primary', disabled: saving || !value.trim(), onClick: save }, saving ? '…' : t('settings.save')),
          saved ? React.createElement('span', { className: 'dlc_hint' }, t('settings.saved')) : null,
        ),
        error ? React.createElement('div', { className: 'dlc_error' }, error) : null,
      )
    }

    class LearningController {
      constructor(sessions) { this.sessions = sessions }
      async prompt(sessionId, text) {
        const binding = this.sessions.binding(sessionId)
        if (!binding) return { ok: false, error: { message: 'Current session is unavailable' } }
        return binding.session.prompt([{ type: 'text', text }], 'queue')
      }
    }

    function apply(ctx) {
      css()
      const t = ctx.locale.bind(NS)
      const sessions = ctx.get('sessions')
      const controller = new LearningController(sessions)
      let open = false
      let revision = 0
      const listeners = new Set()
      const state = { get open() { return open }, get revision() { return revision }, subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn) }, set(next) { open = next; revision++; listeners.forEach(fn => fn()) } }
      ctx.provide('learningCoder', controller)
      ctx.effect(() => ctx.locale.register(NS, { zh: ZH, en: EN }), 'dsh-learning-coder: dictionaries')

      ctx.slots.inject('conversation.session.header.utilities', () => ctx.slots.register({
        name: 'conversation.session.header.utilities',
        id: 'dsh-learning-coder',
        locale: NS,
        order: 25,
        inject: () => ({
          controller,
          t,
          open: state.open,
          openPanel: () => state.set(true),
          close: () => state.set(false),
        }),
      }, function Header(props) {
        return React.createElement(LearningHeaderAction, props)
      }))

      ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section',
        id: 'dsh-learning-coder-settings',
        locale: NS,
        order: 55,
        label: () => t('entry.label'),
        inject: () => ({ controller, t }),
      }, SettingsPage))
    }

    exports.apply = apply
    exports.inject = ['slots', 'locale', 'sessions']
    exports.LearningController = LearningController
    return module.exports
  },
})
