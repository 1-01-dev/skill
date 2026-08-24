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
      label: 'Learning', title: 'Workspace Learning', loading: 'Loading workspace…', error: 'Unable to load learning library',
      chapters: 'chapters', recent: 'Recent chapters', empty: 'No learning chapters yet.', create: 'Create chapter', creating: 'Sending to agent…',
      open: 'Open library', obsidian: 'Open in Obsidian', refresh: 'Refresh', close: 'Close', created: 'Learning request sent to the current session.',
      settings: 'Learning Coder', library: 'Learning library root', hint: 'Each DSH workspace gets its own project folder inside this directory.', save: 'Save', saved: 'Saved',
    }
    const ZH = {
      label: '学习', title: '工作区学习', loading: '正在加载工作区…', error: '无法加载学习库', chapters: '篇章', recent: '最近学习', empty: '还没有学习篇章。',
      create: '生成学习篇章', creating: '正在发送给 Agent…', open: '打开学习库', obsidian: '在 Obsidian 中打开', refresh: '刷新', close: '关闭', created: '学习请求已发送到当前会话。',
      settings: 'Learning Coder', library: '学习库根目录', hint: '每个 DSH Workspace 会在这里拥有自己的项目学习目录。', save: '保存', saved: '已保存',
    }

    function injectCss() {
      if (typeof document === 'undefined' || document.querySelector('style[data-plugin-css="dsh-learning-coder"]')) return
      const s = document.createElement('style')
      s.dataset.plugin = 'dsh-learning-coder'; s.dataset.pluginCss = 'dsh-learning-coder'
      s.textContent = `
        .dlc-btn{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:1px solid var(--dsw-alias-border-l1,#454750);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#25262b);color:var(--dsw-alias-label-primary,#f5f5f5);font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap}.dlc-btn:hover{border-color:var(--dsw-alias-brand-primary,#6680ff);background:var(--dsw-alias-bg-layer-2,#303238)}
        .dlc-panel{position:fixed;top:48px;right:12px;width:430px;max-width:calc(100vw - 24px);max-height:78vh;z-index:9999;display:flex;flex-direction:column;overflow:hidden;background:var(--dsw-alias-bg-base,#17181c);color:var(--dsw-alias-label-primary,#f5f5f5);border:1px solid var(--dsw-alias-border-l1,#34363d);border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.35)}
        .dlc-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31)}.dlc-title{font-size:13px;font-weight:650}.dlc-sub{font-size:11px;color:var(--dsw-alias-label-secondary,#999da7);margin-top:2px}.dlc-close{width:28px;height:28px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary,#a5a8b0);cursor:pointer;font-size:18px}.dlc-close:hover{background:var(--dsw-alias-bg-layer-2,#2a2c31)}
        .dlc-body{padding:12px;overflow:auto;display:flex;flex-direction:column;gap:10px}.dlc-stat{display:flex;align-items:flex-end;justify-content:space-between;padding:13px 14px;border:1px solid var(--dsw-alias-border-l1,#34363d);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#1f2025)}.dlc-num{font-size:25px;font-weight:650;line-height:1}.dlc-label{font-size:11px;color:var(--dsw-alias-label-secondary,#9ca0aa)}
        .dlc-section{font-size:11px;font-weight:650;color:var(--dsw-alias-label-secondary,#9ca0aa);text-transform:uppercase;letter-spacing:.06em}.dlc-list{display:flex;flex-direction:column;border:1px solid var(--dsw-alias-border-l1,#34363d);border-radius:10px;overflow:hidden}.dlc-item{padding:11px 12px;border-bottom:1px solid var(--dsw-alias-border-l2,#292b31);cursor:pointer}.dlc-item:last-child{border-bottom:0}.dlc-item:hover{background:var(--dsw-alias-bg-layer-1,#202126)}.dlc-item-title{font-size:12px;font-weight:550}.dlc-item-meta{font-size:10px;color:var(--dsw-alias-label-secondary,#9397a1);margin-top:3px}.dlc-path{font:10px/1.45 ui-monospace,SFMono-Regular,Menlo,monospace;word-break:break-all;color:var(--dsw-alias-label-secondary,#9da1aa);max-width:250px}
        .dlc-actions{display:flex;gap:7px;flex-wrap:wrap}.dlc-primary{background:var(--dsw-alias-brand-primary,#5d7cff);border-color:var(--dsw-alias-brand-primary,#5d7cff);color:#fff}.dlc-msg{font-size:11px;line-height:1.45;padding:8px 10px;border-radius:8px;background:rgba(93,124,255,.1);color:var(--dsw-alias-label-secondary,#b2b6c0)}.dlc-error{font-size:11px;padding:9px 10px;border-radius:8px;background:rgba(239,92,92,.1);color:#ff9696}
        .dlc-settings{max-width:680px;display:flex;flex-direction:column;gap:12px}.dlc-field{display:flex;flex-direction:column;gap:6px}.dlc-input{box-sizing:border-box;width:100%;padding:9px 10px;border:1px solid var(--dsw-alias-border-l1,#3b3d45);border-radius:8px;background:var(--dsw-alias-bg-layer-1,#202126);color:var(--dsw-alias-label-primary,#f5f5f5);font:12px inherit}.dlc-hint{font-size:11px;line-height:1.5;color:var(--dsw-alias-label-secondary,#969aa4)}
        @media(max-width:560px){.dlc-panel{right:8px;width:calc(100vw - 16px);top:44px}.dlc-btn{padding:0 8px}.dlc-btn-label{display:none}}
      `
      document.head.appendChild(s)
    }

    function icon() {
      return React.createElement('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round'},
        React.createElement('path',{d:'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z'}),React.createElement('path',{d:'M4 5.5v16'}),React.createElement('path',{d:'M8 7h8M8 10h8'}))
    }
    function api(url, options){return fetch(url,{cache:'no-store',...(options||{})}).then(async r=>{const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||`HTTP ${r.status}`);return d})}

    function Panel({sessionId,controller,t,onClose}){
      const [info,setInfo]=React.useState(null),[loading,setLoading]=React.useState(false),[error,setError]=React.useState(null),[creating,setCreating]=React.useState(false),[message,setMessage]=React.useState(null)
      const load=React.useCallback(()=>{if(!sessionId)return;setLoading(true);setError(null);api(`${BASE}/workspace?sessionId=${encodeURIComponent(sessionId)}`).then(setInfo).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[sessionId])
      React.useEffect(()=>{load()},[load])
      const openPath=(mode,path)=>api(`${BASE}/open`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId,mode,path})}).catch(e=>setMessage(e.message))
      const create=async()=>{setCreating(true);setMessage(null);try{const p=info?.workspace?.libraryPath;const prompt=['Create a Learning Coder chapter for the last significant completed coding task in this DSH workspace.','The learning library is workspace-level, not session-level. Treat the current session only as source context.','Use the installed learning-coder skill. Base the chapter on actual changes, files, diffs, commands, and verification evidence.','Write an Obsidian-friendly Markdown chapter with adaptive structure, callouts, compact Mermaid or ASCII diagrams when useful, focused code examples, decision reasoning, glossary, and a learning checkpoint.',p?`Save the chapter in this workspace learning library: ${p}`:'Save it in the configured workspace learning library.','Do not create a chapter for every session. One meaningful completed task should produce one learning chapter.'].join('\n\n');const result=await controller.prompt(sessionId,prompt);if(!result.ok)throw new Error(result.error?.message||'prompt rejected');setMessage(t('created'));setTimeout(load,1000)}catch(e){setMessage(e.message||String(e))}finally{setCreating(false)}}
      const w=info?.workspace, chapters=(w?.chapters||[]).filter(x=>x.type==='learning').slice(0,8)
      return React.createElement('section',{className:'dlc-panel',role:'dialog','aria-label':t('title')},
        React.createElement('header',{className:'dlc-head'},React.createElement('div',null,React.createElement('div',{className:'dlc-title'},t('title')),React.createElement('div',{className:'dlc-sub'},w?.name||t('loading'))),React.createElement('button',{className:'dlc-close',onClick:onClose,'aria-label':t('close')},'×')),
        React.createElement('div',{className:'dlc-body'},loading&&!info&&React.createElement('div',{className:'dlc-msg'},t('loading')),error&&React.createElement('div',{className:'dlc-error'},`${t('error')}: ${error}`),w&&React.createElement(React.Fragment,null,
          React.createElement('div',{className:'dlc-stat'},React.createElement('div',null,React.createElement('div',{className:'dlc-num'},w.chapterCount),React.createElement('div',{className:'dlc-label'},t('chapters'))),React.createElement('div',{className:'dlc-path'},w.libraryPath)),
          React.createElement('div',{className:'dlc-section'},t('recent')),
          chapters.length?React.createElement('div',{className:'dlc-list'},chapters.map(c=>React.createElement('div',{key:c.path,className:'dlc-item',onClick:()=>openPath('obsidian',c.path)},React.createElement('div',{className:'dlc-item-title'},c.title),React.createElement('div',{className:'dlc-item-meta'},[c.date,c.taskType,c.difficulty].filter(Boolean).join(' · '))))):React.createElement('div',{className:'dlc-msg'},t('empty')),
          React.createElement('div',{className:'dlc-actions'},React.createElement('button',{className:'dlc-btn dlc-primary',disabled:creating,onClick:create},icon(),creating?t('creating'):t('create')),React.createElement('button',{className:'dlc-btn',onClick:()=>openPath('obsidian')},t('obsidian')),React.createElement('button',{className:'dlc-btn',onClick:()=>openPath('folder')},t('open')),React.createElement('button',{className:'dlc-btn',disabled:loading,onClick:load},t('refresh'))),
          message&&React.createElement('div',{className:'dlc-msg'},message))),
      )
    }

    function HeaderAction({sessionId,controller,t}){
      const [open,setOpen]=React.useState(false)
      return React.createElement(React.Fragment,null,React.createElement('button',{className:'dlc-btn',onClick:()=>setOpen(true),title:t('label')},icon(),React.createElement('span',{className:'dlc-btn-label'},t('label'))),open&&React.createElement(Panel,{sessionId,controller,t,onClose:()=>setOpen(false)}))
    }

    function SettingsPage({t}){
      const [value,setValue]=React.useState(''),[loading,setLoading]=React.useState(true),[saving,setSaving]=React.useState(false),[saved,setSaved]=React.useState(false),[error,setError]=React.useState(null)
      React.useEffect(()=>{api(`${BASE}/settings`).then(d=>setValue(d.libraryRoot||'')).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[])
      const save=()=>{setSaving(true);setSaved(false);setError(null);api(`${BASE}/settings`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({libraryRoot:value})}).then(d=>{setValue(d.libraryRoot||value);setSaved(true)}).catch(e=>setError(e.message)).finally(()=>setSaving(false))}
      return React.createElement('div',{className:'dlc-settings'},React.createElement('div',{className:'dlc-title'},t('settings')),React.createElement('div',{className:'dlc-field'},React.createElement('label',{className:'dlc-label'},t('library')),React.createElement('input',{className:'dlc-input',value,disabled:loading||saving,onChange:e=>setValue(e.target.value),placeholder:'~/Documents/Obsidian/Development'}),React.createElement('div',{className:'dlc-hint'},t('hint'))),React.createElement('div',{className:'dlc-actions'},React.createElement('button',{className:'dlc-btn dlc-primary',disabled:saving||!value.trim(),onClick:save},saving?'…':t('save')),saved&&React.createElement('span',{className:'dlc-hint'},t('saved'))),error&&React.createElement('div',{className:'dlc-error'},error))
    }

    class Controller{constructor(sessions){this.sessions=sessions}prompt(sessionId,text){const binding=this.sessions.binding(sessionId);if(!binding)return Promise.resolve({ok:false,error:{message:'Current session is unavailable'}});return binding.session.prompt([{type:'text',text}],'queue')}}

    function apply(ctx){injectCss();const locale=ctx.locale;const t=locale.bind(NS);const controller=new Controller(ctx.get('sessions'));ctx.provide('learningCoder',controller);ctx.effect(()=>locale.register(NS,{zh:ZH,en:EN}),'dsh-learning-coder: dictionaries')
      ctx.slots.inject('conversation.session.header.utilities',()=>ctx.slots.register({name:'conversation.session.header.utilities',id:'dsh-learning-coder',locale:NS,order:25,inject:()=>({controller,t})},HeaderAction))
      ctx.slots.inject('settings.section',()=>ctx.slots.register({name:'settings.section',id:'dsh-learning-coder-settings',locale:NS,order:55,label:()=>t('label'),inject:()=>({t})},SettingsPage))
    }
    exports.apply=apply;exports.inject=['slots','locale','sessions'];exports.Controller=Controller;return module.exports
  },
})
