import{d as X,h as W,i as H,e as K}from"./seventv.Transform.3.1.27.js";import{l as x,u as V,h as ee,_ as te}from"./seventv.GearsIcon.3.1.27.js";import{r as m,e as I,f as R,w as oe,a as A,x as s,l as a,m as i,G as f,q as T,D as r,Q as se,R as ie,_ as z,u as k,O as N,B as D,I as M,F as O,E as Q,aA as ae,o as ne,t as B,C as re,P as me,aI as le,Y as de}from"./seventv.index.3.1.27.js";import{F as S,L as ce,C as j,M as q,t as ue}from"./seventv.useCosmetics.3.1.27.js";import{O as pe}from"./seventv.OpenLinkIcon.3.1.27.js";import{b as fe}from"./seventv.useChatEmotes.3.1.27.js";import{U as ge}from"./seventv.UiFloating.3.1.27.js";const he=m(null);function ye(){return he}const Z=S`
	fragment badge on Badge {
		id
		setID
		version
		title
		image1x: imageURL(size: NORMAL)
		image2x: imageURL(size: DOUBLE)
		image4x: imageURL(size: QUADRUPLE)
		clickAction
		clickURL
	}
`,ve=S`
	fragment messageSender on User {
		id
		login
		chatColor
		displayName
		displayBadges(channelID: $channelID) {
			...badge
		}
		__typename
	}

	${Z}
`,$t=S`
	fragment messageFields on Message {
		id
		deletedAt
		sentAt
		content {
			...messageContent
		}
		sender {
			...messageSender
		}
		__typename
	}

	fragment messageContent on MessageContent {
		text
		fragments {
			...messageParticle
		}
		__typename
	}
	fragment messageParticle on MessageFragment {
		text
		content {
			... on CheermoteToken {
				...cheermoteFragment
			}
			... on Emote {
				...emoteFragment
			}
			... on User {
				...mentionFragment
			}
			... on AutoMod {
				...automodFragment
			}
			__typename
		}
		__typename
	}
	fragment cheermoteFragment on CheermoteToken {
		bitsAmount
		prefix
		tier
		__typename
	}
	fragment emoteFragment on Emote {
		emoteID: id
		setID
		token
		__typename
	}
	fragment mentionFragment on User {
		id
		login
		displayName
		__typename
	}
	fragment automodFragment on AutoMod {
		topics {
			type
			weight
			__typename
		}
		__typename
	}

	${ve}
	${Z}
`,_e=S`
	fragment subSummary on SubscriptionSummary {
		id
		name
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`,J=S`
	fragment subProductOfferFragment on Offer {
		id
		tplr
		platform
		eligibility {
			benefitsStartAt
			isEligible
		}
		tagBindings {
			key
			value
		}
		giftType
		listing {
			chargeModel {
				internal {
					previewPrice {
						id
						currency
						exponent
						price
						total
						discount {
							price
							total
						}
					}
					plan {
						interval {
							duration
							unit
						}
						renewalPolicy
					}
				}
			}
		}
		promotion {
			id
			name
			promoDisplay {
				discountPercent
				discountType
			}
			eligibilityFilters {
				value
			}
			priority
			promoType
			endAt
		}
		quantity {
			min
			max
		}
	}
`,be=S`
	fragment subProductOfferWithPromotions on Offer {
		id
		tplr
		platform
		eligibility {
			benefitsStartAt
			isEligible
		}
		tagBindings {
			key
			value
		}
		giftType
		listing {
			chargeModel {
				internal {
					previewPrice {
						id
						currency
						exponent
						price
						total
						discount {
							price
							total
						}
					}
					plan {
						interval {
							duration
							unit
						}
						renewalPolicy
					}
				}
			}
		}
		promotion {
			id
			name
			promoDisplay {
				discountPercent
				discountType
			}
			eligibilityFilters {
				value
			}
			priority
			promoType
			endAt
		}
		promotions {
			id
			name
			promoDisplay {
				discountPercent
				discountType
			}
			eligibilityFilters {
				value
			}
			priority
			promoType
			endAt
			quantity {
				min
				max
			}
		}
		quantity {
			min
			max
		}
	}
`,Et=S`
	fragment subscriptionProduct on SubscriptionProduct {
		id
		price
		url
		emoteSetID
		displayName
		name
		tier
		type
		hasAdFree
		emotes {
			...subscriptionProductEmote
		}
		emoteModifiers {
			...subscriptionProductEmoteModifier
		}
		interval {
			unit
		}
		self {
			canGiftInChannel
		}
		offers {
			...subProductOfferFragment
		}
		gifting {
			...subStandardGiftingFragment
			...subCommunityGiftingFragment
		}
	}

	fragment subscriptionProductEmote on Emote {
		id
		setID
		token
		assetType
	}

	fragment subscriptionProductEmoteModifier on EmoteModifier {
		code
		name
	}

	fragment subStandardGiftingFragment on SubscriptionGifting {
		standard(recipientLogin: $giftRecipientLogin) @include(if: $withStandardGifting) {
			offer {
				...subProductOfferFragment
			}
		}
	}

	fragment subCommunityGiftingFragment on SubscriptionGifting {
		community {
			offer {
				...subProductOfferWithPromotions
			}
		}
	}

	${J}
	${be}
`,St=S`
	fragment modComment on ModLogsComment {
		id
		timestamp
		text
		author {
			...modCommentUser
		}
		channel {
			...modCommentUser
		}
		target {
			...modCommentUser
		}
	}

	fragment modCommentUser on User {
		id
		login
		displayName
		chatColor
	}
`,we=ce`
	query EmoteCard($emoteID: ID!, $artistEnabled: Boolean!) {
		emote(id: $emoteID) {
			id
			type
			subscriptionTier
			token
			setID
			artist @include(if: $artistEnabled) {
				id
				login
				displayName
				profileImageURL(width: 70)
			}
			owner {
				id
				login
				displayName
				profileImageURL(width: 70)
				channel {
					id
					localEmoteSets {
						id
						emotes {
							id
							token
						}
					}
				}
				stream {
					id
					type
				}
				self {
					follower {
						followedAt
					}
					subscriptionBenefit {
						id
						tier
					}
				}
				subscriptionProducts {
					id
					displayName
					tier
					name
					url
					offers {
						...subProductOfferFragment
					}
					emotes {
						id
						token
					}
				}
			}
			subscriptionSummaries {
				...subSummary
			}
			bitsBadgeTierSummary {
				threshold
				self {
					isUnlocked
					numberOfBitsUntilUnlock
				}
			}
			type
		}
	}

	${J}
	${_e}
`,G=y=>(se("data-v-e72d57be"),y=y(),ie(),y),ke={class:"seventv-emote-card-container"},$e={class:"seventv-emote-card"},Ee={class:"seventv-emote-card-image"},Se=["srcset"],Fe={class:"seventv-emote-card-display"},Ce={class:"seventv-emote-card-title"},Pe={key:0,class:"seventv-emote-card-title-link"},Ue=["href"],Le={class:"seventv-emote-card-subtitle"},Te=["href"],Ie=["src"],Re={key:1,class:"seventv-emote-card-data seventv-emote-card-artist"},Ae=G(()=>i("p",null,"Made by",-1)),Me=["href"],Be=["src"],Ne={key:2,class:"seventv-emote-card-data seventv-emote-card-actor"},De=G(()=>i("p",null,"Added by",-1)),Oe={class:"seventv-emote-card-user"},ze=["src"],Ge={key:3,class:"seventv-emote-card-data"},je=G(()=>i("p",null,"Added on",-1)),qe=I({__name:"EmoteCard",props:{emote:{},size:{}},setup(y){var $;const o=y,u=m((($=o.emote.data)==null?void 0:$.host)??null),F=m(""),d=R(b()),c=R(b()),n=R(b()),L=m(""),C=m(""),g=m(null);function b(){return{id:"",username:"",displayName:"",avatarURL:"",url:""}}return oe(async()=>{var p,v,P,E,U;if(o.emote.provider==="PLATFORM"){const h=ye();if(!h.value)return;const t=await h.value.query({query:we,variables:{emoteID:o.emote.id,artistEnabled:!0}}).catch(l=>x.error("failed to fetch emote card",l));if(!t)return;const{emote:e}=t.data;if(!e)return;const _=X(e);u.value=_.host,e.owner&&(d.id=e.owner.id,d.username=e.owner.login,d.displayName=e.owner.displayName,d.avatarURL=e.owner.profileImageURL,d.url=`https://twitch.tv/${(p=e.owner)==null?void 0:p.login}`),e.artist&&(n.id=e.artist.id,n.username=e.artist.login,n.displayName=e.artist.displayName,n.avatarURL=e.artist.profileImageURL,n.url=`https://twitch.tv/${(v=e.artist)==null?void 0:v.login}`),L.value=((P=e.subscriptionTier)==null?void 0:P.split("_").join(" "))??e.type}else if(o.emote.provider==="7TV"){const{result:h}=j(q,{id:o.emote.actor_id??""},()=>({enabled:!!o.emote.actor_id})),{result:t}=j(q,{id:((U=(E=o.emote.data)==null?void 0:E.owner)==null?void 0:U.id)??""},()=>{var e,_;return{enabled:!!((_=(e=o.emote.data)==null?void 0:e.owner)!=null&&_.id)}});A(h,e=>{e!=null&&e.user&&(c.id=e==null?void 0:e.user.id,c.username=e==null?void 0:e.user.username,c.displayName=e==null?void 0:e.user.display_name,c.avatarURL=e==null?void 0:e.user.avatar_url)},{immediate:!0}),A(t,e=>{e!=null&&e.user&&(n.id=e==null?void 0:e.user.id,n.username=e==null?void 0:e.user.username,n.displayName=e==null?void 0:e.user.display_name,n.avatarURL=e==null?void 0:e.user.avatar_url,n.url=`https://7tv.app/users/${e==null?void 0:e.user.id}`)},{immediate:!0}),C.value=new Date(o.emote.timestamp??0).toLocaleDateString(),g.value=`//7tv.app/emotes/${o.emote.id}`}else o.emote.provider==="BTTV"?g.value=`//betterttv.com/emotes/${o.emote.id}`:o.emote.provider==="FFZ"?g.value=`//frankerfacez.com/emoticon/${o.emote.id}`:o.emote.provider==="EMOJI"&&(g.value="")}),A(u,p=>{!p||!p.files.length||(F.value=W(o.size[0],o.size[1],p,o.emote.provider))},{immediate:!0}),(p,v)=>(s(),a("main",ke,[i("div",$e,[i("div",Ee,[i("img",{srcset:F.value,style:{}},null,8,Se)]),i("div",Fe,[i("div",null,[i("h3",Ce,[i("span",null,f(p.emote.name),1),g.value?(s(),a("span",Pe,[i("a",{href:g.value,target:"_blank"},[T(pe)],8,Ue)])):r("",!0)]),i("p",Le,f(L.value),1),d.id?(s(),a("a",{key:0,class:"seventv-emote-card-user",href:d.url,target:"_blank"},[i("img",{src:d.avatarURL},null,8,Ie),i("span",null,f(d.displayName),1)],8,Te)):r("",!0),n.id?(s(),a("div",Re,[Ae,n.id?(s(),a("a",{key:0,class:"seventv-emote-card-user",href:n.url,target:"_blank"},[i("img",{src:n.avatarURL},null,8,Be),i("span",null,f(n.displayName),1)],8,Me)):r("",!0)])):r("",!0),c.id?(s(),a("div",Ne,[De,i("p",Oe,[i("img",{src:c.avatarURL},null,8,ze),i("span",null,f(c.displayName),1)])])):r("",!0),C.value?(s(),a("div",Ge,[je,i("span",null,f(C.value),1)])):r("",!0)])])])]))}}),We=z(qe,[["__scopeId","data-v-e72d57be"]]),He={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},Ve=["xlink:href"],Y=I({__name:"SingleEmoji",props:{id:{}},setup(y){return(o,u)=>(s(),a("svg",He,[i("use",{"xlink:href":"#"+o.id},null,8,Ve)]))}}),Qe={key:0,ref:"tooltip",class:"seventv-tooltip-compact","tooltip-type":"emote"},Ze={key:1,ref:"tooltip",class:"seventv-tooltip","tooltip-type":"emote"},Je=["src","srcset","alt"],Ye={class:"details"},Xe={class:"emote-name"},Ke={key:2,class:"alias-label"},xe={key:3,class:"creator-label"},et={class:"scope-labels"},tt={key:0,class:"label-global"},ot={key:1,class:"label-subscriber"},st={key:2,class:"label-channel"},it={key:3,class:"label-sub-feature"},at={key:4,class:"label-sub-feature"},nt={key:4},rt={key:5,class:"divider"},mt={key:6,class:"zero-width-label"},lt=["srcset"],dt=I({__name:"EmoteTooltip",props:{emote:{},initSrc:{},overlaid:{},height:{},width:{}},setup(y){var E,U,h;const o=y,u=V("ui.compact_tooltips"),F=m("");o.emote&&o.emote.data&&ee(()=>{F.value=W(o.height,o.width,o.emote.data.host,o.emote.provider)},90);const d=m(o.overlaid??{}),c=m(Object.keys(d.value).length>0),n=`${o.width*3}px`,L=`${o.height*3}px`,C=o.emote.scope==="GLOBAL",g=o.emote.scope==="SUB",b=o.emote.scope==="CHANNEL",$=o.emote.scope==="PERSONAL",p=(o.emote.flags||0)!==0,v=m(null);if(o.emote.unicode){const{emojiByCode:t}=fe();v.value=t.get(o.emote.unicode)??null}const P=m("inherit");return(h=(U=(E=o.emote.data)==null?void 0:E.owner)==null?void 0:U.style)!=null&&h.color&&(P.value=ue(o.emote.data.owner.style.color)),(t,e)=>{var _,l;return k(u)?(s(),a("div",Qe,[i("p",null,f(t.emote.name),1)],512)):(s(),a("div",Ze,[t.emote.provider!=="EMOJI"?(s(),a("img",{key:0,ref:"imgRef",class:"tooltip-emote",src:t.initSrc,srcset:F.value,alt:t.emote.name,sizes:"auto",style:N({width:n,height:L})},null,12,Je)):(s(),D(Y,{key:1,id:t.emote.id,class:"tooltip-emoji"},null,8,["id"])),i("div",Ye,[i("h3",Xe,f(t.emote.name),1),T(te,{class:"logo",provider:t.emote.provider},null,8,["provider"])]),t.emote.data&&t.emote.data.name!==t.emote.name?(s(),a("div",Ke,[M(" aka "),i("span",null,f((_=t.emote.data)==null?void 0:_.name),1)])):r("",!0),(l=t.emote.data)!=null&&l.owner?(s(),a("div",xe,[M(" by "),i("span",{class:"creator-name",style:N({color:P.value})},f(t.emote.data.owner.display_name),5)])):r("",!0),i("div",et,[C?(s(),a("div",tt,"Global Emote")):r("",!0),g?(s(),a("div",ot,"Subscriber Emote")):r("",!0),b?(s(),a("div",st,"Channel Emote")):r("",!0),$?(s(),a("div",it,"Personal Emote")):r("",!0),p?(s(),a("div",at,"Zero-Width")):r("",!0)]),v.value?(s(),a("div",nt,[i("div",null,"Emoji - "+f(v.value.group),1)])):r("",!0),c.value?(s(),a("div",rt)):r("",!0),c.value?(s(),a("div",mt,[(s(!0),a(O,null,Q(d.value,w=>(s(),a("div",{key:w.id,class:"zero-width-emote"},[w.data?(s(),a("img",{key:0,class:"overlaid-emote-icon",srcset:w.data.host.srcset??k(H)(w.data.host,w.provider)},null,8,lt)):r("",!0),M(" — "),i("span",null,f(w.name),1)]))),128))])):r("",!0)],512))}}}),ct=z(dt,[["__scopeId","data-v-03d06597"]]),ut=["ratio"],pt=["srcset","alt"],ft=["srcset","alt"],gt=I({__name:"Emote",props:{emote:{},clickable:{type:Boolean},format:{},overlaid:{},unload:{type:Boolean,default:!1},scale:{default:1},withBorder:{type:Boolean,default:!1}},emits:["emote-click"],setup(y,{emit:o}){const u=y,F=o,d=V("general.blur_unlisted_emotes"),c=m(),n=m(!1),L=m([0,0]),C=m(),g=m(""),b=m(0),$=m(0),p=t=>{if(!(t.target instanceof HTMLImageElement))return;const e=t.target;b.value=Math.round(e.naturalWidth/u.scale),$.value=Math.round(e.naturalHeight/u.scale),g.value=e.currentSrc,C.value=e};function v(t){var e;return(e=t.data)!=null&&e.host?u.scale!=1||!t.data.host.srcset?H(t.data.host,t.provider,void 0,2,u.scale):t.data.host.srcset:""}function P(t){u.clickable&&(n.value=!0,L.value=[t.clientX,t.clientY])}function E(){U(c.value)}const{show:U,hide:h}=ae(ct,{emote:u.emote,initSrc:g,overlaid:u.overlaid,width:b,height:$});return ne(h),(t,e)=>{var _;return s(),a("div",{ref_key:"boxRef",ref:c,class:B(["seventv-emote-box",{"with-border":t.withBorder}]),ratio:k(K)(t.emote),onMouseenter:E,onMouseleave:e[2]||(e[2]=l=>k(h)()),onClick:e[3]||(e[3]=l=>[P(l),F("emote-click",l,t.emote)])},[!t.emote.unicode&&t.emote.data&&t.emote.data.host?(s(),a("img",{key:0,class:B(["seventv-chat-emote",{blur:k(d)&&((_=t.emote.data)==null?void 0:_.listed)===!1}]),srcset:t.unload?"":v(t.emote),alt:t.emote.name,loading:"lazy",decoding:"async",onLoad:p},null,42,pt)):!t.unload&&t.emote.id?(s(),D(Y,{key:1,id:t.emote.id,alt:t.emote.name,class:"seventv-chat-emote seventv-emoji",style:N({width:`${t.scale*2}rem`,height:`${t.scale*2}rem`}),onMouseenter:E,onMouseleave:e[0]||(e[0]=l=>k(h)())},null,8,["id","alt","style"])):r("",!0),(s(!0),a(O,null,Q(t.overlaid,l=>{var w;return s(),a(O,{key:l.id},[l.data&&l.data.host?(s(),a("img",{key:0,class:B(["seventv-chat-emote zero-width-emote",{blur:k(d)&&((w=l.data)==null?void 0:w.listed)===!1}]),srcset:v(l),alt:" "+l.name},null,10,ft)):r("",!0)],64)}),128)),n.value?(s(),D(de,{key:2,to:"#seventv-message-container"},[T(ge,{class:"seventv-emote-card-float",anchor:c.value,placement:"right-end",middleware:[k(me)({mainAxis:!0,crossAxis:!0}),k(le)()],once:!0,"emit-clickout":!0,onClickout:e[1]||(e[1]=l=>n.value=!1)},{default:re(()=>[T(We,{emote:t.emote,size:[b.value,$.value]},null,8,["emote","size"])]),_:1},8,["anchor","middleware"])])):r("",!0)],42,ut)}}}),Ft=z(gt,[["__scopeId","data-v-2c6ca88a"]]);export{Ft as E,Y as _,Z as a,St as b,$t as c,Et as t,ye as u};
