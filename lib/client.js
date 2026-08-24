window.__ModuleLoader__.load({
  id: 'dsh-learning-coder',
  factory: (require) => {
    const module = { exports: {} }
    const exports = module.exports
    const React = require('react')
    const NS = 'dsh-learning-coder'
    const PANEL_ID = 'dsh-learning-coder-panel'
    const STYLE_ID = 'dsh-learning-coder-style'

    function installStyle() {
      if (document.getElementById(STYLE_ID)) return
      const style = document.createElement('style')
      style.id = STYLE_ID
      style.textContent = [
        '.dlc-trigger{box-sizing:border-box;display:flex;align-items:center;gap:8px;width:calc(100% + 8px);height:34px;margin:4px -4px;padding:6px 2px 6px 10px;border:0;border-radius:12px;background:transparent;color:var(--dsw-alias-label-primary);cursor:pointer;font:inherit;overflow:hidden}',
        '.dlc-trigger:hover{background:var(--dsw-alias-interactive-bg-hover)}',
        '.dlc-trigger.rail{justify-content:center;width:36px;height:36px;margin:8px 0 10px;padding:0;border-radius:50%}',
        '.dlc-trigger-label{white-space:nowrap;overflow:hidden}',
        '.dlc-icon{width:18px;height:18px;display:block;flex:none}',
        '.dlc-panel{position:fixed;z-index:900;top:0;right:0;bottom:0;width:380px;display:flex;flex-direction:column;box-sizing:border-box;background:var(--dsw-alias-bg-base,#17181c);color:var(--dsw-alias-label-primary,#f5f5f5);border-left:1px solid var(--dsw-alias-border-l2,#292b31);box-shadow:var(--dsw-shadow-lv3)}',
        '.dlc-head{height:52px;flex:none;display:flex;align-items:center;justify-content:space-between;padding:8px 14px 8px 18px;box-sizing:border-box;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31)}',
        '.dlc-title{font-size:14px;font-weight:650}',
        '.dlc-subtitle{font-size:11px;color:var(--dsw-alias-label-secondary,#999da7);margin-top:2px}',
        '.dlc-close{border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary,#aaa);font-size:18px;cursor:pointer;padding:5px 9px}',
        '.dlc-close:hover{background:var(--dsw-alias-interactive-bg-hover)}',
        '.dlc-body{flex:1;min-height:0;padding:14px;overflow:auto;display:flex;flex-direction:column;gap:12px}',
        '.dlc-note{padding:12px;border-radius:10px;background:var(--dsw-alias-bg-layer-1,#202126);font-size:12px;line-height:1.5}',
        '.dlc-status{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:10px;background:color-mix(in srgb,#5d7cff 12%,transparent);font-size:12px;line-height:1.4}',
        '.dlc-dot{width:7px;height:7px;flex:none;border-radius:50%;background:#5d7cff}',
        '.dlc-button{height:30px;padding:0 11px;border:1px solid var(--dsw-alias-border-l1,#454750);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#25262b);color:var(--dsw-alias-label-primary,#f5f5f5);cursor:pointer;font:inherit;font-size:12px}',
        '.dlc-button:hover{background:var(--dsw-alias-bg-layer-2,#303238)}',
      ].join('')
      document.head.appendChild(style)
    }

    function LearningIcon() {
      return React.createElement('svg', { className: 'dlc-icon', viewBox: '0 0 18 18', fill: 'none', 'aria-hidden': true },
        React.createElement('path', { d: 'M3 4.5h12M3 8.5h12M3 12.5h8', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' }),
        React.createElement('path', { d: 'M13 11.5l1.4 1.4L16.5 11', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }),
      )
    }

    function LearningPanel({ onClose }) {
      return React.createElement('aside', { id: PANEL_ID, className: 'dlc-panel', 'aria-label': 'Workspace Learning' },
        React.createElement('header', { className: 'dlc-head' },
          React.createElement('div', null,
            React.createElement('div', { className: 'dlc-title' }, 'Workspace Learning'),
            React.createElement('div', { className: 'dlc-subtitle' }, 'Learning Coder'),
          ),
          React.createElement('button', { className: 'dlc-close', type: 'button', onClick: onClose, 'aria-label': 'Close' }, '×'),
        ),
        React.createElement('main', { className: 'dlc-body' },
          React.createElement('div', { className: 'dlc-note' },
            React.createElement('strong', null, 'Workspace learning library'),
            React.createElement('div', { style: { marginTop: 6, color: 'var(--dsw-alias-label-secondary,#999da7)' } }, 'Learning chapters are generated automatically after meaningful coding work. The library belongs to this workspace, not to an individual session.'),
          ),
          React.createElement('div', { className: 'dlc-status' },
            React.createElement('span', { className: 'dlc-dot', 'aria-hidden': true }),
            React.createElement('span', null, 'Automatic documentation is enabled'),
          ),
        ),
      )
    }

    function LearningEntry({ wide }) {
      const [open, setOpen] = React.useState(false)
      return React.createElement(React.Fragment, null,
        React.createElement('button', {
          type: 'button',
          className: 'dlc-trigger' + (wide ? '' : ' rail'),
          title: 'Learning',
          'aria-label': 'Learning',
          'aria-expanded': open,
          'aria-controls': PANEL_ID,
          onClick: () => setOpen(value => !value),
        },
          React.createElement(LearningIcon),
          wide && React.createElement('span', { className: 'dlc-trigger-label' }, 'Learning'),
        ),
        open && React.createElement(LearningPanel, { onClose: () => setOpen(false) }),
      )
    }

    function apply(ctx) {
      installStyle()
      ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
        name: 'sidebar.footer.action',
        id: NS,
        order: 0,
      }, LearningEntry))
    }

    exports.apply = apply
    exports.inject = ['slots']
    return module.exports
  },
})
