(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/modules/session/slice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ // src/store/modules/session/slice.ts
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "validateSessionFailure": (()=>validateSessionFailure),
    "validateSessionRequest": (()=>validateSessionRequest),
    "validateSessionSuccess": (()=>validateSessionSuccess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    valid: false,
    loading: false,
    userId: null,
    token: null,
    chatId: null
};
const sessionSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'session',
    initialState,
    reducers: {
        validateSessionRequest: (state)=>{
            console.log('🔄 Iniciando validação da sessão...');
            state.loading = true;
        },
        validateSessionSuccess: (state, action)=>{
            console.log('✅ Sessão validada com sucesso:', action.payload);
            state.loading = false;
            state.valid = true;
            state.userId = action.payload.userId;
            state.token = action.payload.token;
            state.chatId = action.payload.chatId;
        },
        validateSessionFailure: (state)=>{
            console.log('❌ Falha na validação da sessão');
            state.loading = false;
            state.valid = false;
        }
    }
});
const { validateSessionRequest, validateSessionSuccess, validateSessionFailure } = sessionSlice.actions;
const __TURBOPACK__default__export__ = sessionSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/rootReducer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/store/rootReducer.ts
__turbopack_context__.s({
    "rootReducer": (()=>rootReducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/slice.ts [app-client] (ecmascript)");
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])({
    session: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/apiSercice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ApiService": (()=>ApiService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class ApiService {
    api;
    constructor(baseUrl, token){
        const resolvedBaseUrl = baseUrl || ("TURBOPACK compile-time value", "http://localhost:3525") || '';
        if (!resolvedBaseUrl.trim()) {
            throw new Error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
        }
        this.api = new HttpClient(resolvedBaseUrl, {
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : {}
        });
    }
    async validateSession() {
        return this.api.get('/chat/session');
    }
    async startSession(userId) {
        return this.api.post('/chat/start-session', {}, {
            headers: {
                userid: userId
            }
        });
    }
    async getUserProfile() {
        return this.api.get('/u/p');
    }
    async listChats() {
        const data = await this.api.get('/chat/list');
        return Array.isArray(data.chats) ? data.chats : [];
    }
    async sendMessage(message) {
        return this.api.post('/chat/message', {
            message
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/session/saga.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>sessionSaga)
});
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-explicit-any */ // src/store/modules/session/saga.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiSercice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiSercice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$effects$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/io-22ea0cf9.js [app-client] (ecmascript) <export O as call>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/io-22ea0cf9.js [app-client] (ecmascript) <export Z as put>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/slice.ts [app-client] (ecmascript)");
'use client';
;
;
;
const handleValidateSession = function*() {
    const mockUserId = "67cfa19fbca330b02331873d";
    console.log('🔄 Iniciando validação da sessão no saga...');
    try {
        const api = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiSercice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiService"]();
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__["call"])([
            api,
            api.startSession
        ], mockUserId);
        return;
    } catch (err) {
        console.error('💥 Erro ao validar sessão:', err);
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionFailure"])());
    }
};
function* sessionSaga() {
    console.log('🚀 Inicializando saga de sessão');
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["takeLatest"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionRequest"].type, handleValidateSession);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/rootSaga.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/store/rootSaga.ts
__turbopack_context__.s({
    "default": (()=>rootSaga)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$effects$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$$__as__all$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/io-22ea0cf9.js [app-client] (ecmascript) <export $ as all>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$saga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/saga.ts [app-client] (ecmascript)");
;
;
function* rootSaga() {
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$$__as__all$3e$__["all"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$saga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
    ]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/store/index.ts
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$core$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$core$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/rootReducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootSaga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/rootSaga.ts [app-client] (ecmascript)");
;
;
;
;
const sagaMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$core$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])();
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootReducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootReducer"],
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            thunk: false
        }).concat(sagaMiddleware)
});
sagaMiddleware.run(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootSaga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_0b3f38bd._.js.map