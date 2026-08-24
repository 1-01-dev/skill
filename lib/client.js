window.__ModuleLoader__.load({
  id: 'dsh-learning-coder',
  factory: (require) => {
    const module = { exports: {} }
    const exports = module.exports
    const React = require('react')
    const NS = 'dsh-learning-coder'
    const STYLE_ID = 'dsh-learning-coder-style'

    const EN = { label: 'Learning', title: 'Workspace Learning', empty: 'No learning chapters yet.', create: 'Create chapter', open: 'Open library', close: 'Close' }

    function installStyle() {
      if (document.getElementById(STYLE_ID)) return
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = [
        '.dlc{height:100%;display:flex;flex-direction:column;min-width:0;background:var(--dsw-alias-bg-base,#17181c);color:var(--dsw-alias-label-primary,#f5f5f5)}',
        '.dlc-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31)}',
        '.dlc-title{font-size:13px;font-weight:650}',
        '.dlc-body{padding:12px;overflow:auto;display:flex;flex-direction:column;gap:10px}',
        '.dlc-note{padding:12px;border-radius:9px;background:var(--dsw-alias-bg-layer-1,#202126);font-size:12px}',
        '.dlc-actions{display:flex;gap:7px;flex-wrap:wrap}',
        '.dlc-button{height:30px;padding:0 10px;border:1px solid var(--dsw-alias-border-l1,#454750);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#25262b);color:var(--dsw-alias-label-primary,#f5f5f5);cursor:pointer}',
        '.dlc-primary{background:#5d7cff!important;border-color:#5d7cff!important;color:#fff!important}',
        '.dlc-close{border:0;background:transparent;color:var(--dsw-alias-label-secondary,#aaa);font-size:18px;cursor:pointer}',
        '.dlc-item{padding:10px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31);cursor:pointer}',
      ].join('')
      document.head.appendChild(style)
    }

    function Header(props) {
      return React.createElement('button', { type: 'button', className: 'dlc-button', title: EN.label, onClick: function () { props.layout.openDetails() } }, EN.label)
    }

    function Panel(props) {
      const [workspace, setWorkspace] = React.useState(null)
      const [error, setError] = React.useState(null)

      React.useEffect(function () {
        if (!props.sessionId) return
        fetch('/plugin/dsh-learning-coder/workspace?sessionId=' + encodeURIComponent(props.sessionId), { cache: 'no-store' })
          .then(function (response) {
            return response.json().then(function (data) {
              if (!response.ok) throw new Error(data.error || 'Unable to load workspace')
              return data
            })
          })
          .then(function (data) { setWorkspace(data.workspace); setError(null) })
          .catch(function (err) { setError(err.message) })
      }, [props.sessionId])

      const chapters = workspace && workspace.chapters ? workspace.chapters.filter(function (item) { return item.type === 'learning' }).slice(0, 8) : []

      return React.createElement('section', { className: 'dlc' },
        React.createElement('header', { className: 'dlc-head' },
          React.createElement('div', { className: 'dlc-title' }, EN.title),
          React.createElement('button', { className: 'dlc-close', onClick: function () { props.layout.closeDetails() }, type: 'button' }, '×'),
        ),
        React.createElement('main', { className: 'dlc-body' },
          error && React.createElement('div', { className: 'dlc-note' }, error),
          workspace && React.createElement('div', { className: 'dlc-note' }, String(workspace.chapterCount) + ' chapters'),
          chapters.length ? React.createElement('div', { className: 'dlc-note' }, chapters.map(function (chapter) { return React.createElement('div', { className: 'dlc-item', key: chapter.path }, chapter.title) })) : React.createElement('div', { className: 'dlc-note' }, EN.empty),
          React.createElement('div', { className: 'dlc-actions' },
            React.createElement('button', { className: 'dlc-button dlc-primary', type: 'button' }, EN.create),
            React.createElement('button', { className: 'dlc-button', type: 'button' }, EN.open),
          ),
        ),
      )
    }

    function apply(ctx) {
      installStyle()
      ctx.slots.inject('conversation.session.header.utilities', function () {
        return ctx.slots.register({ name: 'conversation.session.header.utilities', id: NS, order: 25 }, Header)
      })
      ctx.slots.inject('details', function () {
        return ctx.slots.register({ name: 'details', id: NS, priority: -100 }, Panel)
      })
    }

    exports.apply = apply
    exports.inject = ['slots', 'layout']
    return module.exports
  },
})
