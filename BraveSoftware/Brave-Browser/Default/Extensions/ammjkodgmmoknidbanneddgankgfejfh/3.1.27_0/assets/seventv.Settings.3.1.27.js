var se=Object.defineProperty;var oe=(s,e,t)=>e in s?se(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(oe(s,typeof e!="symbol"?e+"":e,t),t);import{_ as G}from"./seventv.preload-helper.3.1.27.js";import{i as H,f as N,a9 as ne,p as ie,a as R,n as ae,e as A,r as E,x as d,l as c,m as i,q as v,C as T,I as b,D as k,u as p,F as I,E as U,G as x,Q as V,R as C,_,a0 as re,B as de,w as ce,a1 as W,N as D,J as le,ag as ue,af as F,W as he,$ as J}from"./seventv.index.3.1.27.js";import{I as pe,u as Y,k as me,J as ge,K as we,l as y,M as fe,N as ve,i as Q,S as be,m as Z,C as _e,D as ye}from"./seventv.GearsIcon.3.1.27.js";import{U as O}from"./seventv.UiButton.3.1.27.js";import{N as xe,O as ke,x as Ae}from"./seventv.useCosmetics.3.1.27.js";import{U as X}from"./seventv.UiScrollable.3.1.27.js";import{i as Fe}from"./seventv.index.3.1.272.js";const q={api:"https://7tv.io/egvault/v1"},Se=pe("egvault",{state:()=>({subscription:null,products:[],currentProduct:null,currentPlan:null}),getters:{subscribed:s=>{var e;return((e=s.subscription)==null?void 0:e.active)??!1},subEndDate:s=>{var e;return(e=s.subscription)!=null&&e.end_at?new Date(s.subscription.end_at):new Date(0)},subProduct:s=>s.products.find(e=>e.name==="subscription")},actions:{async fetchSub(s){const t=await(await fetch(`${q.api}/subscriptions/${s}`,{})).json();return this.subscription=t,t},async fetchProducts(){const e=await(await fetch(q.api+"/products")).json();return this.products=e,e}}}),j=Symbol("ActorContext");class Ee{constructor(){l(this,"user",null);l(this,"sub",null);l(this,"token",Y("app.7tv.token"));l(this,"editAnySet",!1);l(this,"platform",null);l(this,"platformUserID",null);l(this,"query",null)}setPlatformUserID(e,t){this.platform=e,this.platformUserID=t}logout(){ae(()=>{this.token=""})}}function Te(){const s=Se();let e=H(j,null);return e||(e=N(new Ee),e.query=xe(ke,{},{}),e.query.onResult(t=>{var o;(o=t==null?void 0:t.data)!=null&&o.user&&(e.user=structuredClone(ne(t.data.user)))}),ie(j,e),R(()=>e.platformUserID,t=>{!t||!e.query||e.query.load(e.query.document.value,{id:e.platformUserID,platform:e.platform})},{immediate:!0}),R(()=>{var t;return(t=e.user)==null?void 0:t.id},t=>{t&&s.fetchSub(t).then(o=>{!o||!o.active||(e.sub=o)}).catch(()=>{})})),e}const M=s=>(V("data-v-616c201b"),s=s(),C(),s),Ie={class:"seventv-settings-backup"},Ve=M(()=>i("h3",null,"Backup",-1)),Ce=M(()=>i("p",null,"Export your current settings or import from a settings file",-1)),Pe={class:"seventv-settings-backup-buttons"},Ne={key:0},Me=M(()=>i("p",{class:"seventv-settings-backup-error"},"There was an error exporting/importing your settings!",-1)),$e=[Me],Re={key:1,class:"seventv-settings-backup-warning-container"},De=M(()=>i("h5",{class:"seventv-settings-backup-warning"},"Settings unable to export/import:",-1)),Oe=A({__name:"SettingsViewBackup",setup(s){const{platform:e}=me(),t=E(!1),o=ge().map(r=>r.label).filter(r=>r!=="");async function u(){t.value=!1;try{const r=await we(),n=document.createElement("a");n.href=r,n.download=`7tv_settings_${e}-${new Date().toLocaleDateString()}.json`,n.click(),URL.revokeObjectURL(r)}catch(r){t.value=!0,y.error("failed to export settings",r.message)}}async function h(){t.value=!1;const r=await a();if(!r)return;const n=await w(r[0]);let g;try{g=JSON.parse(n)}catch(f){y.error("failed to parse settings file",f.message),t.value=!0;return}let m=[];try{m=fe(g)}catch(f){y.error("failed to deserialize settings file",f.message),t.value=!0;return}y.debugWithObjects(["<Settings>","Deserialized settings file"],[m]);try{await ve(m),y.info("<Settings>","Loaded settings from file")}catch(f){y.error("failed to save settings from file",f.message),t.value=!0}}async function a(){return new Promise(r=>{const n=document.createElement("input");n.type="file",n.accept="application/json",n.onchange=()=>r(n.files),n.oncancel=()=>r(null),n.click()})}async function w(r){return new Promise((n,g)=>{const m=new FileReader;m.readAsText(r,"utf-8"),m.onload=()=>{n(m.result)},m.onerror=f=>g(f)})}return(r,n)=>(d(),c("main",Ie,[Ve,Ce,i("div",Pe,[v(O,{class:"seventv-settings-backup-button",onClick:u},{default:T(()=>[b("Export")]),_:1}),v(O,{class:"seventv-settings-backup-button",onClick:h},{default:T(()=>[b("Import")]),_:1})]),t.value?(d(),c("div",Ne,$e)):k("",!0),p(o).length>0?(d(),c("div",Re,[De,(d(!0),c(I,null,U(p(o),g=>(d(),c("p",{key:g,class:"seventv-settings-backup-info"},x(g),1))),128))])):k("",!0)]))}}),Ue=_(Oe,[["__scopeId","data-v-616c201b"]]),Le=s=>(V("data-v-a02322cc"),s=s(),C(),s),Be={class:"seventv-settings-compat"},qe=Le(()=>i("h3",null,[b(" Compatibility "),i("p",null,"Scan your extensions for compatibility issues")],-1)),je=["src"],ze=A({__name:"SettingsViewCompat",setup(s){const{browser:e}=Q(),t=H(re,""),o=e.name!=="Firefox";return o||window.open(t+"#/compat","_blank"),(u,h)=>(d(),c("main",Be,[qe,o?(d(),c("iframe",{key:0,src:p(t)+"#/compat?noheader=1"},null,8,je)):k("",!0)]))}}),Ke=_(ze,[["__scopeId","data-v-a02322cc"]]),Ge=["sticky"],He=["id"],We=A({__name:"SettingsViewConfigCat",props:{name:{},nodes:{}},setup(s,{expose:e}){const t=s,o=L(),u=E(new Set(t.nodes.map(n=>n.key).filter(n=>!o.seen.includes(n)))),h=E(!1),a=E();Fe(a,([n])=>{if(h.value=n.isIntersecting,!h.value)return;o.intersectingSubcategory=t.name;const g=n.target.getElementsByClassName("seventv-settings-node");for(const m of Array.from(g)){const f=m.getAttribute("data-key");f&&o.markSettingAsSeen(f)}},{threshold:.75,rootMargin:"0px 0px -50% 0px"});function w(n){u.value.delete(n),o.markSettingAsSeen(n)}function r(){var n;(n=a.value)==null||n.scrollIntoView({block:"start"})}return e({name:t.name,scrollIntoView:r}),(n,g)=>(d(),c("div",{ref_key:"catRef",ref:a,sticky:h.value,class:"seventv-settings-view-subcategory"},[n.name?(d(),c("h3",{key:0,id:n.name,ref:"subcategoryRefs",class:"seventv-settings-subcategory-header"},x(n.name),9,He)):k("",!0),(d(!0),c(I,null,U(n.nodes,m=>(d(),de(be,{key:m.key,node:m,unseen:u.value.has(m.key),onSeen:f=>w(m.key)},null,8,["node","unseen","onSeen"]))),128))],8,Ge))}}),Je=_(We,[["__scopeId","data-v-e44d57d0"]]),Ye={key:0,class:"seventv-settings-view-container"},Qe=A({__name:"SettingsViewConfig",setup(s){const e=L(),t=E([]);return R(()=>e.scrollpoint,()=>{var o;(o=t.value.find(u=>u.name==e.scrollpoint))==null||o.scrollIntoView()}),(o,u)=>p(e).mappedNodes[p(e).category]?(d(),c("div",Ye,[v(X,null,{default:T(()=>[(d(!0),c(I,null,U(Object.entries(p(e).mappedNodes[p(e).category]),([h,a])=>(d(),c("div",{key:h,class:"seventv-settings-subcategory"},[v(Je,{ref_for:!0,ref_key:"subCats",ref:t,name:h,nodes:a},null,8,["name","nodes"])]))),128))]),_:1})])):k("",!0)}}),Ze=_(Qe,[["__scopeId","data-v-c77af354"]]),Xe={},et={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},tt=i("path",{d:"M0 480H144 512 640V352c0-59.6-40.8-109.8-96-124V192c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192v8.2C40.1 220 0 273.3 0 336V480z"},null,-1),st=[tt];function ot(s,e){return d(),c("svg",et,st)}const nt=_(Xe,[["render",ot]]),ee="01JJQVMG5NY64NT4EY1M2CTS1G",it="01M3Q4RTMNFHTT58VNTFH8152G",at="https://api.7tv.app/v4/gql",rt="01FEVKBBTGRAT7FCY276TNTJ4A",te="seventv.subscription-migration-notice:",dt=8*60*60*1e3,ct=7*24*60*60*1e3,z=7*24*60*60*1e3,lt=`
	query GetSubscriptionMigrationPrompt($platform: Platform!, $platformId: String!, $productId: Id!) {
		users {
			userByConnection(platform: $platform, platformId: $platformId) {
				billing(productId: $productId) {
					subscriptionMigrationPromptable
				}
			}
		}
	}
`,ut=`
	query GetPaint($list: [ObjectID!]) {
		cosmetics(list: $list) {
			paints {
				id
				name
				color
				function
				angle
				shape
				image_url
				repeat
				stops {
					at
					color
				}
				shadows {
					x_offset
					y_offset
					radius
					color
				}
			}
		}
	}
`,P={promptable:null,checkedAt:0,dismissedAt:null,dotSeenAt:null};function K(s){return s===null||typeof s=="number"}function ht(s){try{const e=JSON.parse(localStorage.getItem(te+s)??"null");if(e&&(e.promptable===null||typeof e.promptable=="boolean")&&typeof e.checkedAt=="number"&&K(e.dismissedAt)&&K(e.dotSeenAt??null))return{promptable:e.promptable,checkedAt:e.checkedAt,dismissedAt:e.dismissedAt,dotSeenAt:e.dotSeenAt??null}}catch{return P}return P}async function pt(s,e){var t,o,u;try{const h=await fetch(at,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:lt,variables:{platform:s,platformId:e,productId:rt}})});if(!h.ok)return null;const a=await h.json(),w=(o=(t=a==null?void 0:a.data)==null?void 0:t.users)==null?void 0:o.userByConnection;if(w===null)return!1;const r=(u=w==null?void 0:w.billing)==null?void 0:u.subscriptionMigrationPromptable;return typeof r!="boolean"?(y.warn("<SubscriptionMigrationNotice>","Unexpected prompt response"),null):r}catch{return null}}async function mt(s){var e,t,o,u;try{const h=await fetch("https://7tv.io/v3/gql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:ut,variables:{list:[s]}})});if(!h.ok)return null;const a=(u=(o=(t=(e=await h.json())==null?void 0:e.data)==null?void 0:t.cosmetics)==null?void 0:o.paints)==null?void 0:u[0];return!a||a.id!==s?null:{id:s,kind:"PAINT",provider:"7TV",data:{...a,gradients:[]}}}catch{return null}}let gt=class{constructor(){l(this,"visible",!1);l(this,"dot",!1);l(this,"rewardPaintLoaded",!1);l(this,"platform",null);l(this,"platformId",null);l(this,"state",P);l(this,"requestId",0);l(this,"rewardPaintRequested",!1)}async load(e,t){if(e===this.platform&&t===this.platformId)return;const o=++this.requestId;if(this.platform=e,this.platformId=t,this.state=P,this.apply(),!t||e!=="TWITCH"&&e!=="KICK")return;this.state=ht(t);const u=Date.now(),h=this.state.dismissedAt!==null&&u-this.state.dismissedAt<z,a=this.state.promptable?dt:ct;if(!h&&(this.state.promptable===null||u-this.state.checkedAt>=a)){const w=await pt(e,t);if(o!==this.requestId)return;if(w!==null){this.persist({...this.state,promptable:w,checkedAt:Date.now()});return}}this.apply()}markSettingsOpened(){this.dot&&this.persist({...this.state,dotSeenAt:Date.now()})}dismiss(){this.persist({...this.state,dismissedAt:Date.now()})}startMigration(){this.persist({...this.state,promptable:null,checkedAt:0})}loadRewardPaint(){this.rewardPaintRequested||(this.rewardPaintRequested=!0,mt(ee).then(e=>{if(!e){this.rewardPaintRequested=!1;return}Ae(e),this.rewardPaintLoaded=!0}))}persist(e){if(this.state=e,this.apply(),!!this.platformId)try{localStorage.setItem(te+this.platformId,JSON.stringify(e))}catch{return}}apply(){const{promptable:e,dismissedAt:t,dotSeenAt:o}=this.state;this.visible=e===!0&&(t===null||Date.now()-t>=z),this.dot=this.visible&&o===null}};const S=N(new gt),$=s=>(V("data-v-ec13bd52"),s=s(),C(),s),wt={key:0,class:"seventv-migration-notice","aria-labelledby":"seventv-migration-notice-title"},ft={class:"seventv-migration-notice-badge"},vt=["srcset"],bt=["srcset"],_t=["src"],yt={class:"seventv-migration-notice-copy"},xt=$(()=>i("strong",{id:"seventv-migration-notice-title"},"We need to update your subscription",-1)),kt=$(()=>i("p",null," We need to update your billing details due to administrative changes. We are simply changing accounts to point to the UK instead of France. This helps us enormously, it's free, it's a one-click process and to say thank you, we are giving you this free badge and paint. ",-1)),At={class:"seventv-migration-notice-rewards"},Ft=$(()=>i("span",null,[b("Foxy "),i("span",{class:"seventv-migration-notice-kind"},"badge")],-1)),St=$(()=>i("span",{class:"seventv-migration-notice-kind"}," paint",-1)),Et=A({__name:"SubscriptionMigrationNotice",setup(s){const e=`https://cdn.7tv.app/badge/${it}/4x`;return ce(()=>S.visible&&S.loadRewardPaint()),(t,o)=>{const u=W("cosmetic-paint");return p(S).visible?(d(),c("section",wt,[i("picture",ft,[i("source",{type:"image/avif",srcset:`${e}.avif`},null,8,vt),i("source",{type:"image/webp",srcset:`${e}.webp`},null,8,bt),i("img",{src:`${e}.png`,alt:"Foxy badge",width:"48",height:"48",decoding:"async"},null,8,_t)]),i("div",yt,[xt,kt,i("div",At,[Ft,i("span",null,[D((d(),c("span",null,[b("Cinnamon")])),[[u,p(S).rewardPaintLoaded?p(ee):null]]),St])])]),i("a",{class:"seventv-migration-notice-action",href:"https://7tv.app/migrate",target:"_blank",rel:"noopener noreferrer",onClick:o[0]||(o[0]=h=>p(S).startMigration())}," Continue on 7tv.app "),i("button",{class:"seventv-migration-notice-dismiss",type:"button","aria-label":"Dismiss subscription update notice",onClick:o[1]||(o[1]=h=>p(S).dismiss())},[v(Z)])])):k("",!0)}}}),Tt=_(Et,[["__scopeId","data-v-ec13bd52"]]);var It={VITE_APP_SITE:"https://7tv.app",VITE_APP_API:"https://7tv.io/v3",VITE_APP_API_GQL:"https://7tv.io/v3/gql",VITE_APP_API_EVENTS:"wss://events.7tv.io/v3",VITE_APP_API_EGVAULT:"https://7tv.io/egvault/v1",VITE_APP_HOST:"https://extension.7tv.gg",VITE_USER_NODE_ENV:"production",VITE_APP_NAME:"7TV",VITE_APP_VERSION:"3.1.27",VITE_APP_VERSION_BRANCH:"",VITE_APP_CHANGELOG:`## 3.1.27

-   Fixed Kick chat rendering, replies and links<br><i>Moving to our new extension is recommended: <a href="https://chromewebstore.google.com/detail/7tv/lppmekppnliemjclknbagdhoocikieoi" target="_blank">Chrome</a> / <a href="https://addons.mozilla.org/en-GB/firefox/addon/7tv-new/" target="_blank">Firefox</a></i>

## 3.1.26

- Added subscription migration check

## 3.1.25

-   Fixed Kick Emote Menu position
-   Updated 7TV API logic

### 3.1.24

-   Added full support for Twitch GIF messages

### 3.1.23

-   Added setting to hide Twitch "Chat" send button under the chat input box
-   Fixed an issue that caused the Mod View + Shield Mode buttons to not show
-   Fixed an issue where Chat Settings tooltip would display when hovering Mod Logs button

### 3.1.22

-   Fixed an issue that caused chat input to break after a Twitch update

### 3.1.21

-   Added new extension notice
-   Added checks to see if new extension is running
-   Updated extension description

### 3.1.20

-   Fixed some lint issues
-   Bump version to 3.1.20

### 3.1.19

-   Fixed some lint issues and some selectors not working

### 3.1.18

-   Fixed a conflict issue with 7TV extension and FFZ extension running at the same time

### 3.1.17

-   April fools effects joke 2026
-   Fixed steam latency information not being displayed correctly
-   Added initial Lead Moderator functionallity
-   Fixed other small bugs

### 3.1.16

-   Fixed emote menu not showing emotes with same name but different casing
-   Fixed animated avatars not working
-   Bump package version to 3.1.16

### 3.1.15

-   Added required Firefox built-in consent metadata to the manifest

### 3.1.14

-   Fixed internal configs for FireFox
-   Bump version from 3.1.13 to 3.1.14

### 3.1.13

-   Fixed an issue which led to VODs not showing emotes
-   Hide the moderation slider tooltip when dragging

### 3.1.12

-   Removed obfuscator plugin and obfuscation build steps for deterministic build output

### 3.1.11

-   Fixed some issues with FireFox having old version
-   Bumped version from 3.1.10 to 3.1.11

### 3.1.10

-   Replaced Unicode tag that gets appended for duplicate message check to not have it dropped by Twitch anymore

### 3.1.9

-   Remove hosted-site functionality
-   Use new pubsub source

### 3.1.8

-   Tomfoolery (april fools)

### 3.1.7

-   Fixed the profile redirection when clicking on a user on the Twitch dashboard
-   Fixed some keyboard shortcuts not working
-   Added an Always On autocompletion option for emotes
-   Fixed an issue where the default highlight sound would not play on Firefox

### 3.1.6

-   Fixed an issue causing Twitch chat / moderation tools to not work properly
-   Removed old kick auth
-   Fixed an issue with the Twitch chat not showing a cooldown timer

### 3.1.5

-   Entitlements like paints and badges should now better reflect what the user has equipped
-   Fixed an issue with entitlements on accounts with multiple connections
-   Fixed an issue with causing animated avatars to not work
-   Added animated avatars to 7TV user card

### 3.1.4

-   Fixed an issue with avatars not loading

### 3.1.3

-   Added option hide shared chat
-   Fixed an issue with profile picture in shared chat
-   Fixed extension login
-   Fixed an issue when users had multiple personal emote sets

### 3.1.2

-   **Implement support for the new Kick site:**
    -   Chat emotes
    -   Emote menu
    -   Emote auto-completion
    -   Cosmetics
    -   Settings
-   Added option to settings to hide Stories from the sidebar
-   Fixed settings to hide recommended channels and viewers also watch channels
-   Fixed an issue where history navigation is accidentally triggered during IME composition
-   Added option to highlight messages of specific usernames
-   Added option to highlight messages based on badges
-   Added button to user card to toggle highlighting for a users messages
-   Added mod icon for warning users to chat mod icons and user card
-   Added an option to limit the drop shadows on paints
-   Added more drop shadow settings
-   Added link to creators 7TV profile to emote cards of 7TV emotes
-   Fixed a bug that could cause issues when clicking an emoji in chat
-   Fixed an issue with emote sets not switching on channel switch
-   Fixed an issue with making users unable to chat
-   Added an option to expand sidebar on twitch when hovering

### 3.1.1

-   Fixed video player stats not showing
-   Pass rendering of animated messages to twitch
-   Add option to hide on screen celebrations
-   Fixed badge width on kick
-   Fixed an issue where settings would be hidden due to auto-filling the searchbox

### 3.1.0

-   Added rich embeds for 7TV emotes.
-   Added custom commands /search, /add, /remove and /rename to manage 7TV emotes.
-   Added /song that uses the AudD api to recognize songs. (Requires an api token from [AudD](https://audd.io/))
-   Added /refresh to reload emotes.
-   Added /nuke to moderate multiple messages at once. Can be enabled in the settings.
-   Fixed native chat width.
-   Make all setting pages searchable.

### 3.0.17

-   Reinstated animated avatars
-   Fixed an issue where links would include a period at the end
-   Added an option to hide the channel point balance button under the chat input box
-   Updated background of the current emote tab selection
-   Fixed an issue where suspicious users were not highlighted and clips not being displayed in chat
-   Fixed an issue which caused timestamps to count beyond 24 hours
-   Fixed an issue which caused scrolling to not work while scrolling through a category
-   Fixed an issue where lowercase cheers were displayed as text
-   Added an option to hide the community challenge contributions in the chat
-   Fixed extension not working on twitch for some users (React 18 support)
-   Fixed an issue where chat messages (like announcements) did not use the channel accent color
-   Fixed an issue where an emote with a long alias would cause the alias to go outside of the tooltip
-   Added an option to hide timestamps in vods
-   Fixed an issue which sometimes caused chat badges to not appear
-   Fixed an issue that caused replies in threads to not appear
-   Fixed an issue where replies in threads could not be selected
-   Fixed an issue where switching the selected emote-set would not be detected
-   Fixed an issue where the emote menu button did not appear on Kick
-   Fixed an issue which sometimes caused old messages to not appear
-   Sort emotes alphabetically with tab auto-completion on Kick
-   Removed option to hide the React button on Twitch
-   Added emote support for introduction & watch streak messages.
-   Fixed an issue that caused suspicious user highlights to not persist
-   Fixed an issue that caused returning users to not be highlighted
-   Added an option to show raider highlights
-   Added an option to show returning user highlights
-   Fixed an issue that caused international names to not always display logins
-   Fixed an issue that caused Twitch VODs to not load emotes
-   Fixed an issue that caused emote names in emote cards to overflow
-   Fixed an issue that caused certain words to not display in chat

### 3.0.16

-   Added an option to select alternating background color for chat messages
-   Added a tip to the favorite menu to help users favorite emotes if none are found
-   Fixed an issue where personal emote sets remained in cache forever
-   Fixed an issue which prevented users from using two different personal emote sets at once
-   Fixed an issue where seasonal global emotes stayed in cache permanently
-   Fixed an issue with tab auto-completion on Kick
-   Fixed emote tile width in emote menu
-   Fixed "hidden subscription status" message in the User Card
-   Fixed extraneous emote menu blank space when "Live Input Search" was enabled
-   Fixed an issue with deleting messages using mod icons
-   Fixed an issue where the extension menu displayed incorrectly in Chromium-based browsers

### 3.0.15

-   Added a backup tab to the settings menu for importing & exporting settings
-   Added an option to select the default Emote Menu tab
-   Added artist attribution to the emote card
-   Added ability to reset settings to their defaults
-   Fixed an issue where emotes would take a long time to load if external emote providers gave slow response times
-   Fixed an issue where mentioning yourself would highlight the message
-   Fixed an issue where replying to a thread starting from your own message would highlight the message
-   Fixed a regression in previous nightly build causing channel emote sets to not receive EventAPI subscriptions
-   Removed old deprecated fallback cosmetics fetching using the v2 API

### 3.0.14

-   Added a shortcut (Ctrl+E) to open the Emote Menu
-   Added shortcuts (Up/Down Arrows) to switch between providers in the Emote Menu
-   Search in the Emote Menu will now automatically open the nearest tab where matches are found
-   The input box in the Emote Menu is now focused automatically upon opening
-   Added an option to show stream stats such as latency, resolution, bitrate, etc.
-   Added an option to set click actions on the video player (pause/unpause and mute/unmute)
-   Added an option to hide player extensions
-   Added iterable tab-completion on Kick
-   Fixed a user card crash
-   Fixed an issue with the EventAPI connection closing on the first initialization
-   Fixed an issue that prevented new chatters from appearing in autocompletion
-   Fixed an issue which squished tooltips when hovering an emote on the far right side of chat
-   Fixed an issue which hid historical messages on Kick
-   Increased the default value for Message Batching from 150 to 250

### Version 3.0.13

-   Added an option to hide the new mature content dialogs on Twitch
-   Added formatting support for Hype Chat
-   Added options to hide Hype Chats and the Hype Chat button
-   Fixed an issue which prevented moderator data from loading in User Cards
-   Fixed an issue where nametags with blending paints did not correctly use the base color and appeared invisible instead
-   Kick:
    -   Added a settings menu
    -   Added an option to set a delay betweet rendering new messages (Message Batching)
    -   Added an option to set alternating backgrounds between chat messages
    -   The chat input box on Kick no longers loses focus during slow mode
    -   Zero-Width Emotes should now appear properly in Kick chat

### Version 3.0.12

-   Added colon-completion (partial emote matches with ":") on Kick
-   Added history navigation (up/down arrow) on Kick
-   Updated the auth mechanism on Kick to avoid using third-party cookies

### Version 3.0.11

-   Fixed an issue which caused chat to randomly pause on Kick

### Version 3.0.10

-   Tweaked some styling issues in the Emote Menu
-   Kick:
    -   Fixed an issue where historical messages did not consistently render
    -   Fixed an issue which caused text to become misplaced when mixed with Kick native emotes
    -   Fixed an issue with the Emote Menu & Tooltips not appearing while in theater mode
    -   Fixed some issues where the connection flow failed
    -   Long text sequences should no longer overflow outside of the chat box
    -   Adjusted emoji scale to be in line with other platforms
    -   Clicking an emoji in the Emote Menu should now correctly input the unicode instead of the name

### Version 3.0.9

-   Added support for [Kick](https://kick.com)
-   Added new feature: Paint Tool ([subscribers only](https://7tv.app/store))
-   Fixed an issue where the emote menu button was broken due to a recent Twitch change
-   Fixed an issue which sometimes caused channel emote sets to disappear
-   Fixed an issue which caused stylesheets to be duplicated when running in hosted mode

### Version 3.0.8

-   Enabled AVIF images on Firefox >= 113 by default
-   Added sub duration & account creation date in the User Card
-   Added a button to open an emote's full page from the emote card
-   Fixed an issue where clicking the upper drag region in the User Card opened the user's channel
-   Fixed user card content overflowing due to long messages
-   Fixed chat scroller being visible in the viewer list
-   Tentatively fixed an issue which caused the sidebar to crash occasionally

### Version 3.0.7

-   Added a new User Card
-   Added a tooltip to show the full message when hovering over replies in chat
-   Added a "Site Layout" menu where certain features of the Twitch website can be hidden
-   Added icons for emoji sets in the Emote Menu
-   Added an option to choose chat timestamp format
-   Fixed tooltips of nametag paints appearing even if they are disabled
-   Reinstated functionality on youtube.com

### Version 3.0.6

-   Links in chat messages now respect known TLDs instead of matching any url-like pattern
-   Added an option to show timeouts/bans directly in the chat without being a moderator
-   Added options to change what emotes are displayed in the colon list and tab-completion carousel
-   Added an option to show the text bit for BTTV and FFZ emote modifiers
-   Added an option to hide monitored suspicious user highlights
-   Added an option to hide restricted suspicious user highlights
-   Added an option to highlight your own chat messages
-   Fixed an issue in the emote menu where the previously selected provider would close if a set was empty
-   Fixed emote cards sometimes not showing who added the emote
-   Fixed an issue where the detailed emote card would clip under existing chat messages

### Version 3.0.5

-   Reply Threads should now appear properly and show all messages
-   Fixed an issue which caused tab-completion to abruptly halt when a chatter's name is selected

### Version 3.0.4

-   Added hot-patching functionality to the extension
-   Added chat rich embeds which allows twitch clips to preview in chat
-   Added a "Copy Message" button
-   Added an option to show thumbnail previews of streams when hovering over channels on the sidebar
-   Temporarily disabled the "Most Used Emotes" feature, pending a refactor. This fixes severe input lag experienced by some users
-   Made some internal changes which may decrease memory usage for some users
-   Fixed bad performance on colon-completion by limiting the amount of items shown
-   Fixed an issue which caused flickering when hovering on a deleted message
-   Fixed a compatibility issue with another extension, causing distorted scrolling behavior in the settings menu

### Version 3.0.3

-   Disabled YouTube support temporarily due an issue with request pattern

### Version 3.0.2

-   Fixed an issue which caused the chat input to increasingly slow down the page
-   Improved the look of Channel Point Redeem & Highlight messages
-   Reply threads should now function properly
-   Added an option to change how deleted messages appear
-   Fixed tab complete breaking when an emote was added both as a sub emote and 3rd party emote
-   Fixed a clash with FFZ that led to some messages not appearing correctly
-   Fixed an issue which caused sub emotes and emojis to not display in the Favorites tab
-   Fixed the Most Used Emotes tab ignoring visibility setting
-   Fixed sub emotes not showing in colon-complete while FFZ is enabled
-   Fixed an issue which caused VOD chat to crash for some users

### Version 3.0.1

-   Added an emote menu shortcut to define favorite emotes (alt+click)
-   Added a tab in the emote menu to display favorite and most used emotes
-   Added a button to open the native Twitch Emote Menu
-   Added an option to change where the 7TV Emote Menu Button appears
-   Added an option to modify the scale of emotes in chat
-   Added visual settings for highlighted messages, allows changing opacity and over-all style
-   Added an option to modify the font size in chat
-   Unpausing chat should no longer cause old messages to rapidly scroll through
-   Sidebar sub-categories in the settings menu will now highlight what's in view
-   Chat History should now load more consistently
-   Pressing escape while the emote menu is open now closes it
-   Fixed an issue where Twitch badges sometimes failed to load
-   Fixed an issue where Twitch emotes sometimes failed to load
-   Fixed an issue which caused duplicate colon-complete matches with FFZ
-   Fixed an issue that caused tab-completion to break with FFZ
-   Fixed an issue where emotes in colon-complete wouldn't load on Mozilla Firefox
-   Fixed a conflict causing emotes to sometimes display as broken images while other extensions were installed
-   Fixed an issue which prevented highlights from being saved if the "Flash Title" option was turned on
-   Fixed an issue where custom highlight sounds did not work if "Play sound on Mention" was turned off
-   Fixed an issue where custom highlight flash title did not work if "Flash Title on Mention" was turned off

### Version 3.0.0

<span style="font-size:1.5rem;">7TV has received a total overhaul. Check out what's new:</span>

#### High-Performance Chat

<span style="font-size:larger;">
We've made chat run faster, by rebuilding it from the ground up. Let your processor and memory relax, with 7TV your chat experience will be much more efficient.
</span>

<video autoplay muted loop>
 <source x-src="~/picture/cgl_display_chat.webm" />
</video>

#### New Emote Menu

<span style="font-size:larger;">The emote menu was completely redesigned, it's now divided into providers, emote sets, and even shows emojis! It also got smarter, only loading the images currently in view for much better performance.</span>

![Emote Menu](~/picture/cgl_display_emote_menu.avif)

#### New Settings Menu

<span style="font-size:larger;">7TV has just gotten much more customizable, check out the new menu and tune all the various settings to your liking!</span>

![Settings Menu](~/picture/cgl_display_settings_menu.avif)

#### Personal Emotes

<span style="font-size:larger;">7TV Subscribers can now use Personal Emotes in chat! These are emotes that can be used globally, but only by you. Get your own by <a href="https://7tv.app/store" target="_blank">subscribing</a>.</span>

![Personal Emotes](~/picture/cgl_display_personal_emotes.avif)

#### Dynamic Cosmetics

<span style="font-size:larger;">Badges, Paints & Animated Avatars will now update instantly. That's right, no more wait times!</span>

![Dynamic Cosmetics](~/picture/cgl_display_dynamic_cosmetics.avif)

#### Custom Chat Highlights

<span style="font-size:larger;">Set up custom highlights for specific phrases in chat messages, with a color, label, title flash and custom sounds. Use Regular Expressions for even greater control.</span>

![Chat Highlights](~/picture/cgl_display_highlights.avif)

#### Tab-Completion Carousel

<span style="font-size:larger;">View matches as you go when using TAB to find emotes!</span>

![Emote Carousel](~/picture/cgl_display_emote_carousel.avif)

#### AVIF Support

<span style="font-size:larger;">
We are the first emote provider to support WEBP, and as we've inspired others to do the same, we're taking the initiative of supporting AVIF (AV1 Image File Format)!
AVIF is the image variant of the AV1 Video Codec, capable of shrinking image sizes from 20% to 90% over a GIF.
</span>

AVIF will now be automatically served to users of Google Chrome 100+ (or chromium-based browsers).

![AVIF](~/picture/cgl_display_avif.svg)

#### Mod Logs

<span style="font-size:larger;">View recent mod actions with the Mod Logs menu.</span>

#### Much more to come

<span style="font-size:larger;">This is just the beginning! We've rewritten the entire extension with a modular, scalable codebase just waiting to be expanded upon. Expect many new additions to come!</span>

And of course, this is an open-source project. Anyone is welcome to submit a pull request via <a href="https://github.com/seventv/extension" target="_blank">GitHub</a>.
`,BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Vt=s=>(V("data-v-08f2e69b"),s=s(),C(),s),Ct={class:"seventv-settings-home"},Pt={class:"seventv-settings-home-body"},Nt={key:0,class:"seventv-settings-new-extension-notice"},Mt=Vt(()=>i("div",{class:"seventv-settings-new-extension-copy"},[i("strong",null,"Try the new 7TV extension"),i("span",null,"Give the new 7TV extension a try and see what we've been working on.")],-1)),$t={class:"seventv-settings-new-extension-actions"},Rt={class:"seventv-settings-home-changelog"},Dt={class:"seventv-settings-home-footer"},Ot={class:"seventv-settings-app-info"},Ut={class:"seventv-settings-compact"},Lt={class:"seventv-version"},Bt={class:"seventv-version-remote"},qt={key:1},jt={class:"seventv-settings-compact"},zt=A({__name:"SettingsViewHome",setup(s){var g;const e="7TV",t=It.VITE_APP_CONTAINER??"Extension",o="https://7tv.io/v3",u="3.1.27",h=seventv.hosted||!1,a=(g=seventv.host_manifest)==null?void 0:g.version,w=L(),{browser:r}=Q();function n(){const m=r.name==="Firefox"?"https://addons.mozilla.org/en-US/firefox/addon/7tv-new/":"https://chromewebstore.google.com/detail/7tv/lppmekppnliemjclknbagdhoocikieoi";window.open(m,"_blank")}return(m,f)=>{const B=W("tooltip");return d(),c("div",Ct,[i("div",Pt,[v(X,null,{default:T(()=>[v(Tt),p(w).newExtensionNoticeDismissed?k("",!0):(d(),c("div",Nt,[Mt,i("div",$t,[v(O,{class:"ui-button-important",onClick:n},{default:T(()=>[b("Check it out")]),_:1}),D((d(),c("button",{"aria-label":"Dismiss notice",class:"seventv-settings-new-extension-dismiss",type:"button",onClick:f[0]||(f[0]=is=>p(w).dismissNewExtensionNotice())},[v(Z)])),[[B,"Dismiss"]])])])),i("div",Rt,[v(_e)])]),_:1}),i("div",Dt,[i("div",Ot,[i("span",Ut,x(p(e))+" ("+x(p(t))+")",1),i("span",Lt,[p(h)?(d(),c(I,{key:0},[i("span",null,"v"+x(p(a)),1),D((d(),c("span",Bt,[v(nt)])),[[B,"Running in Hosted Mode"]])],64)):(d(),c("span",qt,"v"+x(p(u)),1))]),i("span",jt,"API: "+x(p(o)),1)])])])])}}}),Kt=_(zt,[["__scopeId","data-v-08f2e69b"]]);function Gt(s){try{return JSON.parse(atob(s.split(".")[1]))}catch{return}}const Ht=s=>(V("data-v-802a40c5"),s=s(),C(),s),Wt={class:"profile"},Jt={key:0},Yt=["href"],Qt=Ht(()=>i("br",null,null,-1)),Zt=A({__name:"SettingsViewProfile",setup(s){const e="https://7tv.app",t=e+"/extension/auth",o=Te(),u=Y("app.7tv.token"),h=E(!1);let a=null,w=null;const r=g=>{var m;if(g.data)switch(g.data.type){case"7tv-token":if(!g.data.token)return;if(w==null||w.pause(),a==null||a.close(),window.removeEventListener("message",r),(((m=Gt(g.data.token))==null?void 0:m.exp)??0)*1e3<Date.now()){h.value=!0;return}u.value=g.data.token;break}};function n(){if(u.value===""){if(a&&!a.closed){a.focus();return}a=window.open(t,"7tv-auth","width=400,height=600"),a&&(window.addEventListener("message",r),w=ye(()=>{a==null||a.postMessage("7tv-token-request","*")},100))}}return le(n),ue(()=>{a==null||a.close(),window.removeEventListener("message",r)}),(g,m)=>(d(),c("div",Wt,[h.value?(d(),c("div",Jt,[b(" The 7TV session has expired, please sign out of the "),i("a",{href:p(e),target:"_blank"},"7TV website",8,Yt),b(" and then back in. ")])):p(o).user&&p(o).token?(d(),c(I,{key:1},[b(" You are authenticated with 7TV "),Qt,b(" Try using the the custom 7TV commands if a channel where you have editor rights ")],64)):(d(),c("button",{key:2,class:"login-button",onClick:n},"Sign in"))]))}}),Xt=_(Zt,[["__scopeId","data-v-802a40c5"]]),es=J(()=>G(()=>import("./seventv.PaintTool.3.1.27.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)),ts=J(()=>G(()=>import("./seventv.Store.3.1.27.js"),__vite__mapDeps([11,1]),import.meta.url));class ss{constructor(){l(this,"open",!1);l(this,"view",null);l(this,"newExtensionNoticeDismissed",!1);l(this,"newExtensionNoticeSeen",!1);l(this,"category","");l(this,"scrollpoint","");l(this,"intersectingSubcategory","");l(this,"seen",[]);l(this,"mappedNodes",N({Home:{}}));this.switchView("home");const e=localStorage.getItem(F.SEEN_SETTINGS);if(e)for(const t of e.split(","))this.seen.push(t);this.newExtensionNoticeDismissed=localStorage.getItem(F.NEW_EXTENSION_NOTICE_DISMISSED)==="true",this.newExtensionNoticeSeen=localStorage.getItem(F.NEW_EXTENSION_NOTICE_SEEN)==="true"}toggle(){this.open=!this.open}switchView(e){this.view=he(os[e])}markSettingAsSeen(...e){for(const t of e)this.seen.indexOf(t)===-1&&this.seen.push(t);localStorage.setItem(F.SEEN_SETTINGS,this.seen.join(","))}dismissNewExtensionNotice(){this.newExtensionNoticeDismissed=!0,localStorage.setItem(F.NEW_EXTENSION_NOTICE_DISMISSED,"true")}markNewExtensionNoticeSeen(){this.newExtensionNoticeSeen||(this.newExtensionNoticeSeen=!0,localStorage.setItem(F.NEW_EXTENSION_NOTICE_SEEN,"true"))}}const os={home:Kt,config:Ze,profile:Xt,compat:Ke,backup:Ue,store:ts,paint:es},ns=N(new ss);function L(){return ns}export{Te as a,Gt as d,S as s,L as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./seventv.PaintTool.3.1.27.js","./seventv.index.3.1.27.js","./seventv.GearsIcon.3.1.27.js","./seventv.useCosmetics.3.1.27.js","./seventv.ChevronIcon.3.1.27.js","./seventv.v4.3.1.27.js","./seventv.ChatMessage.3.1.27.js","./seventv.UiButton.3.1.27.js","./seventv.UiScrollable.3.1.27.js","./seventv.UiFloating.3.1.27.js","./seventv.index.3.1.272.js","./seventv.Store.3.1.27.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}