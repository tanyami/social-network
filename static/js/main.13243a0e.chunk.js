(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{131:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3ywhx"}},133:function(e,t,n){e.exports={item:"Post_item__2eNT3"}},16:function(e,t,n){e.exports={navbar:"Navbar_navbar__3TnID",item:"Navbar_item__1UeuY",active:"Navbar_active__1PTXS"}},163:function(e,t,n){},248:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(66),c=n.n(a),o=(n(163),n(26)),i=n(27),u=n(29),l=n(28),j=n(10),d=n(11),b=n(13),p=n(12),h=n(8),f=n.n(h),O=n(15),g=n(34),v=n(3),x=n(25),m=n(127).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"082f3746-3b22-4405-9cb6-b267406e5fe0_"}}),w={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return m.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return m.post("follow/".concat(e))},unfollow:function(e){return m.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsoled method. Please use profileAPI object"),P.getProfile(e)}},P={getProfile:function(e){return m.get("profile/"+e)},getStatus:function(e){return m.get("profile/status/"+e)},updateStatus:function(e){return m.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),m.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return m.put("profile",e)}},A=function(){return m.get("auth/me")},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return m.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},y=function(){return m.delete("auth/login")},C=function(){return m.get("security/get-captcha-url")},I="ADD-POST",k="SET_USER_PROFILE",N="SET_STATUS",E="DELETE_POST",U="SAVE_PHOTO_SUCCESS",T={posts:[{id:1,src:"",message:"Hi",likesCount:12},{id:2,src:"",message:"It is me",likesCount:2},{id:3,src:"",message:"XOXOXO",likesCount:52},{id:4,src:"",message:"123456789",likesCount:5}],profile:null,status:""},B=function(e){return{type:N,status:e}},R=function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getProfile(e);case 2:r=t.sent,n((s=r.data,{type:k,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var n={id:5,src:"",message:t.newPostText,likesCount:0};return Object(v.a)(Object(v.a)({},e),{},{posts:[].concat(Object(g.a)(e.posts),[n]),newPostText:""});case N:return Object(v.a)(Object(v.a)({},e),{},{status:t.status});case k:return Object(v.a)(Object(v.a)({},e),{},{profile:t.profile});case E:return Object(v.a)(Object(v.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case U:return Object(v.a)(Object(v.a)({},e),{},{profile:Object(v.a)(Object(v.a)({},e.profile),{},{photos:t.photos})});default:return e}},V="SEND-MESSAGE",K={dialogs:[{id:1,name:"Mama"},{id:2,name:"Papa"},{id:3,name:"Polya"},{id:4,name:"Anya"},{id:5,name:"Valya"},{id:6,name:"Lyonya"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"How are you?"}]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:var n=t.newMessageText;return Object(v.a)(Object(v.a)({},e),{},{messages:[].concat(Object(g.a)(e.messages),[{id:4,message:n}])});default:return e}},z={},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return e},Z=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(v.a)(Object(v.a)({},e),r):e}))},q="FOLLOW",Q="UNFOLLOW",W="SET_USERS",G="SET_CURRENT_PAGE",L="SET_TOTAL_USER_COUNT",M="TOGGLE_IS_FETCHING",F="TOGGLE_IS_FOLLOWING_PROGRESS",J={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},H=function(e){return{type:q,userId:e}},_=function(e){return{type:Q,userId:e}},$=function(e){return{type:G,currentPage:e}},ee=function(e){return{type:M,isFetching:e}},te=function(e,t){return{type:F,isFetching:e,userId:t}},ne=function(){var e=Object(O.a)(f.a.mark((function e(t,n,r,s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(_(n)),t(te(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(v.a)(Object(v.a)({},e),{},{users:Z(e.users,t.userId,"id",{followed:!0})});case Q:return Object(v.a)(Object(v.a)({},e),{},{users:Z(e.users,t.userId,"id",{followed:!1})});case W:return Object(v.a)(Object(v.a)({},e),{},{users:t.users});case G:return Object(v.a)(Object(v.a)({},e),{},{currentPage:t.currentPage});case L:return Object(v.a)(Object(v.a)({},e),{},{totalUsersCount:t.count});case M:return Object(v.a)(Object(v.a)({},e),{},{isFetching:t.isFetching});case F:return Object(v.a)(Object(v.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},se="social/auth/SET_USER_DATA",ae="social/auth/GET_CAPTCHA_URL_SUCCESS",ce={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},oe=function(e,t,n,r){return{type:se,payload:{userId:e,email:t,login:n,isAuth:r}}},ie=function(e){return{type:ae,payload:{captchaUrl:e}}},ue=function(){return function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r,s,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.email,c=r.login,t(oe(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(){return function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:n=e.sent,r=n.data.url,t(ie(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:case ae:return Object(v.a)(Object(v.a)({},e),t.payload);default:return e}},de="INITIALIZED_SUCCESS",be={initialized:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(v.a)(Object(v.a)({},e),{},{initialized:!0});default:return e}},he=n(128),fe=n(125),Oe=Object(j.c)({profilePage:D,dialogsPage:X,sidebar:Y,usersPage:re,auth:je,form:fe.a,app:pe}),ge=Object(j.e)(Oe,Object(j.a)(he.a)),ve=(n(248),n(16)),xe=n.n(ve),me=n(0),we=function(){return Object(me.jsxs)("nav",{className:xe.a.navbar,children:[Object(me.jsx)("div",{className:xe.a.item,children:Object(me.jsx)(b.b,{to:"/profile",activeClassName:xe.a.active,children:"Profile"})}),Object(me.jsx)("div",{className:"".concat(xe.a.item," ").concat(xe.a.active),children:Object(me.jsx)(b.b,{to:"/dialogs",activeClassName:xe.a.active,children:"Messages"})}),Object(me.jsx)("div",{className:"".concat(xe.a.item," ").concat(xe.a.active),children:Object(me.jsx)(b.b,{to:"/users",activeClassName:xe.a.active,children:"Users"})}),Object(me.jsx)("div",{className:xe.a.item,children:Object(me.jsx)(b.b,{to:"/news",activeClassName:xe.a.active,children:"News"})}),Object(me.jsx)("div",{className:xe.a.item,children:Object(me.jsx)(b.b,{to:"/music",activeClassName:xe.a.active,children:"Music"})}),Object(me.jsx)("div",{className:xe.a.item,children:Object(me.jsx)(b.b,{to:"/settings",activeClassName:xe.a.active,children:"Settings"})})]})},Pe=(n(253),function(){return Object(me.jsx)("div",{children:"News"})}),Ae=(n(254),function(){return Object(me.jsx)("div",{children:"Music"})}),Se=function(){return Object(me.jsx)("div",{children:"Music"})},ye=n(124),Ce=function(e){if(!e)return"Field is required"},Ie=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},ke=n(56),Ne=n(123),Ee=n(39),Ue=n.n(Ee),Te=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=e.children,a=n&&r;return Object(me.jsxs)("div",{className:Ue.a.formControl+" "+(a?Ue.a.error:" "),children:[Object(me.jsx)("div",{children:s}),a&&Object(me.jsx)("span",{children:r})]})},Be=function(e){var t=e.input,n=(e.meta,e.child,Object(ke.a)(e,["input","meta","child"]));return Object(me.jsx)(Te,Object(v.a)(Object(v.a)({},e),{},{children:Object(me.jsx)("textarea",Object(v.a)(Object(v.a)({},t),n))}))},Re=function(e){var t=e.input,n=(e.meta,e.child,Object(ke.a)(e,["input","meta","child"]));return Object(me.jsx)(Te,Object(v.a)(Object(v.a)({},e),{},{children:Object(me.jsx)("input",Object(v.a)(Object(v.a)({},t),n))}))},De=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(me.jsxs)("div",{children:[Object(me.jsx)(Ne.a,Object(v.a)({placeholder:e,name:t,component:n,validate:r},s)),a]})},Ve=Object(ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(me.jsxs)("form",{onSubmit:t,children:[De("Email","email",Re,[Ce]),De("Password","password",Re,[Ce],{type:"password"}),De(null,"rememberMe",Re,[],{type:"checkbox"},"remember me"),r&&Object(me.jsx)("img",{src:r}),r&&De("Simbols from image","captcha",Re,[Ce],{}),n&&Object(me.jsx)("div",{className:Ue.a.formSummaryError,children:n}),Object(me.jsx)("div",{children:Object(me.jsx)("button",{children:"Login"})})]})})),Ke=Object(p.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var s=Object(O.a)(f.a.mark((function s(a){var c,o;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,S(e,t,n,r);case 2:0===(c=s.sent).data.resultCode?a(ue()):(10===c.data.resultCode&&a(le()),o=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(x.a)("login",{_error:o})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(me.jsx)(d.a,{to:"/profile"}):Object(me.jsxs)("div",{children:[Object(me.jsx)("h1",{children:"Login"}),Object(me.jsx)(Ve,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Xe=n.p+"static/media/user-profile.57b4e4a6.png",ze=n(131),Ye=n.n(ze),Ze=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,s=e.follow;return Object(me.jsxs)("div",{children:[Object(me.jsxs)("span",{children:[Object(me.jsx)("div",{children:Object(me.jsx)(b.b,{to:"/profile/"+t.id,children:Object(me.jsx)("img",{src:null!=t.photos.small?t.photos.small:Xe,className:Ye.a.userPhoto})})}),Object(me.jsx)("div",{children:t.followed?Object(me.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(me.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(me.jsxs)("span",{children:[Object(me.jsxs)("span",{children:[Object(me.jsx)("div",{children:t.name}),Object(me.jsx)("div",{children:t.status})]}),Object(me.jsxs)("span",{children:[Object(me.jsx)("div",{children:"user.location.country"}),Object(me.jsx)("div",{children:"user.location.city"})]})]})]})},qe=n(53),Qe=n(41),We=n(57),Ge=n.n(We),Le=n(91),Me=n.n(Le),Fe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,a=e.onPageChanged,c=e.portionSize,o=void 0===c?10:c,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var j=Math.ceil(i/o),d=Object(r.useState)(1),b=Object(Qe.a)(d,2),p=b[0],h=b[1],f=(p-1)*o+1,O=p*o;return Object(me.jsxs)("div",{className:Me()(Ge.a.paginator,Object(qe.a)({},Ge.a.selectPage,!0)),children:[p>1&&Object(me.jsx)("button",{onClick:function(){h(p-1)},children:"prev"}),u.filter((function(e){return e>=f&&e<=O})).map((function(e){return Object(me.jsx)("span",{className:Me()(Object(qe.a)({},Ge.a.selectPage,s===e),Ge.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),j>p&&Object(me.jsx)("button",{onClick:function(){h(p+1)},children:"next"})]})},Je=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,s=e.onPageChanged,a=e.users,c=Object(ke.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(me.jsxs)("div",{children:[Object(me.jsx)(Fe,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:s}),Object(me.jsx)("div",{children:a.map((function(e){return Object(me.jsx)(Ze,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)}))})]})},He=n.p+"static/media/preloader.12b9c610.gif",_e=function(e){return Object(me.jsx)("div",{children:Object(me.jsx)("img",{src:He})})},$e=n(132),et=Object($e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),tt=function(e){return e.usersPage.pageSize},nt=function(e){return e.usersPage.totalUsersCount},rt=function(e){return e.usersPage.currentPage},st=function(e){return e.usersPage.isFetching},at=function(e){return e.usersPage.followingInProgress},ct=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(me.jsxs)(me.Fragment,{children:[this.props.isFetching?Object(me.jsx)(_e,{}):null,Object(me.jsx)(Je,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),ot=Object(j.d)(Object(p.b)((function(e){return{users:et(e),pageSize:tt(e),totalUsersCount:nt(e),currentPage:rt(e),isFetching:st(e),followingInProgress:at(e)}}),{follow:function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ne(n,e,w.follow.bind(e),H);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ne(n,e,w.unfollow.bind(e),_);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:$,toggleIsFollowingProgress:te,getUsers:function(e,t){return function(){var n=Object(O.a)(f.a.mark((function n(r){var s;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ee(!0)),r($(e)),n.next=4,w.getUsers(e,t);case 4:s=n.sent,r(ee(!1)),r((c=s.items,{type:W,users:c})),r((a=s.totalCount,{type:L,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ct),it=n(92),ut=n.n(it),lt=function(e){return Object(me.jsxs)("header",{className:ut.a.header,children:[Object(me.jsx)("img",{src:"data:image/png;base64,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"}),Object(me.jsx)("div",{className:ut.a.loginBlock,children:e.isAuth?Object(me.jsxs)("div",{children:[" ",e.login," - ",Object(me.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(me.jsx)(b.b,{to:"/login",children:"Login"})})]})},jt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(me.jsx)(lt,Object(v.a)({},this.props))}}]),n}(s.a.Component),dt=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:0===e.sent.data.resultCode&&t(oe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(jt),bt=n(30),pt=n.n(bt),ht=function(e){var t="/dialogs/"+e.id;return Object(me.jsx)("div",{className:pt.a.dialog+" "+pt.a.active,children:Object(me.jsx)(b.b,{to:t,children:e.name})})},ft=function(e){return Object(me.jsx)("div",{className:pt.a.dialog,children:e.message})},Ot=Ie(50),gt=Object(ye.a)({form:"dialogAddMessageForm"})((function(e){return Object(me.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(me.jsx)("div",{children:Object(me.jsx)(Ne.a,{component:Be,name:"newMessageText",placeholder:"Enter your message",validate:[Ce,Ot]})}),Object(me.jsx)("div",{children:Object(me.jsx)("button",{children:"Send message"})})]})})),vt=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(me.jsx)(ht,{name:e.name,id:e.id},e.id)})),r=t.messages.map((function(e){return Object(me.jsx)(ft,{message:e.message},e.id)}));t.newMessageText;return e.isAuth?Object(me.jsxs)("div",{className:pt.a.dialogs,children:[Object(me.jsx)("div",{className:pt.a.dialogsItems,children:n}),Object(me.jsx)("div",{className:pt.a.messages,children:Object(me.jsxs)("div",{children:[" ",r," "]})}),Object(me.jsx)(gt,{onSubmit:function(t){e.sendMessage(t.newMessageText)}})]}):Object(me.jsx)(d.a,{to:"/login"})},xt=function(e){return{isAuth:e.auth.isAuth}},mt=Object(j.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:V,newMessageText:e}}(t))}}})),(function(e){var t=function(t){Object(u.a)(r,t);var n=Object(l.a)(r);function r(){return Object(o.a)(this,r),n.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(me.jsx)(e,Object(v.a)({},this.props)):Object(me.jsx)(d.a,{to:"/login"})}}]),r}(s.a.Component);return Object(p.b)(xt)(t)}))(vt),wt=n(93),Pt=n.n(wt),At=n(133),St=n.n(At),yt=function(e){return Object(me.jsxs)("div",{className:St.a.item,children:[Object(me.jsx)("img",{src:e.src}),e.message,Object(me.jsx)("div",{children:Object(me.jsx)("span",{children:e.likesCount})})]})},Ct=Ie(10),It=Object(ye.a)({form:"postAddMessageForm"})((function(e){return Object(me.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(me.jsx)("div",{children:Object(me.jsx)(Ne.a,{component:Be,name:"newPostText",validate:[Ce,Ct],placeholder:"Post message"})}),Object(me.jsx)("div",{children:Object(me.jsx)("button",{children:"Send"})})]})})),kt=s.a.memo((function(e){var t=Object(g.a)(e.posts).reverse().map((function(e){return Object(me.jsx)(yt,{src:e.src,message:e.message,likesCount:e.likesCount},e.id)}));return Object(me.jsxs)("div",{className:Pt.a.postsBlock,children:[Object(me.jsx)("h3",{children:"My Posts"}),Object(me.jsx)(It,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(me.jsx)("div",{className:Pt.a.posts,children:t})]})})),Nt=Object(p.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:I,newPostText:e}}(t))}}}))(kt),Et=n(40),Ut=n.n(Et),Tt=function(e){var t=Object(r.useState)(!1),n=Object(Qe.a)(t,2),s=n[0],a=n[1],c=Object(r.useState)(e.status),o=Object(Qe.a)(c,2),i=o[0],u=o[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(me.jsxs)("div",{children:[!s&&Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"Status: "}),Object(me.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status||"----"})]}),s&&Object(me.jsx)("div",{children:Object(me.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(i)},onChange:function(e){u(e.currentTarget.value)},value:i})})]})},Bt=Object(ye.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(me.jsxs)("form",{onSubmit:t,children:[Object(me.jsx)("div",{children:Object(me.jsx)("button",{children:"save"})}),r&&Object(me.jsx)("div",{className:Ue.a.formSummaryError,children:r}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"Full Name: "}),De("Full name","fullName",Re,[])]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"Looking for a job: "}),De("","lookingForAJob",Re,[],{type:"checkbox"})]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"My professional skills: "})," ",n.lookingForAJobDescription,De("My professional skills","lookingForAJobDescription",Be,[])]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"About me: "}),De("About me","aboutMe",Be,[])]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"Contacts:"})," ",Object.keys(n.contacts).map((function(e){return Object(me.jsx)("div",{className:Ut.a.contact,children:Object(me.jsxs)("b",{children:[e,":",De(e,"contacts."+e,Re,[])]})},e)}))]})]})})),Rt=function(e){var t=e.profile,n=e.isOwner,r=e.goToEditMode;return Object(me.jsxs)("div",{children:[n&&Object(me.jsx)("div",{children:Object(me.jsx)("button",{onClick:r,children:"edit"})}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"Full Name: "}),t.fullName]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"Looking for a job: "})," ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"My professional skills: "})," ",t.lookingForAJobDescription]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"About me: "})," ",t.aboutMe]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("b",{children:"Contacts:"})," ",Object.keys(t.contacts).map((function(e){return Object(me.jsx)(Dt,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},Dt=function(e){var t=e.contactTitle,n=e.contactValue;return Object(me.jsxs)("div",{className:Ut.a.contact,children:[Object(me.jsxs)("b",{children:[t,":"]})," ",n]})},Vt=function(e){var t=e.profile,n=e.status,s=e.updateStatus,a=e.isOwner,c=e.savePhoto,o=e.saveProfile,i=Object(r.useState)(!1),u=Object(Qe.a)(i,2),l=u[0],j=u[1];if(!t)return Object(me.jsx)(_e,{});return Object(me.jsx)(me.Fragment,{children:Object(me.jsxs)("div",{className:Ut.a.descriptionBlock,children:[Object(me.jsx)("img",{src:t.photos.large||Xe,className:Ut.a.mainPhoto}),a&&Object(me.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}}),l?Object(me.jsx)(Bt,{initialValues:t,profile:t,onSubmit:function(e){o(e).then((function(){j(!1)}))}}):Object(me.jsx)(Rt,{goToEditMode:function(){return j(!0)},profile:t,isOwner:a}),Object(me.jsx)(Tt,{status:n,updateStatus:s})]})})},Kt=function(e){return Object(me.jsxs)("div",{children:[Object(me.jsx)(Vt,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(me.jsx)(Nt,{})]})},Xt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(me.jsx)(Kt,Object(v.a)(Object(v.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),n}(s.a.Component),zt=Object(j.d)(Object(p.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:R,getStatus:function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.getStatus(e);case 2:r=t.sent,n(B(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(B(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((s=r.data.data.photos,{type:U,photos:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n,r){var s,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,P.saveProfile(e);case 3:if(0!==(a=t.sent).data.resultCode){t.next=8;break}n(R(s)),t.next=10;break;case 8:return n(Object(x.a)("edit-profile",{_error:a.data.messages[0]})),t.abrupt("return",Promise.reject(a.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),d.g)(Xt),Yt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).catchAllUnhandledErrors=function(e){alert(e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillMount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(me.jsxs)("div",{className:"app-wrapper",children:[Object(me.jsx)(dt,{}),Object(me.jsx)(we,{}),Object(me.jsx)("div",{className:"app-wrapper-content",children:Object(me.jsxs)(d.d,{children:[Object(me.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(me.jsx)(d.a,{to:"/profile"})}}),Object(me.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(me.jsx)(zt,{})}}),Object(me.jsx)(d.b,{path:"/dialogs",render:function(){return Object(me.jsx)(mt,{})}}),Object(me.jsx)(d.b,{path:"/news",render:function(){return Object(me.jsx)(Pe,{})}}),Object(me.jsx)(d.b,{path:"/music",render:function(){return Object(me.jsx)(Ae,{})}}),Object(me.jsx)(d.b,{path:"/settings",render:function(){return Object(me.jsx)(Se,{})}}),Object(me.jsx)(d.b,{path:"/users",render:function(){return Object(me.jsx)(ot,{})}}),Object(me.jsx)(d.b,{path:"/login",render:function(){return Object(me.jsx)(Ke,{})}}),Object(me.jsx)(d.b,{path:"*",render:function(){return Object(me.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(me.jsx)(_e,{})}}]),n}(r.Component),Zt=Object(j.d)(d.g,Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ue());Promise.all([t]).then((function(){e({type:de})}))}}}))(Yt),qt=function(e){return Object(me.jsx)(b.a,{children:Object(me.jsx)(p.a,{store:ge,children:Object(me.jsx)(Zt,{})})})};c.a.render(Object(me.jsx)(qt,{}),document.getElementById("root"))},30:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__xylLh",dialogsItems:"Dialogs_dialogsItems__3n0cn",active:"Dialogs_active__19NDP",messages:"Dialogs_messages__To0sg",message:"Dialogs_message__2xsRB"}},39:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1M7LW",error:"FormsControls_error__2n9Rt",formSummaryError:"FormsControls_formSummaryError__2hni1"}},40:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3ZJXt",content:"ProfileInfo_content__3Gn--",mainPhoto:"ProfileInfo_mainPhoto__-yQXi",contact:"ProfileInfo_contact__2FKrX"}},57:function(e,t,n){e.exports={paginator:"Paginator_paginator__3E1fj",pageNumber:"Paginator_pageNumber__xnvn4",selectedPage:"Paginator_selectedPage__90ddo"}},92:function(e,t,n){e.exports={header:"Header_header__37gEe",loginBlock:"Header_loginBlock__2A8g8"}},93:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__--B1k",posts:"MyPosts_posts__gt1JD"}}},[[295,1,2]]]);
//# sourceMappingURL=main.13243a0e.chunk.js.map