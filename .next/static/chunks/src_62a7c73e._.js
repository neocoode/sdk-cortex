(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/modules/profile/slice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ // src/store/modules/session/slice.ts
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "profileFailure": (()=>profileFailure),
    "profileRequest": (()=>profileRequest),
    "profileSuccess": (()=>profileSuccess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    valid: false,
    loading: false,
    chatId: null,
    name: null
};
const sessionSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'profile',
    initialState,
    reducers: {
        profileRequest: (state, action)=>{
            console.log('🔄 Iniciando validação da sessão...');
            state.loading = true;
        },
        profileSuccess: (state, action)=>{
            console.log('✅ Sessão validada com sucesso:', action.payload);
            state.loading = false;
            state.valid = true;
            state.chatId = action.payload.chatId;
            state.name = action.payload.name;
        },
        profileFailure: (state)=>{
            console.log('❌ Falha na validação da sessão');
            state.loading = false;
            state.valid = false;
        }
    }
});
const { profileRequest, profileSuccess, profileFailure } = sessionSlice.actions;
const __TURBOPACK__default__export__ = sessionSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
            if (action.payload.userId) {
                state.userId = action.payload.userId;
            }
            if (action.payload.token) {
                state.token = action.payload.token;
            }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/profile/slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/slice.ts [app-client] (ecmascript)");
;
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineReducers"])({
    session: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/httpClient.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/services/HttpClient.ts
__turbopack_context__.s({
    "HttpClient": (()=>HttpClient)
});
'use client';
class HttpClient {
    baseUrl;
    defaultHeaders;
    constructor(baseURL, defaultOptions = {}){
        this.baseUrl = baseURL;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...defaultOptions.headers ? defaultOptions.headers : {}
        };
        console.log('🔄 [HttpClient] defaultHeaders:', this.defaultHeaders);
    }
    setToken(token) {
        this.defaultHeaders = {
            ...this.defaultHeaders,
            ...token ? {
                'Authorization': `Bearer ${token}`
            } : {}
        };
    }
    async request(method, url, data, options = {}) {
        const fullUrl = `${this.baseUrl}${url}`;
        const headers = {
            ...this.defaultHeaders,
            ...options.headers ? options.headers : {}
        };
        console.log('🔄 [HttpClient] headers:', headers);
        const dataRequest = {
            method,
            headers,
            body: data ? JSON.stringify(data) : undefined,
            cache: options.cache || 'no-store'
        };
        console.log('🔄 [HttpClient] dataRequest:', dataRequest);
        console.log('🔄 [HttpClient] fullUrl:', fullUrl);
        const response = await fetch(fullUrl, dataRequest);
        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`❌ [${method}] ${url} falhou:`, errorBody);
            throw new Error(`HTTP ${response.status}: ${errorBody}`);
        }
        const contentType = response.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            return response.json();
        }
        // fallback para texto
        return response.text();
    }
    get(url, options) {
        return this.request('GET', url, undefined, options);
    }
    post(url, data, options) {
        return this.request('POST', url, data, options);
    }
    put(url, data, options) {
        return this.request('PUT', url, data, options);
    }
    patch(url, data, options) {
        return this.request('PATCH', url, data, options);
    }
    delete(url, options) {
        return this.request('DELETE', url, undefined, options);
    }
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/httpClient.ts [app-client] (ecmascript)");
'use client';
;
class ApiService {
    api;
    constructor(token){
        const resolvedBaseUrl = ("TURBOPACK compile-time value", "http://localhost:3525") || '';
        if (!resolvedBaseUrl.trim()) {
            throw new Error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
        }
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$httpClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpClient"](resolvedBaseUrl, {
            headers: {
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            }
        });
    }
    async setToken(token) {
        this.api.setToken(token);
    }
    async validateSession() {
        return this.api.get('/chat/session');
    }
    async startSession(userId) {
        return this.api.post('/chat/start-session', {}, {
            headers: {
                usid: userId
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
    async sendMessage(chatId, message) {
        return this.api.post('/chat/message', {
            chatId,
            message
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/profile/saga.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a4__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/io-22ea0cf9.js [app-client] (ecmascript) <export a4 as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/profile/slice.ts [app-client] (ecmascript)");
'use client';
;
;
;
const handleprofile = function*({ payload }) {
    let token = payload.token;
    if (!token) {
        token = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a4__as__select$3e$__["select"])((state)=>state.session.token);
    }
    try {
        console.log('🔄 preparando para pegar o perfil');
        console.log('🔄 token:', token);
        const api = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiSercice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiService"](token);
        const response = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__["call"])([
            api,
            api.getUserProfile
        ]);
        const data = response?.data;
        console.log('🔄 Resposta da sessão:', data);
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileSuccess"])({
            chatId: data?.chatId,
            name: data?.name,
            valid: true
        }));
        return;
    } catch (err) {
        console.error('💥 Erro ao validar sessão:', err);
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileFailure"])());
        return;
    }
};
function* sessionSaga() {
    console.log('🚀 Inicializando saga de sessão');
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["takeLatest"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileRequest"].type, handleprofile);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/profile/slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/slice.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const handleValidateSession = function*({ token }) {
    const mockUserId = "67cfa19fbca330b02331873d";
    console.log('🔄 Iniciando validação da sessão no saga...');
    console.log('🔄 Token:', token);
    try {
        const api = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiSercice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiService"](token);
        if (!token) {
            const response = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__["call"])([
                api,
                api.startSession
            ], mockUserId);
            console.log('🔄 Resposta da sessão:', response);
            api.setToken(response.token);
            // Revalida a sessão após iniciar      
            const recheck = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__["call"])([
                api,
                api.validateSession
            ]);
            if (!recheck.valid) {
                return yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionFailure"])());
            }
            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileRequest"])({
                token: response.token
            }));
            yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionSuccess"])({
                userId: mockUserId,
                token: response.token,
                valid: true
            }));
            return;
        }
        // Revalida a sessão após iniciar      
        const recheck = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__["call"])([
            api,
            api.validateSession
        ]);
        if (!recheck.valid) {
            return yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionFailure"])());
        }
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileRequest"])({
            token: token
        }));
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionSuccess"])({
            userId: mockUserId,
            valid: true
        }));
        return;
    } catch (err) {
        console.error('💥 Erro ao validar sessão:', err);
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionFailure"])());
        return false;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$saga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/profile/saga.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$saga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/saga.ts [app-client] (ecmascript)");
;
;
;
function* rootSaga() {
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$$__as__all$3e$__["all"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$saga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$profile$2f$saga$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
        }).concat(sagaMiddleware),
    devTools: ("TURBOPACK compile-time value", "development") !== 'production'
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

//# sourceMappingURL=src_62a7c73e._.js.map