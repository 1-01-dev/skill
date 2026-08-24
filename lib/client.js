globalThis.__ModuleLoader__.load({
  id: 'dsh-learning-coder',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    const React = require('react')
    const NS = 'dsh-learning-coder'
    const BASE = '/plugin/dsh-learning-coder'
    const EN = { label: 'Learning', title: 'Workspace Learning', loading: 'Loading…', empty: 'No learning chapters yet.', create: 'Create chapter', creating: 'Creating…', open: 'Open library', obsidian: 'Open in Obsidian', refresh: 'Refresh', close: 'Close', saved: 'Saved', settings: 'Learning Coder', library: 'Learning library root', hint: 'Each DSH workspace gets its own project folder inside this directory.' }
    const ZH = { label: '学习', title: '工作区学习', loading: '正在加载…', empty: '还没有学习篇章。', create: '生成学习篇章', creating: '正在生成…', open: '打开学习库', obsidian: '在 Obsidian 中打开', refresh: '刷新', close: '关闭', saved: '已保存', settings: 'Learning Coder', library: '学习库根目录', hint: '每个 DSH Workspace 会在这里拥有自己的项目学习目录。' }

    function css() {
      if (document.querySelector('style[data-dlc]')) return
      const s = document.createElement('style')
      s.dataset.dlc = '1'
      s.textContent = `.dlc{height:100%;display:flex;flex-direction:column;min-width:0;background:var(--dsw-alias-bg-base,#17181c);color:var(--dsw-alias-label-primary,#f5f5f5)}.dlc-h{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31)}.dlc-t{font-size:13px;font-weight:650}.dlc-s{font-size:11px;color:var(--dsw-alias-label-secondary,#999da7);margin-top:2px}.dlc-x{border:0;background:transparent;color:var(--dsw-alias-label-secondary,#aaa);font-size:18px;cursor:pointer}.dlc-b{padding:12px;overflow:auto;display:flex;flex-direction:column;gap:10px}.dlc-stat,.dlc-note{padding:12px;border-radius:9px;background:var(--dsw-alias-bg-layer-1,#202126)}.dlc-n{font-size:24px;font-weight:650}.dlc-p{font:10px ui-monospace,monospace;color:var(--dsw-alias-label-secondary,#999);word-break:break-all;margin-top:6px}.dlc-list{border:1px solid var(--dsw-alias-border-l1,#34363d);border-radius:9px;overflow:hidden}.dlc-i{padding:10px 11px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31);cursor:pointer}.dlc-i:last-child{border:0}.dlc-i:hover{background:var(--dsw-alias-bg-layer-1,#25262b)}.dlc-m{font-size:10px;color:var(--dsw-alias-label-secondary,#999);margin-top:3px}.dlc-actions{display:flex;gap:7px;flex-wrap:wrap}.dlc-btn{height:28px;padding:0 10px;border:1px solid var(--dsw-alias-border-l1,#454750);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#25262b);color:var(--dsw-alias-label-primary,#f5f5f5);cursor:pointer;font-size:12px}.dlc-btn:hover{background:var(--dsw-alias-bg-layer-2,#303238)}.dlc-primary{background:#5d7cff!important;border-color:#5d7cff!important;color:#fff!important}.dlc-btn:disabled{opacity:.55;cursor:default}.dlc-input{width:100%;box-sizing:border-box;padding:9px;border:1px solid var(--dsw-alias-border-l1,#3b3d45);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#202126);color:inherit}`
      document.head.appendChild(s)
    }

    const api = (url, options) => fetch(url, { cache: 'no-store', ...(options || {}) }).then(async r => { const d = await r.json().catch(() => ({})); if (!r.ok) throw new Error(d.error || `HTTP ${r.status}`); return d })
    const chapterPrompt = () => ['Create a Learning Coder chapter for the last significant completed coding task in this DSH workspace.','The library is workspace-level, not session-level. Use the current session only as source context.','Base the chapter on actual changes, files, commands, diffs and verification evidence.','Write Obsidian-friendly Markdown with useful diagrams, focused code examples, decisions, glossary and learning checkpoint.','Save it in the configured workspace learning library.'].join('\n\n')

    function Header({ t, layout }) { return React.createElement('button', { className: 'dlc-btn', title: t('label'), onClick: () => layout.openDetails() }, t('label')) }

    function Panel({ t, sessionId, layout, prompt }) {
      const [data,setData] = React.useState(null), [busy,setBusy] = React.useState(false), [msg,setMsg] = React.useState(null)
      const load = React.useCallback(() => { if (!sessionId) return; setBusy(true); api(`${BASE}/workspace?sessionId=${encodeURIComponent(sessionId)}`).then(setData).catch(e => setMsg(e.message)).finally(() => setBusy(false)) }, [sessionId])
      React.useEffect(load,[load])
      const open = (mode,path) => api(`${BASE}/open`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({sessionId,mode,path}) }).catch(e=>setMsg(e.message))
      const create = async () => { try { setBusy(true); if (!prompt) throw new Error('Current session is unavailable'); await prompt(chapterPrompt()); setMsg(t('saved')); setTimeout(load,1000) } catch(e) { setMsg(e.message) } finally { setBusy(false) } }
      const w=data?.workspace, chapters=(w?.chapters||[]).filter(x=>x.type==='learning').slice(0,8)
      return React.createElement('section',{className:'dlc'},
        React.createElement('header',{className:'dlc-h'},React.createElement('div',null,React.createElement('div',{className:'dlc-t'},t('title')),React.createElement('div',{className:'dlc-s'},w?.name||t('loading'))),React.createElement('button',{className:'dlc-x',onClick:()=>layout.closeDetails()},'×')),
        React.createElement('main',{className:'dlc-b'},
          w&&React.createElement('div',{className:'dlc-stat'},React.createElement('div',{className:'dlc-n'},w.chapterCount),React.createElement('div',{className:'dlc-s'},'chapters'),React.createElement('div',{className:'dlc-p'},w.libraryPath)),
          chapters.length?React.createElement('div',{className:'dlc-list'},chapters.map(c=>React.createElement('div',{className:'dlc-i',key:c.path,onClick:()=>open('obsidian',c.path)},React.createElement('div',null,c.title),React.createElement('div',{className:'dlc-m'},[c.date,c.taskType,c.difficulty].filter(Boolean).join(' · ')))):React.createElement('div',{className:'dlc-note'},t('empty')),
          React.createElement('div',{className:'dlc-actions'},React.createElement('button',{className:'dlc-btn dlc-primary',disabled:busy,onClick:create},busy?t('creating'):t('create')),React.createElement('button',{className:'dlc-btn',onClick:()=>open('obsidian')},t('obsidian')),React.createElement('button',{className:'dlc-btn',onClick:()=>open('folder')},t('open')),React.createElement('button',{className:'dlc-btn',disabled:busy,onClick:load},t('refresh'))),
          msg&&React.createElement('div',{className:'dlc-note'},msg)
        ))
    }

    function Settings({ t }) {
      const [value,setValue]=React.useState(''),[saving,setSaving]=React.useState(false)
      React.useEffect(()=>{api(`${BASE}/settings`).then(d=>setValue(d.libraryRoot||'')).catch(()=>{})},[])
      const save=()=>{setSaving(true);api(`${BASE}/settings`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({libraryRoot:value})}).finally(()=>setSaving(false))}
      return React.createElement('div',{className:'dlc-b'},React.createElement('div',{className:'dlc-t'},t('settings')),React.createElement('div',{className:'dlc-s'},t('library')),React.createElement('input',{className:'dlc-input',value,onChange:e=>setValue(e.target.value),placeholder:'~/Documents/Obsidian/Development'}),React.createElement('div',{className:'dlc-s'},t('hint')),React.createElement('button',{className:'dlc-btn dlc-primary',disabled:saving||!value.trim(),onClick:save},saving?'…':t('saved')))
    }

    function apply(ctx) {
      css()
      const locale=ctx.locale, t=locale.bind(NS)
      ctx.effect(()=>locale.register(NS,{en:EN,zh:ZH}),'learning locale')
      ctx.slots.inject('conversation.session.header.utilities',()=>ctx.slots.register({name:'conversation.session.header.utilities',id:NS,order:25,locale:NS,inject:()=>({t,layout:ctx.layout})},Header))
      ctx.slots.inject('details',()=>ctx.slots.register({name:'details',id:NS,priority:-100,locale:NS,inject:(sessionId)=>({t,sessionId,layout:ctx.layout,prompt:(text)=>{const b=ctx.sessions.binding(sessionId);if(!b?.session?.prompt)return Promise.reject(new Error('Current session is unavailable'));return b.session.prompt([{type:'text',text}],'queue')}})},Panel))
      ctx.slots.inject('settings.section',()=>ctx.slots.register({name:'settings.section',id:`${NS}-settings`,order:55,label:()=>t('label'),locale:NS,inject:()=>({t})},Settings))
    }
    exports.apply=apply
    exports.inject=['slots','locale','sessions','layout']
    return module.exports
  },
})
