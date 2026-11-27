import{u as ue,a as He}from"./seventv.useChatEmotes.3.1.27.js";import{f as de,e as z,x as l,l as d,m as p,G as N,_ as O,a2 as De,r as I,aH as Qe,u as M,O as $e,aA as be,a as re,i as It,S as St,a9 as Xe,W as mt,q as P,D as U,h as te,J as ht,F as Y,B,I as Z,aC as Ot,K as Pt,w as fe,n as Le,C as ve,t as gt,E as se,d as ft,s as Ke,an as vt,P as Re,a1 as pe,N as X,H as We,Y as Be,ad as pt,av as xt,aB as yt,M as Et,as as At,Q as Rt,R as Bt,a3 as Nt,aI as Ft}from"./seventv.index.3.1.27.js";import{F as ee,G as Vt,I as Ht,J as Pe,z as ze,S as Wt}from"./seventv.useCosmetics.3.1.27.js";import{t as zt,u as Q,D as Yt,l as le,j as qt,F as Ce,L as jt,h as _t,r as Gt,n as Qt,k as Xt,H as Kt,m as Jt}from"./seventv.GearsIcon.3.1.27.js";import{f as Ne,g as Zt}from"./seventv.Transform.3.1.27.js";import{C as Je}from"./seventv.ChatMessage.3.1.27.js";import{d as en,h as tn,f as nn}from"./seventv.index.3.1.272.js";import{d as an}from"./seventv.Async.3.1.27.js";import{U as rn,u as sn}from"./seventv.UiConfirmPrompt.3.1.27.js";import{t as on,a as bt,b as wt,u as Ie,E as Ct,c as ln}from"./seventv.Emote.3.1.27.js";import{a as Ye}from"./seventv.useModule.3.1.27.js";import{S as Ze}from"./seventv.StoreSubscribeButton.3.1.27.js";import{a as un,u as cn}from"./seventv.Settings.3.1.27.js";import{O as dn}from"./seventv.OpenLinkIcon.3.1.27.js";import{v as mn}from"./seventv.v4.3.1.27.js";import{a as et}from"./seventv.useFloatContext.3.1.27.js";import{R as Fe}from"./seventv.ReactHooks.3.1.27.js";import{T as hn,U as gn}from"./seventv.UiDraggable.3.1.27.js";import{U as Mt}from"./seventv.UiScrollable.3.1.27.js";const tt=new WeakMap;function $t(n){let t=tt.get(n);return t||(t=de({isDarkTheme:1,primaryColorHex:null,useHighContrastColors:!0,showTimestamps:!1,showModerationIcons:!1,hovering:!1,pauseReason:new Set(["SCROLL"]),currentChannel:{},imageFormat:"WEBP",twitchBadgeSets:{},blockedUsers:new Set,fontAprilFools:"unset"}),tt.set(n,t)),t}const fn={ref:"tooltip",class:"seventv-tooltip","tooltip-type":"badge"},vn=z({__name:"BadgeTooltip",props:{alt:{}},setup(n){return(t,e)=>(l(),d("div",fn,[p("p",null,N(t.alt),1)],512))}}),pn=O(vn,[["__scopeId","data-v-bfbc76a7"]]),yn={class:"seventv-chat-badge"},_n=["srcset","alt"],bn=z({__name:"Badge",props:{alt:{},type:{},badge:{}},setup(n){const t=n,{t:e}=De(),r=I(""),a=I(""),s={twitch:u=>`${u.image1x} 1x, ${u.image2x} 2x, ${u.image4x} 4x`,picture:u=>`${u.profileImageURL.replace(Qe,"28x28")} 1.6x,
		${u.profileImageURL.replace(Qe,"70x70")} 3.8x`,app:u=>u.data.host.files.map((f,g)=>`https:${u.data.host.url}/${f.name} ${g+1}x`).join(", ")}[t.type](t.badge),i=I(),v={alt:t.alt};if(w(t.badge)){const u=parseInt(t.badge.version,10),f=parseInt(t.badge.data??"0",10),g=isNaN(u)?0:Math.max(Math.floor(u/1e3),0);if(f>0){const o=g>0?"badges.subscriber.tiered_months":"badges.subscriber.months";v.alt+=` (${e(o,f,{named:{tier:g,months:f}})})`}}const{show:m,hide:h}=be(pn,v);function b(u){return u.kind==="BADGE"&&t.type==="app"}function w(u){return t.type==="twitch"&&"setID"in u&&(u.setID==="subscriber"||u.setID==="founder")}return b(t.badge)&&(r.value=t.badge.data.backgroundColor??""),typeof t.badge=="string"&&(a.value="25%"),(u,f)=>(l(),d("div",yn,[p("img",{ref_key:"imgRef",ref:i,srcset:M(s),alt:u.alt,style:$e({backgroundColor:r.value,borderRadius:a.value}),onMouseenter:f[0]||(f[0]=g=>M(m)(i.value)),onMouseleave:f[1]||(f[1]=g=>M(h)())},null,44,_n)]))}}),Me=O(bn,[["__scopeId","data-v-64a9e06f"]]),nt=new Map;function at(n,t=!0){const e=nt.get(n),r=t&&e?e:new Audio,a=(i=1)=>{if(t&&e){e.volume=i,e.play();return}wn(n).then(v=>{r.src=v,r.volume=i,r.play(),nt.set(n,r)})},s=()=>r.pause();return zt(()=>{r.remove()}),{play:a,stop:s,audio:r}}async function wn(n){const t=await fetch(n);if(!t.ok)throw new Error(`HTTP error: ${t.status} - ${t.statusText}`);return URL.createObjectURL(await t.blob())}let kt=!1;const Cn=Q("chat.font-april-fools-2026",!1);re(Cn,n=>{kt=n},{immediate:!0});const rt=new WeakMap,xe=Q("highlights.custom"),Mn=Q("highlights.sound_volume");function $n(n){const t=en(),e=It(St,""),r=de({ping:at(e+"/sound/ping.ogg")});let a=rt.get(n);a||(a=de({highlights:{}}),re(xe,_=>{if(a){for(const[C,y]of Object.entries(a.highlights))y.persist&&delete a.highlights[C];for(const[,C]of _)a.highlights[C.id]=C,v(C),m(C)}},{immediate:!0}),rt.set(n,a));const s=an(function(){if(!a)return;const _=Array.from(Object.values(a.highlights)).filter(C=>C.persist).map(C=>[C.id,Xe({...C,soundFile:Xe(C.soundFile),soundDef:void 0,flashTitleFn:void 0})]);xe.value=new Map(_)},250);function i(_,C,y){if(!a)return{};const D=a.highlights[_]={...C,id:_,persist:y};return v(D),y&&(xe.value.set(_,mt(D)),s()),D}function v(_){var D;if(!_.soundFile){(D=_.soundPath)!=null&&D.startsWith("#")&&r[_.soundPath.slice(1)]&&(_.soundDef=r[_.soundPath.slice(1)]);return}const C=new Blob([_.soundFile.data],{type:_.soundFile.type}),y=URL.createObjectURL(C);return _.soundPath=y,_.soundDef=at(y),y}function m(_){_.flashTitleFn=_.flashTitle?()=>` 💬 Highlight: ${_.label||_.pattern}`:void 0}function h(_){a&&(delete a.highlights[_],s())}function b(_,C){var V,j,L,c;if(!a)return!1;const y=a==null?void 0:a.highlights[_];if(!y)return!1;let D=!1;if(kt==!1&&!C.historical&&Math.random()<.005)D=!0;else if(y.phrase||!y.phrase&&!y.username&&!y.badge)if(y.regexp){let k=y.cachedRegExp;if(!k)try{k=new RegExp(y.pattern,"i"),Object.defineProperty(y,"cachedRegExp",{value:k})}catch(T){return le.warn("<ChatHighlights>","Invalid regexp:",y.pattern??""),C.setHighlight("#878787","Error "+T.message),!1}D=k.test(C.body)}else y.pattern?D=y.caseSensitive?C.body.includes(y.pattern):C.body.toLowerCase().includes(y.pattern.toLowerCase()):typeof y.test=="function"&&(D=y.test(C));else y.username?D=((V=C.author)==null?void 0:V.displayName.toLowerCase())===((j=y.pattern)==null?void 0:j.toLowerCase()):y.badge&&(D=Object.keys(C.badges).indexOf(((L=y.pattern)==null?void 0:L.toLowerCase())??"")>-1&&Object.values(C.badges).indexOf(((c=y.version)==null?void 0:c.toLowerCase())??"")>-1);return D&&(C.setHighlight(y.color,y.label),y.soundDef&&!C.historical&&y.soundDef.play(Mn.value/100),y.flashTitleFn&&!C.historical&&o(y,C)),D}const w=I(""),u=I(document.title);let f=0;const g=Yt(()=>{tn(f++%2===0?w.value:u.value)},1e3,{immediate:!1,immediateCallback:!0});function o(_,C){!_.flashTitleFn||g.isActive.value||(u.value=document.title,w.value=_.flashTitleFn(C),g.resume(),qt(t).toBe("visible").then(()=>{g.pause(),w.value="",document.title=u.value}))}function $(){return a?Ce(a.highlights):{}}function x(){if(!a)return{};const _=Object.fromEntries(Object.entries(a.highlights).filter(([,C])=>C.phrase===!0||!C.phrase&&!C.username&&!C.badge));return Ce(_)}function E(){if(!a)return{};const _=Object.fromEntries(Object.entries(a.highlights).filter(([,C])=>C.username===!0));return Ce(_)}function q(){if(!a)return{};const _=Object.fromEntries(Object.entries(a.highlights).filter(([,C])=>C.badge===!0));return Ce(_)}function F(_,C){if(!a)return;const y=a.highlights[_];y&&(a.highlights[C]=y,delete a.highlights[_],y.id=C,s())}return{define:i,remove:h,getAll:$,getAllPhraseHighlights:x,getAllUsernameHighlights:E,getAllBadgeHighlights:q,save:s,updateId:F,checkMatch:b,updateSoundData:v,updateFlashTitle:m}}const st=new WeakMap;function Se(n){let t=st.get(n);t||(t=de({TWITCH:{onShowViewerCard:()=>{},onShowViewerWarnPopover:()=>{}},YOUTUBE:{},KICK:{},UNKNOWN:{}}),st.set(n,t));function e(s,i,v){t&&(t[s][i]=v)}function r(s,i,v){if(!t||!s||!s.currentTarget||!i)return!1;const m=s.currentTarget.getBoundingClientRect();return t[n.platform].onShowViewerCard(i,0,v,m.bottom),!0}function a(s,i,v){return!t||!s||!i?!1:(t[n.platform].onShowViewerWarnPopover(s,i,v),!0)}return{update:e,openViewerCard:r,openViewerWarnPopover:a}}const kn=ee`
	query ViewerCard(
		$channelID: ID!
		$channelIDStr: String!
		$channelLogin: String!
		$giftRecipientLogin: String!
		$withStandardGifting: Boolean!
	) {
		activeTargetUser: user(login: $giftRecipientLogin) {
			id
		}
		targetUser: user(login: $giftRecipientLogin, lookupType: ALL) {
			id
			login
			bannerImageURL
			displayName
			displayBadges(channelID: $channelID) {
				...badge
				description
			}
			chatColor
			profileImageURL(width: 70)
			createdAt
			relationship(targetUserID: $channelID) {
				cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
					months
					daysRemaining
				}
				followedAt
				subscriptionBenefit {
					id
					tier
					purchasedWithPrime
					gift {
						isGift
					}
				}
			}
			isModerator(channelID: $channelIDStr)
			stream {
				id
				game {
					id
					displayName
				}
				viewersCount
			}
		}
		channelUser: user(login: $channelLogin) {
			id
			login
			displayName
			subscriptionProducts {
				...subscriptionProduct
			}
			self {
				banStatus {
					isPermanent
				}
				isModerator
			}
		}
		currentUser {
			login
			id
		}
		channelViewer(userLogin: $giftRecipientLogin, channelLogin: $channelLogin) {
			id
			earnedBadges {
				...badge
				description
			}
		}
		channel(id: $channelID) {
			id
			moderationSettings {
				canAccessViewerCardModLogs
			}
		}
	}

	${on}
	${bt}
`,Tn=ee`
	query ViewerCardModLogs($channelLogin: String!, $channelID: ID!, $targetID: ID!) {
		targetUser: user(id: $targetID) {
			id
			login
		}
		channelUser: user(login: $channelLogin) {
			id
			login
		}
		currentUser {
			login
			id
		}
		banStatus: chatRoomBanStatus(channelID: $channelID, userID: $targetID) {
			bannedUser {
				id
				login
				displayName
			}
			createdAt
			expiresAt
			isPermanent
			moderator {
				id
				login
				displayName
			}
			reason
		}

		viewerCardModLogs(channelID: $channelID, targetID: $targetID) {
			messages: messages(first: 1000) {
				... on ViewerCardModLogsMessagesError {
					code
				}
				... on ViewerCardModLogsMessagesConnection {
					pageInfo {
						hasNextPage
					}
					count
				}
			}
			bans: targetedActions(first: 99, type: BAN) {
				...modLogsTargetedActionsResultFragment
			}
			timeouts: targetedActions(first: 99, type: TIMEOUT) {
				...modLogsTargetedActionsResultFragment
			}
			unbans: targetedActions(first: 99, type: UNBAN) {
				...modLogsTargetedActionsResultFragment
			}
			untimeouts: targetedActions(first: 99, type: UNTIMEOUT) {
				...modLogsTargetedActionsResultFragment
			}
			warnings: targetedActions(first: 99, type: WARN) {
				...modLogsTargetedActionsResultFragment
			}
			comments(first: 100) {
				... on ModLogsCommentConnection {
					edges {
						cursor
						node {
							id
							timestamp
							text
							channel {
								id
							}
							author {
								id
								login
								displayName
								chatColor
							}
						}
					}
					pageInfo {
						hasNextPage
						hasPreviousPage
					}
				}
				... on ModLogsCommentsError {
					code
				}
				__typename
			}
		}
	}

	fragment modLogsTargetedActionsResultFragment on ModLogsTargetedActionsResult {
		__typename
		... on ModLogsTargetedActionsError {
			code
		}
		... on ModLogsTargetedActionsConnection {
			count
			pageInfo {
				hasNextPage
			}
			edges {
				cursor
				node {
					...modLogsTargetedActionFragment
				}
			}
		}
	}

	fragment modLogsTargetedActionFragment on ModLogsTargetedAction {
		id
		localizedLabel {
			fallbackString
			...modActionTokens
		}
		timestamp
		type
	}

	fragment modActionTokens on ModActionsLocalizedText {
		localizedStringFragments {
			...modActionText
		}
	}

	fragment modActionText on ModActionsLocalizedTextFragment {
		token {
			... on ModActionsLocalizedTextToken {
				text
			}
			... on User {
				displayName
				login
				id
			}
		}
	}
`,Un=ee`
	#import "twilight/features/message/fragments/message-sender/sender-fragment.gql"
	#import "twilight/features/moderation/moderation-actions/hooks/use-get-mod-actions/mod-action-tokens-fragment.gql"
	query ViewerCardModLogsMessagesBySender($channelID: ID!, $senderID: ID!, $cursor: Cursor) {
		logs: viewerCardModLogs(channelID: $channelID, targetID: $senderID) {
			messages(first: 50, after: $cursor) {
				... on ViewerCardModLogsMessagesError {
					code
				}
				... on ViewerCardModLogsMessagesConnection {
					edges {
						...viewerCardModLogsMessagesEdgeFragment
					}
					pageInfo {
						hasNextPage
					}
				}
			}
		}
	}
	fragment viewerCardModLogsMessagesEdgeFragment on ViewerCardModLogsMessagesEdge {
		__typename
		node {
			...viewerCardModLogsCaughtMessageFragment
			...viewerCardModLogsChatMessageFragment
			...viewerCardModLogsModActionsMessageFragment
		}
		cursor
	}
	fragment viewerCardModLogsChatMessageFragment on ViewerCardModLogsChatMessage {
		id
		sender {
			id
			login
			chatColor
			displayName
			displayBadges(channelID: $channelID) {
				id
				setID
				version
				__typename
			}
			__typename
		}
		sentAt
		content {
			text
			fragments {
				text
				content {
					... on Emote {
						emoteID: id
						setID
						token
					}
					#mention
					... on User {
						id
					}
					__typename
				}
			}
			__typename
		}
	}
	fragment viewerCardModLogsCaughtMessageFragment on ViewerCardModLogsCaughtMessage {
		id
		status
		category
		sentAt
		resolvedAt
		content {
			text
			fragments {
				text
				content {
					... on Emote {
						emoteID: id
						setID
						token
					}
					... on User {
						id
					}
					__typename
				}
			}
			__typename
		}
		sender {
			id
			login
			chatColor
			displayName
			displayBadges(channelID: $channelID) {
				id
				setID
				version
			}
			__typename
		}
		resolver {
			...sender
		}
		__typename
	}

	fragment viewerCardModLogsModActionsMessageFragment on ViewerCardModLogsModActionsMessage {
		timestamp
		content {
			fallbackString
			...modActionTokens
		}
	}

	fragment modActionTokens on ModActionsLocalizedText {
		localizedStringFragments {
			...modActionText
		}
	}

	fragment modActionText on ModActionsLocalizedTextFragment {
		token {
			... on ModActionsLocalizedTextToken {
				text
			}
			... on User {
				displayName
				login
				id
			}
		}
	}

	fragment sender on User {
		id
		login
		displayName
		chatColor
		displayBadges {
			...badge
		}
	}

	${bt}
`,Dn=ee`
	mutation createModComment($input: CreateModeratorCommentInput!) {
		createModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${wt}
`;ee`
	mutation deleteModeratorComment($input: DeleteModeratorCommentInput!) {
		deleteModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${wt}
`;const Ln={},In={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor"},Sn=p("path",{d:"M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"},null,-1),On=[Sn];function Pn(n,t){return l(),d("svg",In,On)}const xn=O(Ln,[["render",Pn]]),En={},An={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",fill:"currentColor"},Rn=p("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-90.2-70.7c.2-.4 .4-.9 .6-1.3c5.2-11.5 3.1-25-5.3-34.4l-7.4-8.3C497.3 319.2 480 273.9 480 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V51.2c-42.6 8.6-79 34.2-102 69.3L38.8 5.1zM406.2 416L160 222.1v4.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S115.4 416 128 416H406.2zm-40.9 77.3c12-12 18.7-28.3 18.7-45.3H320 256c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"},null,-1),Bn=[Rn];function Nn(n,t){return l(),d("svg",An,Bn)}const Fn=O(En,[["render",Nn]]),Vn={},Hn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em",fill:"currentColor"},Wn=p("path",{d:"M96 0L63.9 44.9C58.8 52.1 56 60.8 56 69.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L96 0zM224 0L191.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L224 0zm95.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L352 0 319.9 44.9zM128 176V144H64v32 48H0V350.8l29.2 15.3 60-28.6 7.1-3.4 7 3.5L160 366.1l56.8-28.4 7.2-3.6 7.2 3.6L288 366.1l56.8-28.4 7-3.5 7 3.4 60 28.6L448 350.8V224H384V176 144H320v32 48H256V176 144H192v32 48H128V176zM448 386.9l-21.3 11.2-7.1 3.7-7.2-3.4-60.2-28.6-57 28.5-7.2 3.6-7.2-3.6L224 369.9l-56.8 28.4-7.2 3.6-7.2-3.6-57-28.5L35.7 398.4l-7.2 3.4-7.1-3.7L0 386.9V512H448V386.9z"},null,-1),zn=[Wn];function Yn(n,t){return l(),d("svg",Hn,zn)}const qn=O(Vn,[["render",Yn]]),jn={},Gn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},Qn=p("path",{d:"M39.8 263.8L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z"},null,-1),Xn=[Qn];function Kn(n,t){return l(),d("svg",Gn,Xn)}const Jn=O(jn,[["render",Kn]]),Zn={},ea={class:"seventv-user-card-actions"};function ta(n,t){return l(),d("div",ea)}const na=O(Zn,[["render",ta],["__scopeId","data-v-ac215262"]]);function xl(n){return n.kind==="TEXT"}function aa(n){return n.kind==="LINK"}function ra(n){return n.kind==="EMOTE"}function sa(n){return n.kind==="GIF"}function oa(n){return n.kind==="MENTION"}const ia=ee`
	mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {
		banUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
				reason
			}
			error {
				code
				minTimeoutDurationSeconds
				maxTimeoutDurationSeconds
			}
		}
	}
