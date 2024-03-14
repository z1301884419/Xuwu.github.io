import{d as v,j as i,c as f,a as t,q as r,l as o,p as b,b as L,o as m,m as d,_ as g}from"./index-a2eccc6b.js";const p=a=>(b("data-v-8198c5ff"),a=a(),L(),a),x={class:"box"},k={id:"browser_about_window"},R=p(()=>t("h3",null,"比较常用的Window的属性或方法",-1)),D={style:{"word-break":"auto-phrase"}},E=["innerHTML"],H={id:"browser_about_windowevent"},U=p(()=>t("h3",null,"比较常用的Window的事件",-1)),T={style:{"word-break":"auto-phrase"}},M=["innerHTML"],B={id:"browser_about_screen"},W=p(()=>t("h3",null,"Screen对象常用的属性",-1)),S={style:{"word-break":"auto-phrase"}},N=["innerHTML"],j={id:"browser_about_location"},C=p(()=>t("h3",null,"Location对象常用的属性或方法",-1)),X={style:{"word-break":"auto-phrase"}},Y=["innerHTML"],z={id:"browser_about_history"},A=p(()=>t("h3",null,"History对象常用的属性或方法",-1)),I={style:{"word-break":"auto-phrase"}},V=["innerHTML"],O=p(()=>t("h3",null,"History对象扩展",-1)),q={style:{"word-break":"auto-phrase"}},F=["innerHTML"],G={id:"browser_about_navigator"},P=p(()=>t("h3",null,"Navigator对象常用的属性或方法",-1)),J={style:{"word-break":"auto-phrase"}},K=["innerHTML"],Q=v({__name:"BrowserAbout",setup(a){const c=[{property:"closed",desc:"返回窗口是否已被关闭。"},{property:"opener",desc:"返回对创建此窗口的窗口的引用。"},{property:"frames",desc:"返回窗口中所有命名的框架。该集合是window对象的数组。"},{property:"parent",desc:"返回父窗口。"},{property:"length",desc:"设置或返回窗口中的框架数量。"},{property:"name",desc:"设置或返回窗口的名称。"},{property:"self",desc:"返回当前窗口的引用，相当于window属性。"},{property:"top",desc:"返回最顶层的父窗口。"},{property:"innerHeight",desc:"返回窗口的文档显示区的高度。"},{property:"innerWidth",desc:"返回窗口的文档显示区的宽度。"},{property:"outerHeight",desc:"返回窗口的外部高度，包含工具条与滚动条。"},{property:"outerWidth",desc:"返回窗口的外部宽度，包含工具条与滚动条。"},{property:"pageXOffest",desc:"设置或返回当前页面相对于窗口显示区左上角的X位置"},{property:"pageYOffest",desc:"设置或返回当前页面相对于窗口显示区左上角的Y位置"},{property:"screenLeft",desc:"返回相对于屏幕窗口的x坐标。"},{property:"screenTop",desc:"返回相对于屏幕窗口的y坐标。"},{property:"screenX",desc:"返回相对于屏幕窗口的x坐标。"},{property:"screenY",desc:"返回相对于屏幕窗口的y坐标。"},{property:"open(url, name, specs, replace)",desc:`打开一个新的浏览器窗口或查找一个已命名的窗口。
    url: url; name: taget属性或窗口的名称; specs: <a href="https://www.w3cschool.cn/jsref/met-win-open.html">
    specs值</a>; replace: boolean值，新建(false)记录还是替换(true)记录。`},{property:"close()",desc:"关闭浏览器窗口。"},{property:"focus()",desc:"把键盘焦点给予一个窗口。"},{property:"blur()",desc:"把键盘焦点从顶层窗口移出。"},{property:"print()",desc:"打印当前窗口的内容。"},{property:"scrollBy(x, y)",desc:`按照指定的像素值来滚动内容。X: 把文档向右滚动的像素值；
    Y: 把文档向下滚动的像素数`},{property:"scrollTo(x, y)",desc:"把内容滚动到指定的坐标。X: x坐; Y: y坐标"},{property:"moveBy(x, y)",desc:"把当前窗口的坐标移动指定的像素。x: x轴上增加的像素数。可以是正负数; y: y轴上增加的像素数。可以是正负数"},{property:"moveTo(x, y)",desc:"把窗口的左上角移动到一个指定的坐标。"},{property:"resizeBy(width, height)",desc:"按照指定的像素调整窗口的大小。width: 使窗口宽度增加的像素数。可以是正负数; height: 使窗口高度增加的像素数。可以是正负数。"},{property:"resizeTo(width, height)",desc:"把窗口的大小调整到指定的宽度和高度。width: 设置窗口的宽度，单位: 像素; height: 设置窗口的高度，单位: 像素。"}],l=[{property:"popstate",desc:'当history对象中历史记录被更新时触发。使用：window.addEventListener("popstate",(event)=>{})或设置onpopstate = (event)=>{}'},{property:"afterprint",desc:`在关联的文档开始打印或关闭打印预览后触发。
    使用：window.addEventListener("afterprint",(event)=>{})
    或设置window.onafterprint = (event)=>{}`},{property:"beforeprint",desc:`在关联的文档即将打印或关闭打印预览后触发。
    使用：window.addEventListener("beforeprint",(event)=>{})
    或设置window.onbeforeprint = (event)=>{}`},{property:"appinstalled",desc:`会在网页应用成功安装为<a href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps">渐进式网页<a>时立即触发。
    使用：window.onappinstalled = (event)=>{}`},{property:"beforeinstallprompt",desc:`当一个web清单存在时，它将在移动设备上发送，但是在提示用户将网站保存到主屏幕之前。
    使用：window.addEventListener("beforeinstallprompt",(event)=>{})
    或设置window.onbeforeinstallprompt = (event)=>{}`},{property:"beforeunload",desc:`当浏览器窗口关闭或者刷新时，会触发beforeunload事件，在此事件中使用event.preventDefault()或
    event.returnValue = ""，可使网页触发一个确认对话框，询问用户是否真的要离开该页面。
    使用：window.addEventListener("beforeunload",(event)=>{})
    或设置window.onbeforeunload = (event)=>{}`},{property:"focus",desc:`当页面得到聚焦时触发。
    使用：window.addEventListener("focus",(event)=>{})
    或设置window.onfocus = (event)=>{}`},{property:"focusin",desc:`当页面内元素得到聚焦时触发，在focus事件之后，focusin会冒泡。
    使用：window.addEventListener("focusin",(event)=>{})`},{property:"focusout",desc:`当页面内元素失去聚焦时触发，在blur事件之后，focusout会冒泡。
    使用：window.addEventListener("focusout",(event)=>{})`},{property:"copy",desc:`当用户通过浏览器的用户界面发起一个复制动作时触发。使用event.preventDefault()可阻止其行为，使用
    event.clipboardData.setData('text/plain',string)来修改剪粘板的内容。
    使用：window.addEventListener("copy",(event)=>{})
    或设置window.oncopy = (event)=>{}`},{property:"cut",desc:`当用户通过浏览器的用户界面发起一个剪切动作时触发。使用event.preventDefault()可阻止其行为，使用
    event.clipboardData.setData('text/plain',string)来修改剪粘板的内容。
    使用：window.addEventListener("cut",(event)=>{})
    或设置window.oncut = (event)=>{}`},{property:"paste",desc:`当用户通过浏览器的用户界面发起一个粘贴动作时触发。使用event.preventDefault()可阻止其行为，使用
    event.clipboardData.setData('text/plain',string)来修改剪粘板的内容。
    使用：window.addEventListener("paste",(event)=>{})
    或设置window.onpaste = (event)=>{}`},{property:"fullscreenchange",desc:`当元素切换到或退出全屏模式时触发。
    使用：el.addEventListener("fullscreenchange",(event)=>{})
    或设置el.onfullscreenchange = (event)=>{}; 
    el.requestFullscreen()：进入全屏，el.exitFullscreen()：退出全屏。`},{property:"fullscreenerror",desc:`当浏览器无法切换到全屏模式时触发。
    使用：el.addEventListener("fullscreenerror",(event)=>{})
    或设置el.onfullscreenerror = (event)=>{};`}],w=[{property:"availHeight",desc:"返回屏幕的高度 (不包括Window任务栏)。"},{property:"availWidth",desc:"返回屏幕的宽度 (不包括Window任务栏)。"},{property:"height",desc:"返回屏幕的总高度。"},{property:"width",desc:"返回屏幕的总宽度。"},{property:"colorDepth",desc:"返回目标设备或缓冲器上的调色板的比特深度。"},{property:"pixelDepth",desc:"返回屏幕的颜色分辨率（每像素的位数）。"}],y=[{property:"appCodeName",desc:"返回浏览器的代码名。"},{property:"appName",desc:"返回浏览器的名称。"},{property:"appVersion",desc:"返回浏览器的平台和版本信息。"},{property:"cookieEnabled",desc:"返回浏览器中是否启用cookie的布尔值。"},{property:"platform",desc:"返回运行浏览器的操作系统平台。"},{property:"userAgent",desc:"返回用户向服务器发送的user-agent头部的值。"},{property:"systemLanguage",desc:"返回用户代理语言。"},{property:"javaEnabled()",desc:"指定是否在浏览器中启用java,返回一个布尔值，表示浏览器是否支持并启用了java"}],u=[{property:"length(只读)",desc:"返回历史列表（栈）中的网址数。"},{property:"state(只读)",desc:"返回历史列表（栈）中顶部URL页面的状态的值。属性值包括:{ back,current,forward,position,replaced,scroll }"},{property:"scrollRestoration",desc:"允许web应用程序在历史导航上显式地设置默认滚动恢复行为。此属性可以是自动的(默认为auto)或者手动的(manual)"},{property:"back()",desc:"加载history列表中的上一个URL。"},{property:"forward()",desc:"加载history列表中的下一个URL。"},{property:"go(number|URL)",desc:"加载history列表中的某个具体页面。"},{property:"pushState(state,title,url)",desc:'向会话历史记录添加新条目。state:可序列化对象,可以设置任何属性；title:"",为兼容必备的，应始终为空字符串；url: 与当前页面同源的地址。'},{property:"replaceState(state,title,url)",desc:'更新当前页面的会话历史记录。state:可序列化对象,可以设置任何属性；title:"",为兼容必备的，应始终为空字符串；url: 与当前页面同源的地址。'}],_=[{property:"popstate",desc:'当history对象中历史记录被更新时触发。使用：window.addEventListener("popstate",(event)=>{})或设置window.onpopstate = (event)=>{}'}],h=[{property:"hash",desc:"设置或返回当前URL的锚部分。"},{property:"host",desc:"设置或返回当前URL的主机名和端口。"},{property:"hostname",desc:"设置或返回当前URL的主机名。"},{property:"href",desc:"返回完整的URL或设置URL完整的路径部分(包括锚部分)。"},{property:"pathname",desc:"设置或返回当前完整的URL路径名(不包括锚部分)。"},{property:"search",desc:"返回当前URL的查询部分(URL?之后的部分)。"},{property:"port",desc:"设置或返回当前URL服务器使用的端口号。"},{property:"protocol",desc:"设置或返回当前URL协议。"},{property:"origin",desc:"返回当前URL的源信息(只读)。"},{property:"ancestorOrigins",desc:"返回当前Location对象所属文档先前所有浏览上下文的来源。"},{property:"assign(URL)",desc:"载入一个新的文档。(存入栈，同源下URL可以是完整的路径名。)"},{property:"reload(forceGet)",desc:"重新载入当前文档。forceGet: boolean值，如果为true，文档的加载会绕过缓存，从服务器上重新下载该文档。"},{property:"replace(newURL)",desc:"用新的文档替换当前文档。（不进栈，同源下URL可以是完整的路径名。）"}];return(Z,$)=>{const s=i("el-table-column"),n=i("el-table");return m(),f("div",x,[t("section",k,[R,r(n,{data:c,border:""},{default:o(()=>[r(s,{label:"属性或方法","min-width":"220"},{default:o(e=>[t("div",D,d(e.row.property),1)]),_:1}),r(s,{label:"描述","min-width":"300"},{default:o(e=>[t("div",{style:{"word-break":"auto-phrase"},innerHTML:e.row.desc},null,8,E)]),_:1})]),_:1})]),t("section",H,[U,r(n,{data:l,border:""},{default:o(()=>[r(s,{label:"事件名","min-width":"220"},{default:o(e=>[t("div",T,d(e.row.property),1)]),_:1}),r(s,{label:"描述","min-width":"300"},{default:o(e=>[t("div",{style:{"word-break":"auto-phrase"},innerHTML:e.row.desc},null,8,M)]),_:1})]),_:1})]),t("section",B,[W,r(n,{data:w,border:""},{default:o(()=>[r(s,{label:"属性","min-width":"100"},{default:o(e=>[t("div",S,d(e.row.property),1)]),_:1}),r(s,{label:"描述","min-width":"300"},{default:o(e=>[t("div",{style:{"word-break":"auto-phrase"},innerHTML:e.row.desc},null,8,N)]),_:1})]),_:1})]),t("section",j,[C,r(n,{data:h,border:""},{default:o(()=>[r(s,{label:"属性或方法","min-width":"100"},{default:o(e=>[t("div",X,d(e.row.property),1)]),_:1}),r(s,{label:"描述","min-width":"300"},{default:o(e=>[t("div",{style:{"word-break":"auto-phrase"},innerHTML:e.row.desc},null,8,Y)]),_:1})]),_:1})]),t("section",z,[A,r(n,{data:u,border:""},{default:o(()=>[r(s,{label:"属性或方法","min-width":"150"},{default:o(e=>[t("div",I,d(e.row.property),1)]),_:1}),r(s,{label:"描述","min-width":"300"},{default:o(e=>[t("div",{style:{"word-break":"auto-phrase"},innerHTML:e.row.desc},null,8,V)]),_:1})]),_:1}),O,r(n,{data:_,border:""},{default:o(()=>[r(s,{label:"事件","min-width":"150"},{default:o(e=>[t("div",q,d(e.row.property),1)]),_:1}),r(s,{label:"描述","min-width":"300"},{default:o(e=>[t("div",{style:{"word-break":"auto-phrase"},innerHTML:e.row.desc},null,8,F)]),_:1})]),_:1})]),t("section",G,[P,r(n,{data:y,border:""},{default:o(()=>[r(s,{label:"属性或方法","min-width":"100"},{default:o(e=>[t("div",J,d(e.row.property),1)]),_:1}),r(s,{label:"描述","min-width":"300"},{default:o(e=>[t("div",{style:{"word-break":"auto-phrase"},innerHTML:e.row.desc},null,8,K)]),_:1})]),_:1})])])}}});const te=g(Q,[["__scopeId","data-v-8198c5ff"]]);export{te as default};
