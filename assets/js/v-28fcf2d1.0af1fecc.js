(self.webpackChunkopeneuler_guide=self.webpackChunkopeneuler_guide||[]).push([[241],{1992:(l,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>e});const e={key:"v-28fcf2d1",path:"/exclusive/oracle.html",title:"Oracle 数据库",lang:"zh-CN",frontmatter:{sidebarDepth:2},excerpt:"",headers:[{level:3,title:"🏺 折戟沉沙铁未销，自将磨洗认前朝",slug:"🏺-折戟沉沙铁未销-自将磨洗认前朝",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"了解 Oracle 数据库",slug:"了解-oracle-数据库",children:[]},{level:2,title:"安装 Oracle 数据库",slug:"安装-oracle-数据库",children:[{level:3,title:"1. 固定 IP 地址",slug:"_1-固定-ip-地址",children:[]},{level:3,title:"2. 绑定主机名",slug:"_2-绑定主机名",children:[]},{level:3,title:"3. 关闭 SELinux",slug:"_3-关闭-selinux",children:[]},{level:3,title:"4. 关闭防火墙",slug:"_4-关闭防火墙",children:[]},{level:3,title:"5. 重启系统",slug:"_5-重启系统",children:[]},{level:3,title:"6. 下载安装文件",slug:"_6-下载安装文件",children:[]},{level:3,title:"7. 安装依赖包",slug:"_7-安装依赖包",children:[]},{level:3,title:"8. 创建相关用户和用户组",slug:"_8-创建相关用户和用户组",children:[]},{level:3,title:"9. 修改相关配置文件",slug:"_9-修改相关配置文件",children:[]},{level:3,title:"9. 创建目录",slug:"_9-创建目录",children:[]},{level:3,title:"10. 开始安装",slug:"_10-开始安装",children:[]}]},{level:2,title:"接下来...",slug:"接下来",children:[]}],filePathRelative:"exclusive/oracle.md",git:{updatedTime:1626880821e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:3}]}}},7065:(l,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>jl});var e=s(6252);const a=s.p+"assets/img/selinux.7aa727b9.png",m=s.p+"assets/img/firewalld-1.f26a9c4a.png",i=s.p+"assets/img/firewalld-2.30693ca7.png",c=s.p+"assets/img/download-1.b0810260.png",t=s.p+"assets/img/download-2.b6072d6e.png",u=s.p+"assets/img/groupadd.6c4134f5.png",W=s.p+"assets/img/useradd.f43f483d.png",r=s.p+"assets/img/passwd.a6fd7734.png",o=s.p+"assets/img/config-1.93ecfe88.png",d=s.p+"assets/img/config-2.19756ba3.png",p=s.p+"assets/img/config-3.048e17ae.png",b=s.p+"assets/img/config-4.da6f8fde.png",k=s.p+"assets/img/config-5.2755dae8.png",g=s.p+"assets/img/config-6.c6028147.png",h=s.p+"assets/img/config-7.d2e881a3.png",f=s.p+"assets/img/config-8.9ea485c8.png",U=s.p+"assets/img/install-1.c9fb6375.png",v=s.p+"assets/img/install-2.5e27452a.png",_=s.p+"assets/img/install-3.a4f57a59.png",x=s.p+"assets/img/install-4.f1bdb4f6.png",w=s.p+"assets/img/install-5.7aca359a.png",E=s.p+"assets/img/install-6.d06abdce.png",y=s.p+"assets/img/install-7.963d4047.png",O=s.p+"assets/img/install-8.3c70d009.png",L=s.p+"assets/img/install-9.a090da6d.png",S=(0,e.Wm)("h1",{id:"oracle-数据库",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#oracle-数据库","aria-hidden":"true"},"#"),(0,e.Uk)(" Oracle 数据库")],-1),X=(0,e.Wm)("blockquote",null,[(0,e.Wm)("h3",{id:"🏺-折戟沉沙铁未销-自将磨洗认前朝",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#🏺-折戟沉沙铁未销-自将磨洗认前朝","aria-hidden":"true"},"#"),(0,e.Uk)(" 🏺 折戟沉沙铁未销，自将磨洗认前朝")]),(0,e.Wm)("p",null,"这一小节我们将讨论如何在 openEuler 上部署 Oracle 数据库。")],-1),A=(0,e.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,e.Uk)(" 🔖 这一节将会讨论：")],-1),I={class:"custom-container details"},N=(0,e.Wm)("summary",null,"目录",-1),R={class:"table-of-contents"},B=(0,e.Uk)("🏺 折戟沉沙铁未销，自将磨洗认前朝"),C=(0,e.Uk)("🔖 这一节将会讨论："),P=(0,e.Uk)("了解 Oracle 数据库"),D=(0,e.Uk)("安装 Oracle 数据库"),H=(0,e.Uk)("1. 固定 IP 地址"),$=(0,e.Uk)("2. 绑定主机名"),q=(0,e.Uk)("3. 关闭 SELinux"),z=(0,e.Uk)("4. 关闭防火墙"),T=(0,e.Uk)("5. 重启系统"),M=(0,e.Uk)("6. 下载安装文件"),j=(0,e.Uk)("7. 安装依赖包"),F=(0,e.Uk)("8. 创建相关用户和用户组"),G=(0,e.Uk)("9. 修改相关配置文件"),V=(0,e.Uk)("9. 创建目录"),Y=(0,e.Uk)("10. 开始安装"),Z=(0,e.Uk)("接下来..."),J=(0,e.Wm)("h2",{id:"了解-oracle-数据库",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#了解-oracle-数据库","aria-hidden":"true"},"#"),(0,e.Uk)(" 了解 Oracle 数据库")],-1),K={href:"https://www.oracle.com/cn/database/",target:"_blank",rel:"noopener noreferrer"},Q=(0,e.Uk)("Oracle 数据库"),ll=(0,e.Uk)("（简称 Oracle）是 "),nl={href:"https://www.oracle.com/cn/index.html",target:"_blank",rel:"noopener noreferrer"},sl=(0,e.Uk)("甲骨文公司"),el=(0,e.Uk)(" 的一款关系数据库。"),al=(0,e.Uk)("当前最新的长期支持版为 Oracle Database 19c，但部分企业还在使用 "),ml={href:"https://www.oracle.com/cn/database/12c-database/",target:"_blank",rel:"noopener noreferrer"},il=(0,e.Uk)("Oracle Database 12c"),cl=(0,e.Uk)("。本指南会对这两个版本进行部署演示。"),tl=(0,e.Wm)("h2",{id:"安装-oracle-数据库",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#安装-oracle-数据库","aria-hidden":"true"},"#"),(0,e.Uk)(" 安装 Oracle 数据库")],-1),ul=(0,e.Wm)("h3",{id:"_1-固定-ip-地址",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_1-固定-ip-地址","aria-hidden":"true"},"#"),(0,e.Uk)(" 1. 固定 IP 地址")],-1),Wl=(0,e.Uk)("参阅 "),rl=(0,e.Uk)("1-2. 固定 IP 地址"),ol=(0,e.Uk)(" 将 IP 地址固定。"),dl=(0,e.Wm)("h3",{id:"_2-绑定主机名",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_2-绑定主机名","aria-hidden":"true"},"#"),(0,e.Uk)(" 2. 绑定主机名")],-1),pl=(0,e.Uk)("参阅 "),bl=(0,e.Uk)("1-3. 绑定主机名"),kl=(0,e.Uk)(" 将 IP 地址和主机名绑定。"),gl=(0,e.Wm)("h3",{id:"_3-关闭-selinux",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_3-关闭-selinux","aria-hidden":"true"},"#"),(0,e.Uk)(" 3. 关闭 SELinux")],-1),hl=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"查看 SELinux 运行状态："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"sestatus\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,"若第一行为以下内容则为运行状态："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"SELinux status:                 enabled\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"关闭 SELinux："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Uk)("setenforce "),(0,e.Wm)("span",{class:"token number"},"0"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"# 暂时关闭 SELinux"),(0,e.Uk)("\nsudoedit /etc/selinux/config "),(0,e.Wm)("span",{class:"token comment"},"# 编辑 SELinux 配置文件"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Uk)("将 "),(0,e.Wm)("code",null,"SELINUX"),(0,e.Uk)(" 的值改为 "),(0,e.Wm)("code",null,"disabled"),(0,e.Uk)("：")]),(0,e.Wm)("div",{class:"language-conf ext-conf line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-conf"},[(0,e.Wm)("code",null,"SELINUX=disabled # 重启后才会生效\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:a,alt:"selinux"})])])],-1),fl=(0,e.Wm)("h3",{id:"_4-关闭防火墙",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-关闭防火墙","aria-hidden":"true"},"#"),(0,e.Uk)(" 4. 关闭防火墙")],-1),Ul=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"查看防火墙运行状态："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"systemctl status firewalld.service\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:m,alt:"firewalld-1"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"关闭防火墙："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(" systemctl stop firewalld.service "),(0,e.Wm)("span",{class:"token comment"},"# 关闭防火墙"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(" systemctl disable firewalld.service "),(0,e.Wm)("span",{class:"token comment"},"# 禁止开机启动"),(0,e.Uk)("\nsystemctl status firewalld.service "),(0,e.Wm)("span",{class:"token comment"},"# 复查一下"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:i,alt:"firewalld-2"})])])],-1),vl=(0,e.Wm)("h3",{id:"_5-重启系统",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_5-重启系统","aria-hidden":"true"},"#"),(0,e.Uk)(" 5. 重启系统")],-1),_l=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"reboot"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),xl=(0,e.Wm)("h3",{id:"_6-下载安装文件",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_6-下载安装文件","aria-hidden":"true"},"#"),(0,e.Uk)(" 6. 下载安装文件")],-1),wl=(0,e.Uk)("打开 "),El={href:"https://www.oracle.com/cn/database/technologies/",target:"_blank",rel:"noopener noreferrer"},yl=(0,e.Uk)("Oracle 官方网站"),Ol=(0,e.Uk)(" > 点击 "),Ll=(0,e.Wm)("code",null,"下载 Oracle Database 19c",-1),Sl=(0,e.Uk)("："),Xl=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:c,alt:"download-1"})],-1),Al=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("点击 "),(0,e.Wm)("code",null,"Linux x86-64"),(0,e.Uk)(" 右侧的 "),(0,e.Wm)("code",null,"ZIP"),(0,e.Uk)(" 下载连接，开始下载：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:t,alt:"download-2"})]),(0,e.Wm)("div",{class:"custom-container tip"},[(0,e.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,e.Wm)("p",null,"需要登录甲骨文账户并同意相关协议。")])],-1),Il=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"若不是在 openEuler 系统中直接通过浏览器下载，则需要通过适当方法（如 FTP）将文件上传到 openEuler 系统中")],-1),Nl=(0,e.Wm)("h3",{id:"_7-安装依赖包",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_7-安装依赖包","aria-hidden":"true"},"#"),(0,e.Uk)(" 7. 安装依赖包")],-1),Rl=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"安装相关依赖包："),(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,"查询未安装的依赖包：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"rpm"),(0,e.Uk)(" --query --queryformat "),(0,e.Wm)("span",{class:"token string"},[(0,e.Uk)('"%{NAME}-%{VERSION}.%{RELEASE} (%{ARCH})'),(0,e.Wm)("span",{class:"token entity",title:"\\n"},"\\n"),(0,e.Uk)('"')]),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"bc"),(0,e.Uk)(" binutils compat-libcap1 compat-libstdc++-33 gcc gcc-c++ glibc glibc-devel ksh libaio libaio-devel libgcc libstdc++ libstdc++-devel "),(0,e.Wm)("span",{class:"token function"},"make"),(0,e.Uk)(" sysstat elfutils-libelf elfutils-libelf-devel fontconfig-devel libxcb smartmontools libX11 libXau libXtst libXrender libXrender-devel libnsl\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("ol",{start:"2"},[(0,e.Wm)("li",null,"安装未安装的依赖包：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(" dnf "),(0,e.Wm)("span",{class:"token function"},"install"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"bc"),(0,e.Uk)(" binutils compat-libcap1 compat-libstdc++-33 gcc gcc-c++ glibc glibc-devel ksh libaio libaio-devel libgcc libstdc++ libstdc++-devel "),(0,e.Wm)("span",{class:"token function"},"make"),(0,e.Uk)(" sysstat elfutils-libelf elfutils-libelf-devel fontconfig-devel libxcb smartmontools libX11 libXau libXtst libXrender libXrender-devel libnsl "),(0,e.Wm)("span",{class:"token comment"},"# 已经安装的会自动跳过"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])])],-1),Bl=(0,e.Wm)("h3",{id:"_8-创建相关用户和用户组",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_8-创建相关用户和用户组","aria-hidden":"true"},"#"),(0,e.Uk)(" 8. 创建相关用户和用户组")],-1),Cl=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"创建相关用户组："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"groupadd"),(0,e.Uk)(" oinstall\n"),(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"groupadd"),(0,e.Uk)(" dba\n"),(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"groupadd"),(0,e.Uk)(" oper\n"),(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"groupadd"),(0,e.Uk)(" osoper\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:u,alt:"groupadd"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"创建相关用户并将其添加到相关组中："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"useradd"),(0,e.Uk)(" -g oinstall -G dba,oper,osoper oracle\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:W,alt:"useradd"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("为 "),(0,e.Wm)("code",null,"oracle"),(0,e.Uk)(" 用户创建密码：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"passwd"),(0,e.Uk)(" oracle\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:r,alt:"passwd"})])])],-1),Pl=(0,e.Wm)("h3",{id:"_9-修改相关配置文件",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_9-修改相关配置文件","aria-hidden":"true"},"#"),(0,e.Uk)(" 9. 修改相关配置文件")],-1),Dl=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("修改 "),(0,e.Wm)("code",null,"/etc/security/limits.conf"),(0,e.Uk)(" 文件来修改 "),(0,e.Wm)("code",null,"oracle"),(0,e.Uk)(" 用户的 Shell 限制：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"sudoedit /etc/security/limits.conf\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,"在文件末尾添加以下内容："),(0,e.Wm)("div",{class:"language-conf ext-conf line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-conf"},[(0,e.Wm)("code",null,"oracle soft nproc 2047\noracle hard nproc 16384\noracle soft nofile 1024\noracle hard nofile 65536\noracle soft stark 10240\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:o,alt:"config-1"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("修改 "),(0,e.Wm)("code",null,"/etc/sysctl.conf"),(0,e.Uk)(" 文件来修改数据库所需的内核参数：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"sudoedit /etc/sysctl.conf\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,"在文件末尾添加以下内容："),(0,e.Wm)("div",{class:"language-conf ext-conf line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-conf"},[(0,e.Wm)("code",null,"fs.aio-max-nr = 1048576\nfs.file-max = 6815744\nkernel.shmall = 16451328\nkernel.shmmax = 33692319744\nkernel.shmmni = 4096\nkernel.sem = 250 32000 100 128\nnet.ipv4.ip_local_port_range = 9000 65500\nnet.core.rmem_default = 262144\nnet.core.rmem_max = 4194304\nnet.core.wmem_default = 262144\nnet.core.wmem_max = 1048576\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:d,alt:"config-2"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"使内核参数生效："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(" sysctl -p\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:p,alt:"config-3"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("修改 "),(0,e.Wm)("code",null,"/etc/pam.d/login"),(0,e.Uk)(" 以添加验证模块：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"sudoedit /etc/pam.d/login\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,"在文件末尾添加以下内容："),(0,e.Wm)("div",{class:"language-conf ext-conf line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-conf"},[(0,e.Wm)("code",null,"session    required     pam_limits.so\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:b,alt:"config-4"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("修改 "),(0,e.Wm)("code",null,"/etc/profile"),(0,e.Uk)(" 以修改系统环境变量：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"sudoedit /etc/profile\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,"在文件末尾添加以下内容："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)(),(0,e.Wm)("span",{class:"token environment constant"},"$USER"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'oracle'"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"then"),(0,e.Uk)("\n   "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)(),(0,e.Wm)("span",{class:"token environment constant"},"$SHELL"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'/bin/ksh'"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"then"),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token builtin class-name"},"ulimit"),(0,e.Uk)(" -p "),(0,e.Wm)("span",{class:"token number"},"16384"),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token builtin class-name"},"ulimit"),(0,e.Uk)(" -n "),(0,e.Wm)("span",{class:"token number"},"65536"),(0,e.Uk)("\n   "),(0,e.Wm)("span",{class:"token keyword"},"else"),(0,e.Uk)("\n      "),(0,e.Wm)("span",{class:"token builtin class-name"},"ulimit"),(0,e.Uk)(" -u "),(0,e.Wm)("span",{class:"token number"},"16384"),(0,e.Uk)(" -n "),(0,e.Wm)("span",{class:"token number"},"65536"),(0,e.Uk)("\n   "),(0,e.Wm)("span",{class:"token keyword"},"fi"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"fi"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:k,alt:"config-5"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("修改 "),(0,e.Wm)("code",null,"/home/oracle/.bash_profile"),(0,e.Uk)(" 以修改 "),(0,e.Wm)("code",null,"oracle"),(0,e.Uk)(" 用户环境变量：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Uk)("sudoedit /home/oracle/.bash_profile\n"),(0,e.Wm)("span",{class:"token function"},"chown"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,"在文件末尾添加以下内容："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token builtin class-name"},"export"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token assign-left variable"},"ORACLE_BASE"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)("/u01/app/oracle\n"),(0,e.Wm)("span",{class:"token builtin class-name"},"export"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token assign-left variable"},"ORACLE_HOME"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token variable"},"$ORACLE_BASE"),(0,e.Uk)("/product/19.3/db_1\n"),(0,e.Wm)("span",{class:"token builtin class-name"},"export"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token assign-left variable"},"ORACLE_SID"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)("orcl\n"),(0,e.Wm)("span",{class:"token builtin class-name"},"export"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token assign-left variable"},[(0,e.Wm)("span",{class:"token environment constant"},"PATH")]),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token environment constant"},"$PATH"),(0,e.Wm)("span",{class:"token builtin class-name"},":"),(0,e.Wm)("span",{class:"token variable"},"$ORACLE_HOME"),(0,e.Uk)("/bin\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:g,alt:"config-6"})])])],-1),Hl=(0,e.Wm)("h3",{id:"_9-创建目录",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_9-创建目录","aria-hidden":"true"},"#"),(0,e.Uk)(" 9. 创建目录")],-1),$l=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"创建相关目录："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"mkdir"),(0,e.Uk)(" -p /u01/app/oracle/product/19.3/db_1\n"),(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"mkdir"),(0,e.Uk)(" -p /u01/soft\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:h,alt:"config-7"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"移动安装文件到对应位置并解压："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"mv"),(0,e.Uk)(" /path/to/LINUX.X64_193000_db_home.zip /u01/soft\n"),(0,e.Wm)("span",{class:"token builtin class-name"},"cd"),(0,e.Uk)(" /u01/soft\n"),(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"unzip"),(0,e.Uk)(" LINUX.X64_193000_db_home.zip "),(0,e.Wm)("span",{class:"token operator"},">"),(0,e.Uk)(" /dev/null\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"修改属主和属组："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"chown"),(0,e.Uk)(" -R oracle:oinstall /u01\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:f,alt:"config-8"})])])],-1),ql=(0,e.Wm)("h3",{id:"_10-开始安装",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_10-开始安装","aria-hidden":"true"},"#"),(0,e.Uk)(" 10. 开始安装")],-1),zl=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("在图形界面登录到 "),(0,e.Wm)("code",null,"oracle"),(0,e.Uk)(" 用户")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("打开终端 > 切换到 "),(0,e.Wm)("code",null,"/u01/soft"),(0,e.Uk)(" 目录 > 运行安装向导：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token builtin class-name"},"cd"),(0,e.Uk)(" /u01/soft\n./runInstaller "),(0,e.Wm)("span",{class:"token comment"},"# 运行安装向导"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,"/etc/locale.conf"),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:U,alt:"install-1"})]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:v,alt:"install-2"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("选择 "),(0,e.Wm)("code",null,"Set Up Software Only"),(0,e.Uk)("（仅设置软件）> 点击 "),(0,e.Wm)("code",null,"Next"),(0,e.Uk)("（下一步）：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:_,alt:"install-3"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("此处以单实例数据库为例，故选择 "),(0,e.Wm)("code",null,"Single instance database installation"),(0,e.Uk)("（单实例数据库安装）> 点击 "),(0,e.Wm)("code",null,"Next"),(0,e.Uk)("（下一步）：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:x,alt:"install-4"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("选择 "),(0,e.Wm)("code",null,"Enterprise Edition"),(0,e.Uk)("（企业版）> 点击 "),(0,e.Wm)("code",null,"Next"),(0,e.Uk)("（下一步）：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:w,alt:"install-5"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("由于之前已经配置了 "),(0,e.Wm)("code",null,"$ORACLE_BASE"),(0,e.Uk)(" 环境变量，所以点击 "),(0,e.Wm)("code",null,"Next"),(0,e.Uk)("（下一步）即可：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:E,alt:"install-6"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("此处为产品清单目录（安装过程中产生的临时文件位置）以及对产品清单目录具有写权限的用户组，点击 "),(0,e.Wm)("code",null,"Next"),(0,e.Uk)("（下一步）即可：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:y,alt:"install-7"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("此处为对数据库进行相应操作所需权限对应的用户组，同样的，点击 "),(0,e.Wm)("code",null,"Next"),(0,e.Uk)("（下一步）即可：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:O,alt:"install-8"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("点击 "),(0,e.Wm)("code",null,"Next"),(0,e.Uk)("（下一步）即可：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:L,alt:"install-9"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"安装：")])],-1),Tl=(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Uk)("dnf "),(0,e.Wm)("span",{class:"token function"},"install"),(0,e.Uk)(" mksh libaio libgfortran gcc-c++ rdma-core-devel libtiff libstdc++ libpng libpcap libjpeg-turbo libXrender libXi libXext libXau libX11 libstdc++ libXtst libgcc libcap libcap-ng libstdc++ libaio\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),Ml=(0,e.Wm)("h2",{id:"接下来",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#接下来","aria-hidden":"true"},"#"),(0,e.Uk)(" 接下来...")],-1),jl={render:function(l,n){const s=(0,e.up)("RouterLink"),a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[S,X,(0,e.Wm)("blockquote",null,[A,(0,e.Wm)("details",I,[N,(0,e.Wm)("nav",R,[(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#🏺-折戟沉沙铁未销-自将磨洗认前朝"},{default:(0,e.w5)((()=>[B])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#🔖-这一节将会讨论"},{default:(0,e.w5)((()=>[C])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#了解-oracle-数据库"},{default:(0,e.w5)((()=>[P])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#安装-oracle-数据库"},{default:(0,e.w5)((()=>[D])),_:1}),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_1-固定-ip-地址"},{default:(0,e.w5)((()=>[H])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_2-绑定主机名"},{default:(0,e.w5)((()=>[$])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_3-关闭-selinux"},{default:(0,e.w5)((()=>[q])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_4-关闭防火墙"},{default:(0,e.w5)((()=>[z])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_5-重启系统"},{default:(0,e.w5)((()=>[T])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_6-下载安装文件"},{default:(0,e.w5)((()=>[M])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_7-安装依赖包"},{default:(0,e.w5)((()=>[j])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_8-创建相关用户和用户组"},{default:(0,e.w5)((()=>[F])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_9-修改相关配置文件"},{default:(0,e.w5)((()=>[G])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_9-创建目录"},{default:(0,e.w5)((()=>[V])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#_10-开始安装"},{default:(0,e.w5)((()=>[Y])),_:1})])])]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#接下来"},{default:(0,e.w5)((()=>[Z])),_:1})])])])])]),J,(0,e.Wm)("p",null,[(0,e.Wm)("a",K,[Q,(0,e.Wm)(a)]),ll,(0,e.Wm)("a",nl,[sl,(0,e.Wm)(a)]),el]),(0,e.Wm)("p",null,[al,(0,e.Wm)("a",ml,[il,(0,e.Wm)(a)]),cl]),tl,ul,(0,e.Wm)("p",null,[Wl,(0,e.Wm)(s,{to:"/rookie/basic-cfg.html#_1-2-%E5%9B%BA%E5%AE%9A-ip-%E5%9C%B0%E5%9D%80"},{default:(0,e.w5)((()=>[rl])),_:1}),ol]),dl,(0,e.Wm)("p",null,[pl,(0,e.Wm)(s,{to:"/rookie/basic-cfg.html#_1-3-%E7%BB%91%E5%AE%9A%E4%B8%BB%E6%9C%BA%E5%90%8D"},{default:(0,e.w5)((()=>[bl])),_:1}),kl]),gl,hl,fl,Ul,vl,_l,xl,(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[wl,(0,e.Wm)("a",El,[yl,(0,e.Wm)(a)]),Ol,Ll,Sl]),Xl]),Al,Il]),Nl,Rl,Bl,Cl,Pl,Dl,Hl,$l,ql,zl,Tl,Ml],64)}}}}]);