`,la=ee`
	mutation Chat_UnbanUserFromChatRoom($input: UnbanUserFromChatRoomInput!) {
		unbanUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
			}
			error {
				code
			}
		}
	}
`,ua=ee`
	mutation Chat_DeleteChatMessage($input: DeleteChatMessageInput!) {
		deleteChatMessage(input: $input) {
			responseCode
			message {
				id
				sender {
					id
					login
					displayName
				}
				content {
					text
				}
			}
		}
	}
`,ca=ee`
	mutation PinChatMessage($input: PinChatMessageInput!) {
		pinChatMessage(input: $input) {
			pinnedChatMessage {
				id
				pinnedMessage {
					id
				}
			}
			error {
				code
			}
		}
	}
`,da=ee`
	mutation ModUser($input: ModUserInput!) {
		result: modUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`,ma=ee`
	mutation UnmodUser($input: UnmodUserInput!) {
		result: unmodUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`;function qe(n,t){const e=Ie();function r(m,h){return e.value?e.value.mutate({mutation:ia,variables:{input:{channelID:n.id,bannedUserLogin:t,expiresIn:m,reason:h}}}):Promise.reject("Missing Apollo")}function a(){return e.value?e.value.mutate({mutation:la,variables:{input:{channelID:n.id,bannedUserLogin:t}}}):Promise.reject("Missing Apollo")}function s(m,h){return e.value?e.value.mutate({mutation:ca,variables:{input:{channelID:n.id,messageID:m,durationSeconds:h,type:"MOD"}}}):Promise.reject("Missing Apollo")}function i(m,h){return e.value?e.value.mutate({mutation:h?ma:da,variables:{input:{channelID:n.id,targetID:m}}}):Promise.reject("Missing Apollo")}function v(m){return e.value?e.value.mutate({mutation:ua,variables:{input:{channelID:n.id,messageID:m}}}):Promise.reject("Missing Apollo")}return{banUserFromChat:r,unbanUserFromChat:a,pinChatMessage:s,deleteChatMessage:v,setUserModerator:i}}const ha={},ga={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},fa=p("g",null,[p("path",{"fill-rule":"evenodd",d:"M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 6a6 6 0 01-4.904-9.458l8.362 8.362A5.972 5.972 0 0110 16zm4.878-2.505a6 6 0 00-8.372-8.372l8.372 8.372z","clip-rule":"evenodd"})],-1),va=[fa];function pa(n,t){return l(),d("svg",ga,va)}const ya=O(ha,[["render",pa]]),_a={},ba={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},wa=p("g",null,[p("path",{d:"M12 2H8v1H3v2h14V3h-5V2zM4 7v9a2 2 0 002 2h8a2 2 0 002-2V7h-2v9H6V7H4z"}),p("path",{d:"M11 7H9v7h2V7z"})],-1),Ca=[wa];function Ma(n,t){return l(),d("svg",ba,Ca)}const $a=O(_a,[["render",Ma]]),ka={},Ta={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},Ua=p("g",null,[p("path",{d:"M11 9.586V6H9v4.414l2.293 2.293 1.414-1.414L11 9.586z"}),p("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z","clip-rule":"evenodd"})],-1),Da=[Ua];function La(n,t){return l(),d("svg",Ta,Da)}const Ia=O(ka,[["render",La]]),Sa={},Oa={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},Pa=p("g",null,[p("path",{"fill-rule":"evenodd",d:"M10.954 3.543c-.422-.724-1.486-.724-1.908 0l-6.9 11.844c-.418.719.11 1.613.955 1.613h13.798c.844 0 1.373-.894.955-1.613l-6.9-11.844zM11 15H9v-2h2v2zm0-3H9V7h2v5z","clip-rule":"evenodd"})],-1),xa=[Pa];function Ea(n,t){return l(),d("svg",Oa,xa)}const Aa=O(Sa,[["render",Ea]]),Ra={class:"seventv-chat-mod-buttons"},Ba=z({__name:"ModIcons",props:{msg:{}},setup(n){var o,$,x,E,q;const t=n,e=ue(),r=Se(e),{banUserFromChat:a,deleteChatMessage:s}=qe(e,((o=t.msg.author)==null?void 0:o.username)??"");function i(){t.msg.author&&r.openViewerWarnPopover(t.msg.author.id,t.msg.author.username,0)}const v=I(),m=be(`Ban ${(($=t.msg.author)==null?void 0:$.username)??"???"}`),h=I(),b=be(`Timeout ${((x=t.msg.author)==null?void 0:x.username)??"???"}`),w=I(),u=be(`Warn ${((E=t.msg.author)==null?void 0:E.username)??"???"}`),f=I(),g=be(`Delete message by ${((q=t.msg.author)==null?void 0:q.username)??"???"}`);return(F,_)=>(l(),d("span",Ra,[F.msg.author&&!F.msg.author.isActor?(l(),d("span",{key:0,ref_key:"banRef",ref:v,onClick:_[0]||(_[0]=C=>M(a)(null)),onMouseenter:_[1]||(_[1]=C=>M(m).show(v.value)),onMouseleave:_[2]||(_[2]=C=>M(m).hide())},[P(ya)],544)):U("",!0),F.msg.author&&!F.msg.author.isActor?(l(),d("span",{key:1,ref_key:"timeoutRef",ref:h,onClick:_[3]||(_[3]=C=>M(a)("10m")),onMouseenter:_[4]||(_[4]=C=>M(b).show(h.value)),onMouseleave:_[5]||(_[5]=C=>M(b).hide())},[P(Ia)],544)):U("",!0),F.msg.author&&!F.msg.author.isActor?(l(),d("span",{key:2,ref_key:"warnRef",ref:w,onClick:_[6]||(_[6]=C=>i()),onMouseenter:_[7]||(_[7]=C=>M(u).show(w.value)),onMouseleave:_[8]||(_[8]=C=>M(u).hide())},[P(Aa)],544)):U("",!0),p("span",{ref_key:"deleteRef",ref:f,onClick:_[9]||(_[9]=C=>M(s)(F.msg.id)),onMouseenter:_[10]||(_[10]=C=>M(g).show(f.value)),onMouseleave:_[11]||(_[11]=C=>M(g).hide())},[P($a)],544)]))}}),Na=O(Ba,[["__scopeId","data-v-743de9d0"]]),Ee=jt.Get();function Fa(n){const t=Vt(Ht,{errorPolicy:"all"}),e=ue(),r=He(e),a=un();n||re(()=>e.user,u=>{var f,g;u&&(n=(g=(f=u.connections)==null?void 0:f.find(o=>o.platform===e.platform))==null?void 0:g.emote_set_id)},{immediate:!0});const s=te(()=>{if(n&&r.sets[n])return r.sets[n]}),i=te(()=>{var u;return a.user?e.id==a.platformUserID||(((u=e.user)==null?void 0:u.editors)??[]).some(f=>{var g;return f.id==((g=a.user)==null?void 0:g.id)})?!0:a.editAnySet:!1}),v=te(()=>a.token?i.value:!1),m=te(()=>i.value&&!a.token);async function h(u,f){var o;if(!n){Ee.error("No set ID found");return}const g=await t.mutate({action:"ADD",emote_id:u,id:n,name:f});if((o=g==null?void 0:g.errors)!=null&&o.length){const $=g.errors[0];throw new Pe($.message,$)}return g}async function b(u){var g;if(!n){Ee.error("No set ID found");return}const f=await t.mutate({action:"REMOVE",emote_id:u,id:n});if((g=f==null?void 0:f.errors)!=null&&g.length){const o=f.errors[0];throw new Pe(o.message,o)}return f}async function w(u,f){var o;if(!n){Ee.error("No set ID found");return}const g=await t.mutate({action:"UPDATE",emote_id:u,id:n,name:f});if((o=g==null?void 0:g.errors)!=null&&o.length){const $=g.errors[0];throw new Pe($.message,$)}return g}return de({add:h,remove:b,rename:w,set:s,setID:n,canEditSet:v,needsLogin:m})}const Va=["shrink"],Ha=["value","active","placeholder"],Wa=z({__name:"EmoteAliasButton",props:{alias:{}},emits:["update:alias"],setup(n,{emit:t}){const e=t,r=I(!1),a=I();return(s,i)=>(l(),d("div",{class:"alias-button",shrink:!r.value},[p("input",{ref_key:"aliasRef",ref:a,value:s.alias,active:r.value,placeholder:r.value?"Alias":"...",onInput:i[0]||(i[0]=v=>e("update:alias",a.value.value)),onFocus:i[1]||(i[1]=v=>r.value=!0),onBlur:i[2]||(i[2]=v=>{s.alias===""&&(r.value=!1)})},null,40,Ha)],8,Va))}}),za=O(Wa,[["__scopeId","data-v-1cf40ae2"]]),Ya={class:"emote-link-embed"},qa=["blurred"],ja={class:"emote-preview"},Ga={class:"description"},Qa=["title"],Xa={key:0,class:"emote-owner"},Ka=["type"],Ja={key:0,class:"login-required"},Za=z({__name:"EmoteLinkEmbed",props:{emoteId:{}},setup(n){const t=n,e=`https://7tv.app/emotes/${t.emoteId}`,r=I(),a=I(""),s=I(!0),i=Fa(),v=cn(),m=te(()=>{var g;return!!((g=i.set)!=null&&g.emotes.find(o=>o.id===t.emoteId))}),h={ADD:"add",REMOVE:"remove",CONFLICT:"conflict",LINK:"link"};async function b(){switch(u.value){case h.ADD:await i.add(t.emoteId,a.value!==""?a.value:void 0),a.value="";break;case h.REMOVE:await i.remove(t.emoteId);break;case h.CONFLICT:break;case h.LINK:window.open(e,"_blank");break}}const w=g=>(g.preventDefault(),v.open=!0,v.switchView("profile"),!1),u=te(()=>{var o;return!i.canEditSet||!r.value?h.LINK:m.value?h.REMOVE:((o=i.set)==null?void 0:o.emotes.find($=>{var x;return $.name===(a.value!==""?a.value:(x=r.value)==null?void 0:x.name)}))||a.value!==""&&!Ot.test(a.value)?h.CONFLICT:h.ADD});async function f(){const g=await fetch(`https://7tv.io/v3/emotes/${t.emoteId}`);if(!g.ok)return;const o=await g.json();o.lifecycle!==2&&(r.value={id:o.id,name:o.name,data:o},o.listed!==!1&&(s.value=!1))}return ht(f),(g,o)=>{var $,x;return l(),d(Y,null,[p("div",Ya,[p("div",{class:"emote-link-container",blurred:s.value},[($=r.value)!=null&&$.data?(l(),d(Y,{key:0},[p("a",{href:e,target:"_blank",class:"link"},[p("div",ja,[r.value?(l(),B(Ct,{key:0,emote:r.value},null,8,["emote"])):U("",!0)])]),p("div",Ga,[p("p",{class:"emote-name",title:r.value.name},N(r.value.name),9,Qa),r.value.data.owner?(l(),d("p",Xa,N(r.value.data.owner.display_name),1)):U("",!0)]),u.value===h.ADD||u.value===h.CONFLICT?(l(),B(za,{key:0,class:"alias-button",type:u.value,alias:a.value,"onUpdate:alias":o[0]||(o[0]=E=>a.value=E)},null,8,["type","alias"])):U("",!0),p("div",{class:"action-button",type:u.value,onClick:b},[u.value===h.LINK?(l(),B(dn,{key:0})):u.value===h.REMOVE?(l(),d(Y,{key:1},[Z(" - ")],64)):(l(),d(Y,{key:2},[Z(" + ")],64))],8,Ka)],64)):U("",!0)],8,qa),(x=r.value)!=null&&x.data&&s.value?(l(),d("div",{key:0,class:"emote-unlisted-warning",onClick:o[1]||(o[1]=E=>s.value=!1)}," Emote is unlisted! Click to view. ")):U("",!0)]),M(i).needsLogin?(l(),d("div",Ja,[p("a",{href:"#",onClick:w}," Authenticate extension to manage emotes ")])):U("",!0)],64)}}}),er=O(Za,[["__scopeId","data-v-3c067032"]]),tr={},nr={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:"1em",height:"1em",fill:"currentColor"},ar=p("path",{d:"M120,136V96a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,48a12,12,0,1,0-12-12A12,12,0,0,0,128,184ZM224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56l0,56c0,37.3,13.82,67.51,41.07,89.81A128.25,128.25,0,0,0,128,223.62a129.3,129.3,0,0,0,39.41-22.2C194.34,179.16,208,149.07,208,112Z"},null,-1),rr=[ar];function sr(n,t){return l(),d("svg",nr,rr)}const or=O(tr,[["render",sr]]),ir=["src","alt"],lr=["onClick"],ur=z({__name:"MessageTokenGif",props:{token:{}},setup(n){const t=n,e=I(!!t.token.content.report);function r(){var s,i;e.value=((i=(s=t.token.content).canReport)==null?void 0:i.call(s))??!1}function a(){var s,i;e.value=((i=(s=t.token.content).report)==null?void 0:i.call(s))??!1}return(s,i)=>(l(),d("span",{class:"seventv-chat-gif-container",onMouseenter:r,onFocusin:r},[p("img",{class:"seventv-chat-gif",src:s.token.content.url,alt:s.token.content.title||"GIF",decoding:"async",draggable:"false"},null,8,ir),e.value?(l(),d("button",{key:0,class:"seventv-chat-gif-report",type:"button","aria-label":"Report GIF",onClick:Pt(a,["stop"])},[P(or,{"aria-hidden":"true"})],8,lr)):U("",!0)],32))}}),cr=O(ur,[["__scopeId","data-v-f7bf5f32"]]),dr=["href"],mr=z({__name:"MessageTokenLink",props:{token:{}},setup(n){return(t,e)=>(l(),d("a",{href:t.token.content.url,target:"_blank",class:"link-part"},N(t.token.content.displayText),9,dr))}}),hr={class:"mention-token"},gr=z({__name:"MessageTokenMention",props:{token:{},msg:{}},setup(n){const t=n,e=t.token.content.displayText.charAt(0)==="@",r=e?t.token.content.displayText.slice(1):t.token.content.displayText;return(a,s)=>(l(),d("span",hr,[P(we,{user:a.token.content.user??{id:M(mn)(),username:M(r).toLowerCase(),displayName:M(r),color:""},"is-mention":"","hide-at":!e,"hide-badges":""},null,8,["user","hide-at"])]))}}),fr=O(gr,[["__scopeId","data-v-20ced684"]]),vr={class:"seventv-chat-message-rich-embed"},pr=["href"],yr={class:"seventv-chat-message-rich-embed-layout"},_r={class:"seventv-chat-message-rich-embed-layout-thumbnail"},br=["src"],wr={class:"seventv-chat-message-rich-embed-layout-description"},Cr={class:"seventv-chat-message-rich-embed-layout-description-title"},Mr={key:0},$r={class:"seventv-chat-message-rich-embed-layout-description-author"},kr=z({__name:"RichEmbed",props:{richEmbed:{}},setup(n){return(t,e)=>(l(),d("div",vr,[p("a",{href:t.richEmbed.request_url,target:"_blank",class:"seventv-chat-message-rich-embed-link"},[p("div",yr,[p("div",_r,[p("img",{src:t.richEmbed.thumbnail_url,alt:"thumbnail"},null,8,br)]),p("div",wr,[p("div",null,[p("p",Cr,N(t.richEmbed.title),1)]),t.richEmbed.twitch_metadata.clip_metadata.id?(l(),d("div",Mr,[p("p",$r," Clipped by "+N(t.richEmbed.author_name),1)])):U("",!0)])])],8,pr)]))}}),Tr=O(kr,[["__scopeId","data-v-250b0388"]]),Ur=ee`
	query ChatReplies($messageID: ID!, $channelID: ID!) {
		message(id: $messageID) {
			...messageFields
			replies {
				nodes {
					...messageFields
				}
				totalCount
			}
		}
	}

	${ln}
`,Dr={},Lr={fill:"currenColor",width:"1em",height:"1em",version:"1.1",viewBox:"0 0 16 16",x:"0px",y:"0px"},Ir=p("g",null,[p("path",{d:"M5 6H7V8H5V6Z"}),p("path",{d:"M9 6H11V8H9V6Z"}),p("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 14L10 12H13C13.5523 12 14 11.5523 14 11V3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3V11C2 11.5523 2.44772 12 3 12H6L8 14ZM6.82843 10H4V4H12V10H9.17157L8 11.1716L6.82843 10Z"})],-1),Sr=[Ir];function Or(n,t){return l(),d("svg",Lr,Sr)}const je=O(Dr,[["render",Or]]),Pr={},xr={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},Er=p("path",{d:"M8.5 5.5L7 4L2 9L7 14L8.5 12.5L6 10H10C12.2091 10 14 11.7909 14 14V16H16V14C16 10.6863 13.3137 8 10 8H6L8.5 5.5Z"},null,-1),Ar=[Er];function Rr(n,t){return l(),d("svg",xr,Ar)}const Br=O(Pr,[["render",Rr]]),Nr={class:"seventv-tray-header"},Fr={class:"seventv-tray-icon seventv-reply"},Vr={class:"seventv-tray-header-text"},Hr={key:0},Wr={key:1},zr={class:"seventv-tray-user-message-container"},Yr=z({__name:"ReplyTray",props:{close:{type:Function},id:{},authorID:{},username:{},displayName:{},body:{},deleted:{type:Boolean},thread:{}},setup(n){const t=n,e=I(null),r=I([]),a=I([]),s=ue(),i=He(s),v=Ie();return fe(async()=>{var b;if(!v.value)return;const m=await v.value.query({query:Ur,fetchPolicy:"no-cache",variables:{messageID:((b=t.thread)==null?void 0:b.id)??t.id,channelID:s.id}}).catch(w=>{le.error("failed to fetch chat replies",w.message)});if(!m||!m.data||!m.data.message)return;e.value=Ne(m.data.message);const h=[e.value,...m.data.message.replies.nodes.map(w=>Ne(w))];h.forEach(w=>{w.parent={author:{displayName:t.displayName??"",username:t.username??""},body:t.body,deleted:t.deleted,id:t.id,uid:t.authorID??"",thread:t.thread??null}}),a.value=h}),fe(()=>{const m=a.value.findIndex(b=>b.id===t.id),h=r.value.at(m);h&&Le(()=>h.scrollIntoView())}),(m,h)=>(l(),d(Y,null,[p("div",Nr,[p("div",Fr,[a.value.length<=1?(l(),B(Br,{key:0})):(l(),B(je,{key:1}))]),p("div",Vr,[a.value.length<=1&&m.authorID?(l(),d("span",Hr,N(`Replying to @${m.displayName??m.username}:`),1)):(l(),d("span",Wr," Thread "))]),p("div",{class:"seventv-tray-icon seventv-close",onClick:h[0]||(h[0]=b=>m.close())},[P(hn)])]),P(Mt,null,{default:ve(()=>[p("div",zr,[(l(!0),d(Y,null,se(a.value,b=>{var w;return l(),d("div",{key:b.id,ref_for:!0,ref_key:"msgElems",ref:r,class:"seventv-tray-user-message"},[P(Ve,{msg:b,emotes:M(i).active,"force-timestamp":!0,as:"Reply",class:gt(["thread-msg",{"is-root-msg":((w=e.value)==null?void 0:w.id)===b.id,"is-selected-msg":t.id===b.id&&a.value.length>1}])},null,8,["msg","emotes","class"])])}),128))])]),_:1})],64))}}),qr=O(Yr,[["__scopeId","data-v-10eb02d7"]]),ot=ft(new Set);function it(n,t){const e=ft({current:null}),r={parent:e,component:mt(n),props:t},a=re(e,s=>{s.current?ot.add(r):(ot.delete(r),a())});return{$$typeof:Fe,key:null,ref:e,type:"seventv-tray-container",props:{}}}function jr(n){const t=n;return!!(t.id&&t.body)&&typeof t.deleted=="boolean"}function Gr(n){var t;return{body:qr,inputValueOverride:"",sendButtonOverride:"reply",disableBits:!0,disablePaidPinnedChat:!0,disableChat:n.deleted||((t=n.thread)==null?void 0:t.deleted),sendMessageHandler:{type:"reply",additionalMetadata:{reply:{parentMsgId:n.id,parentMessageBody:n.body,...n.authorID?{parentUid:n.authorID,parentUserLogin:n.username,parentDisplayName:n.displayName}:{},...n.thread?{threadParentMsgId:n.thread.id,threadParentDeleted:n.thread.deleted,threadParentUserLogin:n.thread.login}:{}}}},type:"reply"}}function Qr(n,t){let e=null;switch(n){case"Reply":if(!jr(t))break;e=Gr(t)}return e}function Xr(n,t,e,r=!1){const a=Ye("chat-input"),s=r?"setModifierTray":"setTray";function i(){var m;!a.value||typeof((m=a.value.instance)==null?void 0:m[s])!="function"||a.value.instance[s](null)}function v(){var w;if(!a.value||typeof((w=a.value.instance)==null?void 0:w[s])!="function")return;const m=I(!0),h={...t==null?void 0:t(),close:()=>{m.value=!1,i()}};if(!h)return m.value=!1,m;const b=e??Qr(n,h);return b?(a.value.instance[s]({...b,header:b.header?it(b.header,h):void 0,body:b.body?it(b.body,h):void 0}),m):(m.value=!1,m)}return{open:v,clear:i,props:t,options:e}}function El(n,t=!1){const e=Ke(null),r=Ke(null),i={type:"seventv-custom-tray",header:{$$typeof:Fe,key:"header",ref:u=>e.value=u,type:"seventv-tray-container-header",props:{}},body:{$$typeof:Fe,key:"body",ref:u=>r.value=u,type:"seventv-tray-container-body",props:{}},sendMessageHandler:n.messageHandler?{type:"custom-message-handler",handleMessage:n.messageHandler}:n.sendMessageHandler??void 0},v=t?"setModifierTray":"setTray",m=Ye("chat-input");function h(u){var f;!((f=m.value)!=null&&f.instance)||typeof m.value.instance[v]!="function"||m.value.instance[v](u)}return de({open:()=>h({...n,...i}),close:()=>h(),bodyRef:r,headerRef:e})}const Kr={},Jr={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},Zr=p("path",{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},null,-1),es=[Zr];function ts(n,t){return l(),d("svg",Jr,es)}const ns=O(Kr,[["render",ts]]),as={},rs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},ss=p("path",{d:"M64 0H32V64H64 93.5L82.1 212.1C23.7 240.7 0 293 0 320v32H384V320c0-22.5-23.7-76.5-82.1-106.7L290.5 64H320h32V0H320 64zm96 480v32h64V480 384H160v96z"},null,-1),os=[ss];function is(n,t){return l(),d("svg",rs,os)}const ls=O(as,[["render",is]]),us={},cs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},ds=p("path",{d:"M0 208L192 384h32V288h80c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176H224V32H192L0 208z"},null,-1),ms=[ds];function hs(n,t){return l(),d("svg",cs,ms)}const gs=O(us,[["render",hs]]),fs={class:"seventv-copied-message-toast-body"},vs={key:0},ps=z({__name:"UiCopiedMessageToast",props:{message:{}},emits:["close"],setup(n,{emit:t}){const e=I(),r=t;return nn(e,()=>{r("close")}),(a,s)=>(l(),d("main",{ref_key:"copiedMessageToastRef",ref:e,class:"seventv-copied-message-toast"},[p("div",fs,[a.message?(l(),d("p",vs,N(a.message),1)):vt(a.$slots,"default",{key:1},void 0,!0)])],512))}}),ys=O(ps,[["__scopeId","data-v-fbb0ba18"]]),_s={class:"seventv-chat-message-buttons"},bs=z({__name:"UserMessageButtons",props:{msg:{}},emits:["pin"],setup(n,{emit:t}){const e=n,r=t,a=Xr("Reply",()=>{var o,$,x,E,q,F,_;return{id:e.msg.id,body:e.msg.body,deleted:e.msg.moderation.deleted,...e.msg.author?{authorID:(o=e.msg.author)==null?void 0:o.id,username:($=e.msg.author)==null?void 0:$.username,displayName:(x=e.msg.author)==null?void 0:x.displayName}:{},...e.msg.parent?{thread:{deleted:((E=e.msg.parent.thread)==null?void 0:E.deleted)??e.msg.parent.deleted,id:((q=e.msg.parent.thread)==null?void 0:q.id)??e.msg.parent.id,login:((F=e.msg.parent.thread)==null?void 0:F.login)??((_=e.msg.parent.author)==null?void 0:_.username)??""}}:{}}}),s=Q("chat.copy_icon_toggle"),i=I(!1),v=I(),m=et(v,{enabled:()=>i.value,middleware:[Re({padding:8})]});function h(){i.value||(navigator.clipboard.writeText(e.msg.body),i.value=!0,_t(()=>{i.value=!1},1e3))}const b=I(!1),w=I(),u=et(w,{enabled:()=>b.value,middleware:[Re({padding:8})]});function f(){a.open()}function g(o){o==="yes"&&r("pin")}return(o,$)=>{const x=pe("tooltip");return l(),d(Y,null,[p("div",_s,[M(s)&&!o.msg.moderation.deleted?X((l(),d("div",{key:0,ref_key:"copyButtonRef",ref:v,class:"seventv-button",onClick:$[0]||($[0]=E=>h())},[P(ns)])),[[x,"Copy"]]):U("",!0),o.msg.pinnable&&!o.msg.moderation.deleted?X((l(),d("div",{key:1,ref_key:"pinButtonRef",ref:w,class:"seventv-button",onClick:$[1]||($[1]=E=>b.value=!0)},[P(ls)])),[[x,"Pin"]]):U("",!0),X((l(),d("div",{class:"seventv-button",onClick:f},[(l(),B(We(o.msg.parent?je:gs)))])),[[x,"Reply"]])]),i.value&&M(m)?(l(),B(Be,{key:0,to:M(m)},[P(ys,{title:"Message Copied",onClose:$[2]||($[2]=E=>i.value=!1)},{default:ve(()=>[Z(" Message from "),o.msg.author?(l(),B(we,{key:0,user:o.msg.author},null,8,["user"])):U("",!0),Z(" has been copied ")]),_:1})],8,["to"])):U("",!0),b.value&&M(u)?(l(),B(Be,{key:1,to:M(u)},[P(rn,{title:"Pin Message?",choices:["yes","no"],onClose:$[3]||($[3]=E=>b.value=!1),onAnswer:$[4]||($[4]=E=>g(E))},{default:ve(()=>[Z(" Are you sure you want to pin this message by "),o.msg.author?(l(),B(we,{key:0,user:o.msg.author},null,8,["user"])):U("",!0),Z("? ")]),_:1})],8,["to"])):U("",!0)],64)}}}),ws=O(bs,[["__scopeId","data-v-b7afb063"]]);function G(n,t){if(t.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+t.length+" present")}function Cs(n,t,e){var r;G(1,arguments);var a;return Ms(t)?a=t:e=t,new Intl.DateTimeFormat((r=e)===null||r===void 0?void 0:r.locale,a).format(n)}function Ms(n){return n!==void 0&&!("locale"in n)}function Ge(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e.length>=t?n.apply(null,e.slice(0,t).reverse()):function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return Ge(n,t,e.concat(a))}}const $s=Ge(Cs,3),ks=["msg-id","state","data-highlight-style"],Ts=["data-highlight-label"],Us={key:1,class:"seventv-chat-message-timestamp"},Ds={key:4},Ls={class:"seventv-chat-message-body"},Is={key:0,class:"text-token"},Ss={key:1},Os={key:0,class:"seventv-chat-message-moderated"},Ps={key:1,class:"seventv-chat-message-moderated"},xs=z({__name:"UserMessage",props:{msg:{},as:{default:"Chat"},highlight:{},emotes:{},chatters:{},isModerator:{type:Boolean},hideAuthor:{type:Boolean},hideModeration:{type:Boolean},hideModIcons:{type:Boolean},hideDeletionState:{type:Boolean},showButtons:{type:Boolean},forceTimestamp:{type:Boolean}},setup(n){var D;const t=n,e=pt(t,"msg"),r=I(),a=ue(),s=$t(a),{openViewerCard:i}=Se(a),{pinChatMessage:v}=qe(a,((D=e.value.author)==null?void 0:D.username)??""),m=Q("chat.emote_scale"),h=Q("chat.slash_me_style"),b=Q("highlights.display_style"),w=Q("highlights.opacity"),u=Q("chat.timestamp_with_seconds"),f=Q("chat.show_emote_modifiers"),g=Q("chat.timestamp_format"),o=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language??"en",$=t.msg.author?ze(t.msg.author.id):{emotes:{}},x=I(""),E=t.msg.getTokenizer(),q=I([]);function F(){if(!E)return;const R=E.tokenize({chatterMap:t.chatters??{},emoteMap:t.emotes??{},localEmoteMap:{...$.emotes,...t.msg.nativeEmotes},showModifiers:f.value}),V=[],j=t.msg.body;let L=0;for(const k of R){const T=k.range[0],S=k.range[1],H=j.substring(L,T);H&&V.push(H),V.push(k),L=S+1}const c=j.substring(L);c&&V.push(c),q.value=V}function _(){var R;(R=v(e.value.id,1200))==null||R.catch(V=>le.error("failed to pin chat message",V))}re(()=>[$.emotes,t.msg.nativeEmotes],()=>F(),{immediate:!0}),t.msg.refresh=F,t.msg.historical&&_t(fe(()=>{F()}),1e4);function C(R){if(oa(R))return fr;if(aa(R))return mr}const y=()=>{switch(g.value){case"infer":return;case"12":return"h12";case"24":return"h23"}};return fe(()=>{!e.value||!r.value||(e.value.highlight&&(r.value.style.setProperty("--seventv-highlight-color",e.value.highlight.color),r.value.style.setProperty("--seventv-highlight-dim-color",e.value.highlight.color.concat(Wt(w.value/100)))),(s.showTimestamps||e.value.historical||t.forceTimestamp)&&(x.value=$s({locale:o},{localeMatcher:"lookup",hour:"2-digit",minute:"2-digit",second:u.value?"numeric":void 0,hourCycle:y()},t.msg.timestamp)))}),(R,V)=>{var j;return l(),d("span",{ref_key:"msgEl",ref:r,class:gt(["seventv-user-message",{deleted:!R.hideDeletionState&&(e.value.moderation.banned||e.value.moderation.deleted),"has-mention":R.as=="Chat"&&e.value.mentions.has("#actor"),"has-highlight":R.as=="Chat"&&e.value.highlight}]),"msg-id":e.value.id,state:e.value.deliveryState,style:$e({"font-style":e.value.slashMe&&M(h)&1?"italic":"",color:e.value.slashMe&&M(h)&2?(j=e.value.author)==null?void 0:j.color:""}),"data-highlight-style":M(b)},[e.value.highlight?(l(),d("div",{key:0,class:"seventv-chat-message-highlight-label","data-highlight-label":e.value.highlight.label},null,8,Ts)):U("",!0),M(s).showTimestamps||e.value.historical||R.forceTimestamp?(l(),d("span",Us,N(x.value),1)):U("",!0),M(a).actor.roles.has("MODERATOR")&&M(s).showModerationIcons&&!R.hideModIcons?(l(),B(Na,{key:2,msg:e.value},null,8,["msg"])):U("",!0),e.value.author&&!R.hideAuthor?(l(),B(we,{key:3,user:e.value.author,"source-data":e.value.sourceData,badges:e.value.badges,"badge-data":e.value.badgeData,"msg-id":e.value.sym,onOpenNativeCard:V[0]||(V[0]=L=>M(i)(L,e.value.author.username,e.value.id))},null,8,["user","source-data","badges","badge-data","msg-id"])):U("",!0),R.hideAuthor?U("",!0):(l(),d("span",Ds,N(e.value.slashMe?" ":": "),1)),p("span",Ls,[(l(!0),d(Y,null,se(q.value,(L,c)=>(l(),d(Y,{key:c},[typeof L=="string"?(l(),d("span",Is,N(L),1)):M(ra)(L)?(l(),d("span",Ss,[P(Ct,{class:"emote-token",emote:L.content.emote,format:M(s).imageFormat,overlaid:L.content.overlaid,clickable:!0,scale:Number(M(m))},null,8,["emote","format","overlaid","scale"]),L.content?(l(),d("span",{key:0,style:$e({color:L.content.cheerColor})},N(L.content.cheerAmount),5)):U("",!0)])):M(sa)(L)?(l(),B(cr,{key:2,token:L},null,8,["token"])):(l(),B(We(C(L)),xt(yt({key:3},{token:L,msg:e.value})),null,16))],64))),128))]),e.value.richEmbed.request_url?(l(),B(Tr,{key:5,"rich-embed":e.value.richEmbed},null,8,["rich-embed"])):U("",!0),e.value.emoteLinkEmbed?(l(),B(er,{key:6,"emote-id":e.value.emoteLinkEmbed},null,8,["emote-id"])):U("",!0),!R.hideModeration&&(e.value.moderation.banned||e.value.moderation.deleted)?(l(),d(Y,{key:7},[e.value.moderation.banned?(l(),d("span",Os,N(e.value.moderation.banDuration?`Timed out (${e.value.moderation.banDuration}s)`:"Permanently Banned"),1)):(l(),d("span",Ps,"Deleted"))],64)):U("",!0),P(ws,{msg:e.value,onPin:V[1]||(V[1]=L=>_())},null,8,["msg"])],14,ks)}}}),Ve=O(xs,[["__scopeId","data-v-12f1f826"]]),Es={class:"seventv-chat-message-container"},As={class:"seventv-chat-message-background",tabindex:"0"},Rs={key:0,class:"seventv-reply-part"},Bs={class:"seventv-chat-reply-icon"},Ns={class:"seventv-reply-message-part"},Fs=z({__name:"0.NormalMessage",props:{msg:{},msgData:{}},setup(n){return(t,e)=>{const r=pe("tooltip");return l(),d("div",Es,[p("div",As,[t.msgData.reply?(l(),d("div",Rs,[p("div",Bs,[P(je)]),X((l(),d("div",Ns,[Z(N(`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`),1)])),[[r,`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`]])])):U("",!0),vt(t.$slots,"default",{},void 0,!0)])])}}}),Vs=O(Fs,[["__scopeId","data-v-7a7ddc21"]]),Tt=n=>(Rt("data-v-21ba2f53"),n=n(),Bt(),n),Hs={key:0,class:"seventv-user-card-message-timeline"},Ws=["timeline-id"],zs=Tt(()=>p("div",{selector:"date-boundary"},null,-1)),Ys=Tt(()=>p("div",{selector:"date-boundary"},null,-1)),qs={class:"seventv-user-card-message-timeline-list"},js={key:1,class:"seventv-user-card-message-timeline-empty"},Gs={key:2,class:"seventv-user-card-mod-comment-input-container"},Qs=["placeholder","onKeydown"],Xs=z({__name:"UserCardMessageList",props:{activeTab:{},target:{},timeline:{},scroller:{}},emits:["add-mod-comment"],setup(n,{emit:t}){const e=n,r=t,{t:a}=De(),s=ue(),i=He(s),v=Gt(!0,10),m=Ie(),h=I("");function b(){var u;(u=e.scroller)!=null&&u.container&&e.scroller.container.scrollTo({top:e.scroller.container.scrollHeight})}async function w(){var g;if(!h.value||!m.value)return;const u=h.value;h.value="";const f=await m.value.mutate({mutation:Dn,variables:{input:{channelID:s.id,targetID:e.target.id,text:u}}}).catch(o=>le.error("failed to add mod comment",o));!f||!f.data||!f.data.createModeratorComment||(r("add-mod-comment",(g=f.data)==null?void 0:g.createModeratorComment.comment),Le(b))}return re(()=>e.activeTab,()=>{v.value=!1,setTimeout(()=>{b()},10)}),re(e.timeline,()=>{var u;!((u=e.scroller)!=null&&u.container)||e.scroller.container.scrollTop!==0||b()}),(u,f)=>M(v)?(l(),d("div",Hs,[Object.keys(e.timeline).length?(l(!0),d(Y,{key:0},se(Object.entries(e.timeline).reverse(),([g,o])=>(l(),d("section",{key:g,"timeline-id":g},[zs,p("label",null,N(g),1),Ys,p("div",qs,[(l(!0),d(Y,null,se(o,$=>(l(),d(Y,{key:$.sym},[$.instance&&$.instance!==Vs?(l(),B(We($.instance),yt({key:0},$.componentProps,{msg:$}),{default:ve(()=>[P(Ve,{msg:$,emotes:M(i).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"])]),_:2},1040,["msg"])):(l(),B(Ve,{key:1,msg:$,emotes:M(i).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"]))],64))),128))])],8,Ws))),128)):(l(),d("div",js,[p("p",null,N(M(a)(`user_card.no_${u.activeTab}`,{user:u.target.displayName})),1)])),u.activeTab==="comments"?(l(),d("div",Gs,[X(p("input",{id:"seventv-user-card-mod-comment-input","onUpdate:modelValue":f[0]||(f[0]=g=>h.value=g),placeholder:M(a)("user_card.add_comment_input_placeholder"),onKeydown:At(w,["enter"])},null,40,Qs),[[Et,h.value]])])):U("",!0)])):U("",!0)}}),Ks=O(Xs,[["__scopeId","data-v-21ba2f53"]]),Js={mlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Zs={key:0,d:"M408 56L384 80c37.3 37.3 74.7 74.7 112 112c8-8 16-16 24-24l56 56c-37.5 37.5-74.9 74.9-112.4 112.4c59.1 45.9 118.2 91.7 177.3 137.6c-9.8 12.6-19.6 25.3-29.4 37.9C407.9 353.9 204.5 195.9 1 38C10.8 25.3 20.6 12.7 30.4 .1c60.3 46.8 120.7 93.7 181 140.5C258.3 93.7 305.1 46.9 352 0c18.7 18.7 37.3 37.3 56 56zM288 176l-13.5 13.5c40.3 31.3 80.7 62.7 121 94C359.7 247.7 323.8 211.8 288 176zm-9.4 166.7c5.8 5.7 11.6 11.5 17.4 17.3c-50.7 50.7-101.3 101.3-152 152c-26.7-26.7-53.3-53.3-80-80c50.7-50.7 101.3-101.3 152-152c5.8 5.8 11.6 11.6 17.4 17.4c3.3-3.3 6.5-6.5 9.8-9.8c16.9 13.3 33.8 26.6 50.6 39.9c-5.1 5.1-10.1 10.1-15.2 15.2z"},eo={key:1,d:"M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56zM214.6 342.6L232 360 80 512 0 432 152 280l17.4 17.4L234.7 232 280 277.3l-65.4 65.4z"},to=z({__name:"GavelIcon",props:{slashed:{type:Boolean}},setup(n){return(t,e)=>(l(),d("svg",Js,[t.slashed?(l(),d("path",Zs)):(l(),d("path",eo))]))}}),no={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},ao={key:0,d:"M496.8 363l124.1 96.3 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 77.8 60.4L308.4 4.5 320 0l11.6 4.5L539.1 85l19.2 7.4 1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-7.2 16.5-15.6 32.9-25.3 49zM170.4 109.5L458.6 333.3c7.4-12.6 13.9-25.5 19.5-38.5C505 232.9 512.9 169.5 512 126L320 51.5l-149.6 58zm-8.5 185.2c28.2 64.9 77 127.7 158.1 164.8c30-13.7 55.6-31 77.3-50.5l38.2 30.1c-28.1 26.5-62 49.7-102.8 67.3L320 512l-12.7-5.5c-98.4-42.6-156.7-117.3-189.4-192.6c-23.5-54.1-34.1-109-37-154.2l53.3 42c5.2 29.5 13.9 61.5 27.7 93z"},ro={key:1,d:"M267.6 4.5L256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5zM256 68.7l0 0L432 137c-.5 40.9-8.8 96.8-32.6 151.5c-26.2 60.3-70.6 118-143.5 153.5V68.7z"},so=z({__name:"ShieldIcon",props:{slashed:{type:Boolean}},setup(n){return(t,e)=>(l(),d("svg",no,[t.slashed?(l(),d("path",ao)):(l(),d("path",ro))]))}}),oo={},io={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",width:"1em",height:"1em"},lo=p("path",{d:"M448 32H0V480H448V32zM248 128v24V264v24H200V264 152 128h48zM200 320h48v48H200V320z"},null,-1),uo=[lo];function co(n,t){return l(),d("svg",io,uo)}const mo=O(oo,[["render",co]]),ho={class:"seventv-user-card-mod"},go=["is-banned"],fo={class:"seventv-user-card-mod-side seventv-user-card-mod-warn"},vo={class:"seventv-user-card-mod-timeout-options"},po=["onClick"],yo=["is-mod"],_o=z({__name:"UserCardMod",props:{target:{},ban:{},isModerator:{type:Boolean}},emits:["victim-banned","victim-unbanned","victim-modded","victim-unmodded"],setup(n,{emit:t}){const e=n,r=t,{t:a}=De(),s=ue(),i=qe(s,e.target.username),v=Se(s);async function m(u){var g,o,$;const f=await i.banUserFromChat(u).catch(()=>{});!f||(g=f.errors)!=null&&g.length||!((o=f.data)!=null&&o.banUserFromChatRoom.ban)||r("victim-banned",($=f.data)==null?void 0:$.banUserFromChatRoom.ban)}async function h(){var f;const u=await i.unbanUserFromChat().catch(()=>{});!u||(f=u.errors)!=null&&f.length||r("victim-unbanned")}async function b(u){var g;const f=await i.setUserModerator(e.target.id,u).catch(()=>{});!f||(g=f.errors)!=null&&g.length||r(u?"victim-unmodded":"victim-modded")}const w=["1s","30s","1m","10m","30m","1h","4h","12h","1d","7d","14d"];return(u,f)=>{const g=pe("tooltip");return l(),d("div",ho,[p("div",{class:"seventv-user-card-mod-side seventv-user-card-mod-ban","is-banned":u.ban?"1":"0"},[X(P(to,{slashed:!!u.ban,onClick:f[0]||(f[0]=o=>u.ban?h():m(""))},null,8,["slashed"]),[[g,u.ban?M(a)("user_card.unban_button"):M(a)("user_card.ban_button")]])],8,go),p("div",fo,[X(P(mo,{onClick:f[1]||(f[1]=o=>M(v).openViewerWarnPopover(u.target.id,u.target.username,0))},null,512),[[g,M(a)("user_card.warn_button")]])]),X(p("div",vo,[(l(),d(Y,null,se(w,o=>X(p("button",{key:o,onClick:$=>m(o)},[Z(N(o),1)],8,po),[[g,M(a)("user_card.timeout_button",{duration:o})]])),64))],512),[[Nt,!u.ban]]),M(s).actor.roles.has("BROADCASTER")?(l(),d("div",{key:0,class:"seventv-user-card-mod-side seventv-user-card-mod-moderator","is-mod":u.isModerator?"1":"0"},[X(P(so,{slashed:u.isModerator,onClick:f[2]||(f[2]=o=>b(!!u.isModerator))},null,8,["slashed"]),[[g,u.isModerator?M(a)("user_card.unmod_button"):M(a)("user_card.mod_button")]])],8,yo)):U("",!0)])}}}),bo=O(_o,[["__scopeId","data-v-bb759d6b"]]),wo={class:"seventv-user-card-tabs"},Co=["selected","onClick"],Mo=z({__name:"UserCardTabs",props:{activeTab:{},messageCount:{},warningCount:{},timeoutCount:{},banCount:{},commentCount:{}},emits:["switch"],setup(n,{emit:t}){const e=n,r=t,a=te(()=>[{id:"messages",label:"Messages",count:e.messageCount,maxCount:1e3},{id:"warnings",label:"Warnings",count:e.warningCount,maxCount:99},{id:"timeouts",label:"Timeouts",count:e.timeoutCount,maxCount:99},{id:"bans",label:"Bans",count:e.banCount,maxCount:99},{id:"comments",label:"Comments",count:e.commentCount,maxCount:10}]);function s(i,v){return i>=v?v.toString()+"+":i.toString()}return(i,v)=>(l(),d("div",wo,[(l(!0),d(Y,null,se(a.value,m=>(l(),d("button",{key:m.label,selected:i.activeTab===m.id,onClick:h=>r("switch",m.id)},[Z(N(s(m.count,m.maxCount))+" ",1),p("p",null,N(m.label),1)],8,Co))),128))]))}}),$o=O(Mo,[["__scopeId","data-v-52560988"]]),ko={class:"seventv-basic-system-message"},To=z({__name:"BasicSystemMessage",props:{text:{}},setup(n){return(t,e)=>(l(),d("span",ko,N(t.text),1))}}),Uo=O(To,[["__scopeId","data-v-0218c5a7"]]);function ke(n){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ke(n)}function Do(n){return G(1,arguments),n instanceof Date||ke(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function ne(n){G(1,arguments);var t=Object.prototype.toString.call(n);return n instanceof Date||ke(n)==="object"&&t==="[object Date]"?new Date(n.getTime()):typeof n=="number"||t==="[object Number]"?new Date(n):((typeof n=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Lo(n){if(G(1,arguments),!Do(n)&&typeof n!="number")return!1;var t=ne(n);return!isNaN(Number(t))}function me(n){if(n===null||n===!0||n===!1)return NaN;var t=Number(n);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Io(n,t){G(2,arguments);var e=ne(n).getTime(),r=me(t);return new Date(e+r)}function So(n,t){G(2,arguments);var e=me(t);return Io(n,-e)}var Oo=864e5;function Po(n){G(1,arguments);var t=ne(n),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=e-r;return Math.floor(a/Oo)+1}function Te(n){G(1,arguments);var t=1,e=ne(n),r=e.getUTCDay(),a=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function Ut(n){G(1,arguments);var t=ne(n),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var a=Te(r),s=new Date(0);s.setUTCFullYear(e,0,4),s.setUTCHours(0,0,0,0);var i=Te(s);return t.getTime()>=a.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function xo(n){G(1,arguments);var t=Ut(n),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=Te(e);return r}var Eo=6048e5;function Ao(n){G(1,arguments);var t=ne(n),e=Te(t).getTime()-xo(t).getTime();return Math.round(e/Eo)+1}var Ro={};function Oe(){return Ro}function Ue(n,t){var e,r,a,s,i,v,m,h;G(1,arguments);var b=Oe(),w=me((e=(r=(a=(s=t==null?void 0:t.weekStartsOn)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(v=i.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&a!==void 0?a:b.weekStartsOn)!==null&&r!==void 0?r:(m=b.locale)===null||m===void 0||(h=m.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&e!==void 0?e:0);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=ne(n),f=u.getUTCDay(),g=(f<w?7:0)+f-w;return u.setUTCDate(u.getUTCDate()-g),u.setUTCHours(0,0,0,0),u}function Dt(n,t){var e,r,a,s,i,v,m,h;G(1,arguments);var b=ne(n),w=b.getUTCFullYear(),u=Oe(),f=me((e=(r=(a=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(v=i.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&a!==void 0?a:u.firstWeekContainsDate)!==null&&r!==void 0?r:(m=u.locale)===null||m===void 0||(h=m.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(w+1,0,f),g.setUTCHours(0,0,0,0);var o=Ue(g,t),$=new Date(0);$.setUTCFullYear(w,0,f),$.setUTCHours(0,0,0,0);var x=Ue($,t);return b.getTime()>=o.getTime()?w+1:b.getTime()>=x.getTime()?w:w-1}function Bo(n,t){var e,r,a,s,i,v,m,h;G(1,arguments);var b=Oe(),w=me((e=(r=(a=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(v=i.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&a!==void 0?a:b.firstWeekContainsDate)!==null&&r!==void 0?r:(m=b.locale)===null||m===void 0||(h=m.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&e!==void 0?e:1),u=Dt(n,t),f=new Date(0);f.setUTCFullYear(u,0,w),f.setUTCHours(0,0,0,0);var g=Ue(f,t);return g}var No=6048e5;function Fo(n,t){G(1,arguments);var e=ne(n),r=Ue(e,t).getTime()-Bo(e,t).getTime();return Math.round(r/No)+1}function A(n,t){for(var e=n<0?"-":"",r=Math.abs(n).toString();r.length<t;)r="0"+r;return e+r}var Vo={y:function(t,e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return A(e==="yy"?a%100:a,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):A(r+1,2)},d:function(t,e){return A(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return A(t.getUTCHours()%12||12,e.length)},H:function(t,e){return A(t.getUTCHours(),e.length)},m:function(t,e){return A(t.getUTCMinutes(),e.length)},s:function(t,e){return A(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,a=t.getUTCMilliseconds(),s=Math.floor(a*Math.pow(10,r-3));return A(s,e.length)}};const ie=Vo;var ge={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ho={G:function(t,e,r){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var a=t.getUTCFullYear(),s=a>0?a:1-a;return r.ordinalNumber(s,{unit:"year"})}return ie.y(t,e)},Y:function(t,e,r,a){var s=Dt(t,a),i=s>0?s:1-s;if(e==="YY"){var v=i%100;return A(v,2)}return e==="Yo"?r.ordinalNumber(i,{unit:"year"}):A(i,e.length)},R:function(t,e){var r=Ut(t);return A(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return A(r,e.length)},Q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return A(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return A(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,r){var a=t.getUTCMonth();switch(e){case"M":case"MM":return ie.M(t,e);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,r){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return A(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,r,a){var s=Fo(t,a);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):A(s,e.length)},I:function(t,e,r){var a=Ao(t);return e==="Io"?r.ordinalNumber(a,{unit:"week"}):A(a,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):ie.d(t,e)},D:function(t,e,r){var a=Po(t);return e==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):A(a,e.length)},E:function(t,e,r){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,r,a){var s=t.getUTCDay(),i=(s-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return A(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,a){var s=t.getUTCDay(),i=(s-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return A(i,e.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){var a=t.getUTCDay(),s=a===0?7:a;switch(e){case"i":return String(s);case"ii":return A(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,r){var a=t.getUTCHours(),s=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){var a=t.getUTCHours(),s;switch(a===12?s=ge.noon:a===0?s=ge.midnight:s=a/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){var a=t.getUTCHours(),s;switch(a>=17?s=ge.evening:a>=12?s=ge.afternoon:a>=4?s=ge.morning:s=ge.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return ie.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):ie.H(t,e)},K:function(t,e,r){var a=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(a,{unit:"hour"}):A(a,e.length)},k:function(t,e,r){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?r.ordinalNumber(a,{unit:"hour"}):A(a,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):ie.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):ie.s(t,e)},S:function(t,e){return ie.S(t,e)},X:function(t,e,r,a){var s=a._originalDate||t,i=s.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return ut(i);case"XXXX":case"XX":return ce(i);case"XXXXX":case"XXX":default:return ce(i,":")}},x:function(t,e,r,a){var s=a._originalDate||t,i=s.getTimezoneOffset();switch(e){case"x":return ut(i);case"xxxx":case"xx":return ce(i);case"xxxxx":case"xxx":default:return ce(i,":")}},O:function(t,e,r,a){var s=a._originalDate||t,i=s.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+lt(i,":");case"OOOO":default:return"GMT"+ce(i,":")}},z:function(t,e,r,a){var s=a._originalDate||t,i=s.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+lt(i,":");case"zzzz":default:return"GMT"+ce(i,":")}},t:function(t,e,r,a){var s=a._originalDate||t,i=Math.floor(s.getTime()/1e3);return A(i,e.length)},T:function(t,e,r,a){var s=a._originalDate||t,i=s.getTime();return A(i,e.length)}};function lt(n,t){var e=n>0?"-":"+",r=Math.abs(n),a=Math.floor(r/60),s=r%60;if(s===0)return e+String(a);var i=t||"";return e+String(a)+i+A(s,2)}function ut(n,t){if(n%60===0){var e=n>0?"-":"+";return e+A(Math.abs(n)/60,2)}return ce(n,t)}function ce(n,t){var e=t||"",r=n>0?"-":"+",a=Math.abs(n),s=A(Math.floor(a/60),2),i=A(a%60,2);return r+s+e+i}const Wo=Ho;var ct=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Lt=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},zo=function(t,e){var r=t.match(/(P+)(p+)?/)||[],a=r[1],s=r[2];if(!s)return ct(t,e);var i;switch(a){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",ct(a,e)).replace("{{time}}",Lt(s,e))},Yo={p:Lt,P:zo};const qo=Yo;function jo(n){var t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),n.getTime()-t.getTime()}var Go=["D","DD"],Qo=["YY","YYYY"];function Xo(n){return Go.indexOf(n)!==-1}function Ko(n){return Qo.indexOf(n)!==-1}function dt(n,t,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Jo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Zo=function(t,e,r){var a,s=Jo[t];return typeof s=="string"?a=s:e===1?a=s.one:a=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a};const ei=Zo;function Ae(n){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):n.defaultWidth,r=n.formats[e]||n.formats[n.defaultWidth];return r}}var ti={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ni={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ai={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ri={date:Ae({formats:ti,defaultWidth:"full"}),time:Ae({formats:ni,defaultWidth:"full"}),dateTime:Ae({formats:ai,defaultWidth:"full"})};const si=ri;var oi={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ii=function(t,e,r,a){return oi[t]};const li=ii;function ye(n){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",a;if(r==="formatting"&&n.formattingValues){var s=n.defaultFormattingWidth||n.defaultWidth,i=e!=null&&e.width?String(e.width):s;a=n.formattingValues[i]||n.formattingValues[s]}else{var v=n.defaultWidth,m=e!=null&&e.width?String(e.width):n.defaultWidth;a=n.values[m]||n.values[v]}var h=n.argumentCallback?n.argumentCallback(t):t;return a[h]}}var ui={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ci={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},di={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},mi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},hi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},gi={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},fi=function(t,e){var r=Number(t),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},vi={ordinalNumber:fi,era:ye({values:ui,defaultWidth:"wide"}),quarter:ye({values:ci,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ye({values:di,defaultWidth:"wide"}),day:ye({values:mi,defaultWidth:"wide"}),dayPeriod:ye({values:hi,defaultWidth:"wide",formattingValues:gi,defaultFormattingWidth:"wide"})};const pi=vi;function _e(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],s=t.match(a);if(!s)return null;var i=s[0],v=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],m=Array.isArray(v)?_i(v,function(w){return w.test(i)}):yi(v,function(w){return w.test(i)}),h;h=n.valueCallback?n.valueCallback(m):m,h=e.valueCallback?e.valueCallback(h):h;var b=t.slice(i.length);return{value:h,rest:b}}}function yi(n,t){for(var e in n)if(n.hasOwnProperty(e)&&t(n[e]))return e}function _i(n,t){for(var e=0;e<n.length;e++)if(t(n[e]))return e}function bi(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(n.matchPattern);if(!r)return null;var a=r[0],s=t.match(n.parsePattern);if(!s)return null;var i=n.valueCallback?n.valueCallback(s[0]):s[0];i=e.valueCallback?e.valueCallback(i):i;var v=t.slice(a.length);return{value:i,rest:v}}}var wi=/^(\d+)(th|st|nd|rd)?/i,Ci=/\d+/i,Mi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$i={any:[/^b/i,/^(a|c)/i]},ki={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ti={any:[/1/i,/2/i,/3/i,/4/i]},Ui={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Di={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Li={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ii={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Si={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Oi={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pi={ordinalNumber:bi({matchPattern:wi,parsePattern:Ci,valueCallback:function(t){return parseInt(t,10)}}),era:_e({matchPatterns:Mi,defaultMatchWidth:"wide",parsePatterns:$i,defaultParseWidth:"any"}),quarter:_e({matchPatterns:ki,defaultMatchWidth:"wide",parsePatterns:Ti,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:_e({matchPatterns:Ui,defaultMatchWidth:"wide",parsePatterns:Di,defaultParseWidth:"any"}),day:_e({matchPatterns:Li,defaultMatchWidth:"wide",parsePatterns:Ii,defaultParseWidth:"any"}),dayPeriod:_e({matchPatterns:Si,defaultMatchWidth:"any",parsePatterns:Oi,defaultParseWidth:"any"})};const xi=Pi;var Ei={code:"en-US",formatDistance:ei,formatLong:si,formatRelative:li,localize:pi,match:xi,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ai=Ei;var Ri=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Bi=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ni=/^'([^]*?)'?$/,Fi=/''/g,Vi=/[a-zA-Z]/;function Hi(n,t,e){var r,a,s,i,v,m,h,b,w,u,f,g,o,$,x,E,q,F;G(2,arguments);var _=String(t),C=Oe(),y=(r=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:C.locale)!==null&&r!==void 0?r:Ai,D=me((s=(i=(v=(m=e==null?void 0:e.firstWeekContainsDate)!==null&&m!==void 0?m:e==null||(h=e.locale)===null||h===void 0||(b=h.options)===null||b===void 0?void 0:b.firstWeekContainsDate)!==null&&v!==void 0?v:C.firstWeekContainsDate)!==null&&i!==void 0?i:(w=C.locale)===null||w===void 0||(u=w.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(D>=1&&D<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=me((f=(g=(o=($=e==null?void 0:e.weekStartsOn)!==null&&$!==void 0?$:e==null||(x=e.locale)===null||x===void 0||(E=x.options)===null||E===void 0?void 0:E.weekStartsOn)!==null&&o!==void 0?o:C.weekStartsOn)!==null&&g!==void 0?g:(q=C.locale)===null||q===void 0||(F=q.options)===null||F===void 0?void 0:F.weekStartsOn)!==null&&f!==void 0?f:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!y.localize)throw new RangeError("locale must contain localize property");if(!y.formatLong)throw new RangeError("locale must contain formatLong property");var V=ne(n);if(!Lo(V))throw new RangeError("Invalid time value");var j=jo(V),L=So(V,j),c={firstWeekContainsDate:D,weekStartsOn:R,locale:y,_originalDate:V},k=_.match(Bi).map(function(T){var S=T[0];if(S==="p"||S==="P"){var H=qo[S];return H(T,y.formatLong)}return T}).join("").match(Ri).map(function(T){if(T==="''")return"'";var S=T[0];if(S==="'")return Wi(T);var H=Wo[S];if(H)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Ko(T)&&dt(T,t,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Xo(T)&&dt(T,t,String(n)),H(L,T,y.localize,c);if(S.match(Vi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return T}).join("");return k}function Wi(n){var t=n.match(Ni);return t?t[1].replace(Fi,"'"):n}const zi=Ge(Hi,2),Yi={class:"seventv-user-card-container"},qi={class:"seventv-user-card-header"},ji={class:"seventv-user-card-menuactions"},Gi={class:"seventv-user-card-avatar"},Qi=["src"],Xi=["src"],Ki={class:"seventv-user-card-usertag-container"},Ji=["href"],Zi=["data-seventv-paint-id"],el={class:"seventv-user-card-badges"},tl={class:"seventv-user-card-interactive"},nl={class:"seventv-user-card-metrics"},al={key:0},rl={key:1},sl={key:2},ol={key:3},il=["show-tabs"],ll="https://twitch.tv",ul=z({__name:"UserCard",props:{target:{}},emits:["close","mount-handle"],setup(n,{emit:t}){const e=n,r=t,a=ue(),s=sn(a),{identity:i}=Qt(Xt()),v=ze(e.target.id),m=Se(a),h=$n(a),b=Ie(),{t:w}=De(),u=I(),f=I(),g=I(null),o=de({activeTab:"messages",canActorAccessLogs:!1,ban:null,paint:null,targetUser:{id:e.target.id,username:e.target.username,displayName:e.target.displayName,intl:e.target.intl,color:e.target.color,bannerURL:"",avatarURL:"",createdAt:"",isModerator:!1,badges:[],relationship:{followedAt:"",subscription:{isSubscribed:!1,tier:"",months:0}}},stream:{live:!1,game:"",viewCount:0},messageCursors:new WeakMap,timelines:{messages:{},warnings:{},bans:{},timeouts:{},comments:{}},count:{messages:0,warnings:0,bans:0,timeouts:0,comments:0}}),$=te(()=>{var T;if(!o.targetUser.username)return;const c=Ye("avatars").value;if(!((T=c==null?void 0:c.instance)!=null&&T.avatars))return;const k=c.instance.avatars[o.targetUser.username];return k==null?void 0:k.data.user.avatar_url});function x(){return o.timelines[o.activeTab]}async function E(c){var H;if(!o.targetUser||!b.value||o.activeTab!=="messages")return[];const k=c?o.messageCursors.get(c):void 0,T=await b.value.query({query:Un,variables:{channelID:a.id,senderID:o.targetUser.id,cursor:k}}).catch(W=>Promise.reject(W));if(!T||(H=T.errors)!=null&&H.length||!Array.isArray(T.data.logs.messages.edges))return[];const S=[];for(const W of T.data.logs.messages.edges){if(!W.node)continue;const K=Ne(W.node);S.push(K),o.messageCursors.set(K,W.cursor)}return S}async function q(){var H;if(!o.targetUser||!b.value)return;const c=await b.value.query({query:Tn,variables:{channelLogin:a.username,channelID:a.id,targetID:o.targetUser.id}}).catch(W=>Promise.reject(W));if(!c||(H=c.errors)!=null&&H.length||!c.data.channelUser)return;o.count.messages=c.data.viewerCardModLogs.messages.count??0,o.count.warnings=c.data.viewerCardModLogs.warnings.count??0,o.count.bans=c.data.viewerCardModLogs.bans.count??0,o.count.timeouts=c.data.viewerCardModLogs.timeouts.count??0,o.count.comments=c.data.viewerCardModLogs.comments.edges.length??0,o.ban=c.data.banStatus;const k=c.data.viewerCardModLogs.timeouts.edges,T=c.data.viewerCardModLogs.bans.edges,S=c.data.viewerCardModLogs.warnings.edges;for(const[W,K]of[["timeouts",k],["bans",T],["warnings",S]]){const ae=[];for(const oe of K){const J=new Je(oe.node.id).setComponent(Uo,{text:oe.node.localizedLabel.localizedStringFragments.map(he=>"text"in he.token?he.token.text:he.token.login).join("")});J.setTimestamp(Date.parse(oe.node.timestamp)),ae.push(J)}y(ae,W)}for(const W of c.data.viewerCardModLogs.comments.edges)F(W.node)}function F(c){const k=new Je(c.id);k.setAuthor({id:c.author.id,username:c.author.login,displayName:c.author.displayName,color:c.author.chatColor,intl:c.author.login!==c.author.displayName.toLowerCase()}),k.setTimestamp(Date.parse(c.timestamp)),k.body=c.text,y([k],"comments")}function _(){if(!u.value||!u.value.container||u.value.container.scrollTop>0)return;const k=C(new Date(Math.min(...Object.keys(o.timelines.messages).map(H=>Date.parse(H)||1/0))));if(!k)return;const T=o.timelines.messages[k];if(!T)return;const S=T[0];S&&(D(1),E(S).then(H=>{H.length&&y(H)}).catch(H=>{le.error("Failed to fetch more messages",H)}))}function C(c){return`${c.getFullYear()}-${c.getMonth()+1}-${c.getDate()}`}function y(c,k="messages"){const T=o.timelines[k],S=s.find(W=>!!W.author&&W.author.id===e.target.id,!0),H=new Set(S.map(W=>W.id));for(const W of c){if(!W.timestamp)continue;const K=H.has(W.id)?"LIVE":C(new Date(W.timestamp));if(!T[K])T[K]=[];else if(T[K].find(ae=>ae.id===W.id))continue;T[K].unshift(W),T[K].sort((ae,oe)=>ae.timestamp-oe.timestamp)}}function D(c){!u.value||!u.value.container||u.value.container.scrollTo({top:c})}function R(c){!o.targetUser.username||!m.openViewerCard(c,o.targetUser.username,"")||r("close")}function V(){if(!o.targetUser.username)return;let c=!1;o.targetUser.username in h.getAllUsernameHighlights()?(h.remove(o.targetUser.username),c=!0):(h.define(o.targetUser.username,{pattern:o.targetUser.username,label:"Messages by "+o.targetUser.username,color:"#8803fc",flashTitle:!1,username:!0},!0),c=!0),c&&h.save()}function j(){return`${ll}/${e.target.username}`}function L(c){return c?zi("PPP")(new Date(c)):""}return fe(async()=>{if(b.value){b.value.query({query:kn,variables:{channelID:a.id,channelIDStr:a.id,channelLogin:a.username,giftRecipientLogin:e.target.username,withStandardGifting:!1}}).then(async c=>{var k,T,S,H,W,K,ae,oe;if(c.data.channel&&(o.canActorAccessLogs=((k=c.data.channel.moderationSettings)==null?void 0:k.canAccessViewerCardModLogs)??!1),c.data.targetUser){if(o.targetUser.id=c.data.targetUser.id,o.targetUser.username=c.data.targetUser.login,o.targetUser.displayName=c.data.targetUser.displayName,o.targetUser.intl=c.data.targetUser.login!==c.data.targetUser.displayName.toLowerCase(),o.targetUser.avatarURL=c.data.targetUser.profileImageURL,o.targetUser.bannerURL=c.data.targetUser.bannerImageURL??"",o.targetUser.color=c.data.targetUser.chatColor??e.target.color,o.targetUser.relationship.followedAt=L((T=c.data.targetUser.relationship)==null?void 0:T.followedAt),o.targetUser.createdAt=L(c.data.targetUser.createdAt),o.targetUser.relationship.subscription.months=((H=(S=c.data.targetUser.relationship)==null?void 0:S.cumulativeTenure)==null?void 0:H.months)??0,(W=c.data.targetUser.relationship)!=null&&W.subscriptionBenefit&&(o.targetUser.relationship.subscription.isSubscribed=!0,o.targetUser.relationship.subscription.tier=(K=c.data.targetUser.relationship)==null?void 0:K.subscriptionBenefit.tier),c.data.targetUser.stream&&(o.stream.live=!0,o.stream.game=((ae=c.data.targetUser.stream.game)==null?void 0:ae.displayName)??"",o.stream.viewCount=c.data.targetUser.stream.viewersCount),o.targetUser.badges.length=0,o.targetUser.isModerator=c.data.targetUser.isModerator||c.data.targetUser.id===a.id,c.data.channelViewer&&((oe=c.data.channelViewer.earnedBadges)!=null&&oe.length))for(let J=0;J<c.data.channelViewer.earnedBadges.length;J++){const he=Zt(c.data.channelViewer.earnedBadges[J]);he&&(o.targetUser.badges[J]=he)}for(const J of v.badges.values())o.targetUser.badges.push(J)}o.targetUser&&(o.canActorAccessLogs||i.value&&o.targetUser.id===i.value.id)&&(y(await E().catch(J=>le.error("failed to fetch message logs",J))??[]),q().catch(J=>le.error("failed to fetch moderator data",J)))}).catch(c=>le.error("failed to query user card",c));for(const c of v.paints.values()){o.paint=c;break}}}),re(()=>[o.targetUser.bannerURL,o.targetUser.color],([c,k])=>{g.value&&(g.value.style.setProperty("--seventv-user-card-banner-url",`url(${c})`),g.value.style.setProperty("--seventv-user-card-color",k))}),ht(async()=>{f.value&&r("mount-handle",f.value),y(s.find(c=>!!c.author&&c.author.id===e.target.id,!0)),Le(()=>{!u.value||!u.value.container||D(u.value.container.scrollHeight)})}),(c,k)=>{const T=pe("tooltip");return l(),d("main",Yi,[p("div",{ref_key:"cardRef",ref:g,class:"seventv-user-card"},[p("div",qi,[p("div",{ref_key:"dragHandle",ref:f,class:"seventv-user-card-identity"},[p("div",ji,[o.targetUser.username in M(h).getAllUsernameHighlights()?X((l(),B(Fn,{key:0,onClick:V},null,512)),[[T,M(w)("user_card.stop_highlight")]]):X((l(),B(xn,{key:1,onClick:V},null,512)),[[T,M(w)("user_card.highlight")]]),X(P(Kt,{onClick:R},null,512),[[T,M(w)("user_card.native")]]),P(Jt,{class:"close-button",onClick:k[0]||(k[0]=S=>r("close"))})]),p("div",Gi,[$.value?(l(),d("img",{key:0,src:$.value},null,8,Qi)):o.targetUser.avatarURL?(l(),d("img",{key:1,src:o.targetUser.avatarURL},null,8,Xi)):U("",!0)]),p("div",Ki,[p("a",{href:j(),target:"_blank",class:"seventv-user-card-usertag"},[P(we,{user:o.targetUser,"hide-badges":!0,clickable:!1},null,8,["user"])],8,Ji)]),o.paint?(l(),d("span",{key:0,class:"seventv-user-card-paint seventv-painted-content seventv-paint","data-seventv-paint-id":o.paint.id},[p("p",null,N(o.paint.data.name),1)],8,Zi)):U("",!0),p("div",el,[(l(!0),d(Y,null,se(o.targetUser.badges,S=>(l(),B(Me,{key:S.id,badge:S,alt:S.data.tooltip,type:"app"},null,8,["badge","alt"]))),128))])],512),p("div",tl,[p("div",nl,[o.targetUser.createdAt?(l(),d("p",al,[P(qn),Z(" "+N(M(w)("user_card.account_created_date",{date:o.targetUser.createdAt})),1)])):U("",!0),o.targetUser.relationship.followedAt?(l(),d("p",rl,[P(Jn),Z(" "+N(M(w)("user_card.following_since_date",{date:o.targetUser.relationship.followedAt})),1)])):U("",!0),o.targetUser.relationship.subscription.isSubscribed?(l(),d("p",sl,[P(Ze),Z(" "+N(o.targetUser.relationship.subscription.months?`${M(w)("user_card.subscription_tier",{tier:o.targetUser.relationship.subscription.tier[0]})} -
									  ${M(w)("user_card.subscription_length",{length:o.targetUser.relationship.subscription.months})}`:`${M(w)("user_card.hidden_subscription_status")}`),1)])):o.targetUser.relationship.subscription.months?(l(),d("p",ol,[P(Ze),Z(" "+N(M(w)("user_card.previously_subscription_length",{length:o.targetUser.relationship.subscription.months})),1)])):U("",!0)]),P(na),M(a).actor.roles.has("MODERATOR")&&!o.targetUser.isModerator||M(a).actor.roles.has("BROADCASTER")?(l(),B(bo,{key:0,target:o.targetUser,ban:o.ban,"is-moderator":o.targetUser.isModerator,onVictimBanned:k[1]||(k[1]=S=>o.ban=S),onVictimUnbanned:k[2]||(k[2]=S=>o.ban=null),onVictimModded:k[3]||(k[3]=S=>o.targetUser.isModerator=!0),onVictimUnmodded:k[4]||(k[4]=S=>o.targetUser.isModerator=!1)},null,8,["target","ban","is-moderator"])):U("",!0)])]),p("div",{class:"seventv-user-card-data","show-tabs":M(a).actor.roles.has("MODERATOR")},[M(a).actor.roles.has("MODERATOR")?(l(),B($o,{key:0,"active-tab":o.activeTab,"message-count":o.count.messages,"warning-count":o.count.warnings,"ban-count":o.count.bans,"timeout-count":o.count.timeouts,"comment-count":o.count.comments,onSwitch:k[5]||(k[5]=S=>o.activeTab=S)},null,8,["active-tab","message-count","warning-count","ban-count","timeout-count","comment-count"])):U("",!0),P(Mt,{ref_key:"scroller",ref:u,onContainerScroll:_},{default:ve(()=>[P(Ks,{"active-tab":o.activeTab,target:o.targetUser,timeline:x(),scroller:u.value,onAddModComment:F},null,8,["active-tab","target","timeline","scroller"])]),_:1},512)],8,il)],512)])}}}),cl=O(ul,[["__scopeId","data-v-48c304bc"]]),dl={key:0,class:"seventv-chat-user-badge-list"},ml={key:0},hl={key:1},gl=z({__name:"UserTag",props:{user:{},sourceData:{},msgId:{},isMention:{type:Boolean},hideAt:{type:Boolean},hideBadges:{type:Boolean},clickable:{type:Boolean,default:!0},badges:{},badgeData:{}},emits:["open-native-card"],setup(n,{emit:t}){const e=n,r=t,a=ue(),s=$t(a),i=ze(e.user.id),v=Q("vanity.nametag_paints"),m=Q("vanity.7tv_Badges"),h=Q("chat.user_card"),b=I([]),w=pt(s,"twitchBadgeSets"),u=Q("chat.colored_mentions"),f=I(),g=I(!1),o=I(),$=I(null),x=I([]),E=te(()=>!v.value||!$.value?!1:e.isMention?u.value===2:!0),q=te(()=>!e.isMention||u.value===1);function F(y){if(e.clickable){if(!h.value){r("open-native-card",y);return}g.value=!g.value}}fe(()=>{var y,D;if(e.badges&&w.value&&!b.value.length)for(const[R,V]of Object.entries(e.badges)){const j=R,L=V;for(const c of[((y=e.sourceData)==null?void 0:y.badges.channelsBySet)??w.value.channelsBySet,w.value.globalsBySet]){if(!c)continue;const k=c.get(j);if(!k)continue;const T=k.get(L);if(T){b.value.push({...T,data:(D=e.badgeData)==null?void 0:D[T.setID]});break}}}});const _=Date.now(),C=re([()=>i.paints,()=>i.badges],([y,D])=>{if(e.msgId&&e.user.lastMsgId&&e.msgId!==e.user.lastMsgId&&Date.now()-_>5e3){Le(()=>C());return}$.value=y&&y.size?y.values().next().value:null,x.value=D&&D.size?[...D.values()]:[]},{immediate:!0});return(y,D)=>{var j;const R=pe("cosmetic-paint"),V=pe("tooltip");return l(),d(Y,null,[y.user&&y.user.displayName?(l(),d("div",{key:0,ref_key:"tagRef",ref:f,class:"seventv-chat-user",style:$e(q.value?{color:y.user.color}:{})},[!y.hideBadges&&(b.value.length&&((j=w.value)!=null&&j.count)||M(i).badges.size||y.sourceData)?(l(),d("span",dl,[y.sourceData?(l(),B(Me,{key:y.sourceData.login,badge:y.sourceData,alt:y.sourceData.displayName,type:"picture"},null,8,["badge","alt"])):U("",!0),(l(!0),d(Y,null,se(b.value,L=>(l(),B(Me,{key:L.id,badge:L,alt:L.title,type:"twitch",onClick:D[0]||(D[0]=c=>F(c))},null,8,["badge","alt"]))),128)),M(m)?(l(!0),d(Y,{key:1},se(x.value,L=>(l(),B(Me,{key:L.id,badge:L,alt:L.data.tooltip,type:"app"},null,8,["badge","alt"]))),128)):U("",!0)])):U("",!0),X((l(),d("span",{class:"seventv-chat-user-username",onClick:D[1]||(D[1]=L=>F(L))},[X((l(),d("span",null,[y.isMention&&!y.hideAt?(l(),d("span",ml,"@")):U("",!0),p("span",null,N(y.user.displayName),1),y.user.intl?(l(),d("span",hl," ("+N(y.user.username)+")",1)):U("",!0)])),[[R,E.value?$.value.id:null]])])),[[V,E.value?`Paint: ${$.value.data.name}`:""]])],4)):U("",!0),g.value&&f.value?(l(),B(Be,{key:1,to:"#seventv-float-context"},[P(gn,{class:"seventv-user-card-float",handle:o.value,"initial-anchor":f.value,"initial-middleware":[M(Re)({mainAxis:!0,crossAxis:!0}),M(Ft)()],once:!0},{default:ve(()=>[P(cl,{target:e.user,onClose:D[2]||(D[2]=L=>g.value=!1),onMountHandle:D[3]||(D[3]=L=>o.value=L)},null,8,["target"])]),_:1},8,["handle","initial-anchor","initial-middleware"])])):U("",!0)],64)}}}),we=O(gl,[["__scopeId","data-v-9493ee21"]]);export{za as A,Me as B,xl as I,Ve as U,mo as W,Vs as _,aa as a,ra as b,qe as c,$n as d,Uo as e,Se as f,ne as g,me as h,ke as i,jo as j,Ge as k,we as l,El as m,Fa as n,Ai as o,Oe as p,G as r,ot as t,$t as u};
