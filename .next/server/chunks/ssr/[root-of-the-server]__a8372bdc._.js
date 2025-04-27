module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/modules/session/slice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ // src/store/modules/session/slice.ts
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "validateSessionFailure": (()=>validateSessionFailure),
    "validateSessionRequest": (()=>validateSessionRequest),
    "validateSessionSuccess": (()=>validateSessionSuccess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    valid: false,
    loading: false,
    userId: null,
    token: null,
    chatId: null
};
const sessionSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}}),
"[project]/src/store/rootReducer.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/store/rootReducer.ts
__turbopack_context__.s({
    "rootReducer": (()=>rootReducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/slice.ts [app-ssr] (ecmascript)");
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineReducers"])({
    session: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/services/httpClient.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HttpClient": (()=>HttpClient)
});
/* eslint-disable @typescript-eslint/no-explicit-any */ // src/services/HttpClient.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
'use client';
;
class HttpClient {
    client;
    constructor(baseURL, defaultOptions = {}){
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            ...defaultOptions.headers
        };
        this.client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            baseURL,
            withCredentials: true,
            headers,
            ...defaultOptions
        });
        // Interceptador para respostas
        this.client.interceptors.response.use((response)=>response, (error)=>{
            console.error('Erro HTTP:', {
                status: error?.response?.status,
                data: error?.response?.data,
                config: error?.config
            });
            return Promise.reject(error);
        });
    }
    get(url, options) {
        console.log('🔍 this.client:', this.client);
        return this.client.get(url, this.mergeOptions(options));
    }
    post(url, data, options) {
        try {
            console.log('🔍 this.client:', this.client);
            return this.client.post(url, data, this.mergeOptions(options));
        } catch (error) {
            console.error('Erro ao fazer POST:', {
                url,
                data,
                error: error instanceof Error ? error.message : 'Erro desconhecido'
            });
            throw error;
        }
    }
    put(url, data, options) {
        return this.client.put(url, data, this.mergeOptions(options));
    }
    delete(url, options) {
        return this.client.delete(url, this.mergeOptions(options));
    }
    patch(url, data, options) {
        return this.client.patch(url, data, this.mergeOptions(options));
    }
    mergeOptions(options) {
        try {
            const mergedHeaders = {
                ...this.client.defaults.headers,
                ...options?.headers
            };
            return {
                ...options,
                headers: mergedHeaders
            };
        } catch (error) {
            console.error('Erro ao mesclar opções:', error);
            throw error;
        }
    }
    // Getter para o AxiosInstance
    instance() {
        return this.client;
    }
}
}}),
"[project]/src/services/apiSercice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ // src/services/ApiService.ts
__turbopack_context__.s({
    "ApiService": (()=>ApiService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/httpClient.ts [app-ssr] (ecmascript)");
'use client';
;
class ApiService {
    api;
    constructor(baseUrl, token){
        const resolvedBaseUrl = baseUrl || ("TURBOPACK compile-time value", "http://localhost:3525");
        if (!resolvedBaseUrl || resolvedBaseUrl.trim() === '') {
            throw new Error('❌ NEXT_PUBLIC_API_URL não está definida ou está vazia');
        }
        console.log('🔧 Criando cliente HTTP com baseUrl:', resolvedBaseUrl);
        this.api = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$httpClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpClient"](resolvedBaseUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': baseUrl,
                ...token ? {
                    'authorization': `Bearer ${token}`
                } : {}
            }
        });
    }
    async validateSession() {
        console.log('🔍 Iniciando validação de sessão...');
        try {
            const response = await this.api.get('/chat/session');
            console.log('✅ Sessão validada com sucesso:', response.data);
            return response.data;
        } catch (error) {
            console.error('❌ Erro ao validar sessão:', error);
            if (error?.response?.status === 401) {
                console.error('❌ Usuário não autorizado:', error);
                return {
                    valid: false
                };
            }
            throw error;
        }
    }
    async startSession(userId) {
        console.log('🚀 Iniciando nova sessão para usuário:', userId);
        try {
            const response = await this.api.post('/chat/start-session', {
                userId
            }, {
                headers: {}
            });
            console.log('✅ Sessão iniciada com sucesso:', response.data);
            return response.data;
        } catch (error) {
            console.error('❌ Erro ao iniciar sessão:', error);
            throw error;
        }
    }
    async getUserProfile() {
        console.log('👤 Buscando perfil do usuário...');
        try {
            const response = await this.api.get('/u/p');
            console.log('✅ Perfil obtido com sucesso:', response.data);
            return response.data;
        } catch (error) {
            console.error('❌ Erro ao obter perfil:', error);
            throw error;
        }
    }
    async listChats() {
        console.log('📋 Listando chats...');
        try {
            const response = await this.api.get('/chat/list');
            if (response?.data?.success && Array.isArray(response.data.chats)) {
                console.log('✅ Chats obtidos com sucesso:', response.data.chats);
                return response.data.chats;
            }
            console.log('⚠️ Nenhum chat encontrado');
            return [];
        } catch (error) {
            console.error('❌ Erro ao listar chats:', error);
            throw error;
        }
    }
    async sendMessage(message) {
        console.log('📤 Enviando mensagem:', message);
        try {
            const response = await this.api.post('/chat/message', {
                message
            });
            console.log('✅ Mensagem enviada com sucesso:', response.data);
            return response.data;
        } catch (error) {
            console.error('❌ Erro ao enviar mensagem:', error);
            throw error;
        }
    }
}
}}),
"[project]/src/modules/session/saga.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>sessionSaga)
});
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-explicit-any */ // src/store/modules/session/saga.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiSercice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/apiSercice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$effects$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/io-22ea0cf9.js [app-ssr] (ecmascript) <export O as call>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/io-22ea0cf9.js [app-ssr] (ecmascript) <export Z as put>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/slice.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const handleValidateSession = function*() {
    const mockUserId = "67cfa19fbca330b02331873d";
    console.log('🔄 Iniciando validação da sessão no saga...');
    try {
        const api = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$apiSercice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiService"]();
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__O__as__call$3e$__["call"])([
            api,
            api.startSession
        ], mockUserId);
        return;
    } catch (err) {
        console.error('💥 Erro ao validar sessão:', err);
        yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Z__as__put$3e$__["put"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSessionFailure"])());
    }
};
function* sessionSaga() {
    console.log('🚀 Inicializando saga de sessão');
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$redux$2d$saga$2d$effects$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["takeLatest"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSessionRequest"].type, handleValidateSession);
}
}}),
"[project]/src/store/rootSaga.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/store/rootSaga.ts
__turbopack_context__.s({
    "default": (()=>rootSaga)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$effects$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$$__as__all$3e$__ = __turbopack_context__.i("[project]/node_modules/@redux-saga/core/dist/io-22ea0cf9.js [app-ssr] (ecmascript) <export $ as all>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$saga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/saga.ts [app-ssr] (ecmascript)");
;
;
function* rootSaga() {
    yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$redux$2d$saga$2f$core$2f$dist$2f$io$2d$22ea0cf9$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$$__as__all$3e$__["all"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$saga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
    ]);
}
}}),
"[project]/src/store/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/store/index.ts
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$core$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$core$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/rootReducer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/rootSaga.ts [app-ssr] (ecmascript)");
;
;
;
;
const sagaMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$saga$2f$dist$2f$redux$2d$saga$2d$core$2d$npm$2d$proxy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])();
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootReducer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rootReducer"],
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            thunk: false
        }).concat(sagaMiddleware)
});
sagaMiddleware.run(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$rootSaga$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
}}),
"[project]/src/app/providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a8372bdc._.js.map