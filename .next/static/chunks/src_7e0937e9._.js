(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/customHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-client] (ecmascript) <export default as PanelLeftOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CustomHeader = ({ toggleSidebar, isSidebarVisible })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `flex h-18 p-4 ${themeSelected.shadows.small} flex justify-between items-center`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    isSidebarVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                        size: 28,
                        className: `${themeSelected.colors.text} m-2 cursor-pointer`,
                        strokeWidth: 1,
                        onClick: toggleSidebar
                    }, void 0, false, {
                        fileName: "[project]/src/components/customHeader.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__["PanelLeftOpen"], {
                        size: 28,
                        className: `${themeSelected.colors.text} m-2 cursor-pointer`,
                        strokeWidth: 1,
                        onClick: toggleSidebar
                    }, void 0, false, {
                        fileName: "[project]/src/components/customHeader.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        size: 28,
                        className: `${themeSelected.colors.text} m-2 cursor-pointer`,
                        strokeWidth: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/customHeader.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${themeSelected.colors.text} ${themeSelected.typography.fontSize.large}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/customHeader.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customHeader.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `
                        flex flex-row items-center justify-between 
                        ${themeSelected.borders.default} 
                        ${themeSelected.typography.fontSize.small} 
                        ${themeSelected.colors.text} 
                        ${themeSelected.borderRadius.xlarge} 
                        ${themeSelected.transitions.fast} 
                        bg-transparent hover:${themeSelected.colors.backgroundSecondary} 
                    `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                            size: 20,
                            className: `
                            ml-3 mr-2 my-2 cursor-pointer
                            ${themeSelected.colors.text} 
                        `,
                            strokeWidth: 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/customHeader.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `
                            mr-3 my-2 cursor-pointer
                        ${themeSelected.colors.text} 
                        `,
                            children: "Compartilhar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/customHeader.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/customHeader.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/customHeader.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customHeader.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
_s(CustomHeader, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = CustomHeader;
const __TURBOPACK__default__export__ = CustomHeader;
var _c;
__turbopack_context__.k.register(_c, "CustomHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/leftSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const LeftSidebar = ({ onSelectChat, isSidebarVisible })=>{
    _s();
    const [renderContent, setRenderContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isSidebarVisible);
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // Controla renderização interna com atraso para permitir a animação de fechamento
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeftSidebar.useEffect": ()=>{
            if (isSidebarVisible) {
                setRenderContent(true);
            } else {
                const timeout = setTimeout({
                    "LeftSidebar.useEffect.timeout": ()=>setRenderContent(false)
                }["LeftSidebar.useEffect.timeout"], 300); // mesma duração da transição
                return ({
                    "LeftSidebar.useEffect": ()=>clearTimeout(timeout)
                })["LeftSidebar.useEffect"];
            }
        }
    }["LeftSidebar.useEffect"], [
        isSidebarVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `
        bg-[#1e1e1e] 
        text-white 
        flex flex-col 
        h-full 
        overflow-hidden 
        transition-all 
        duration-300 
        ${isSidebarVisible ? 'w-80 opacity-100' : 'w-0 opacity-0'}
      `,
        children: renderContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-2xl",
                            children: "Luma Beta"
                        }, void 0, false, {
                            fileName: "[project]/src/components/leftSidebar.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: `
              cursor-pointer
              my-1
              ${themeSelected.colors.text} 
            `,
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/src/components/leftSidebar.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/leftSidebar.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow overflow-y-auto p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/leftSidebar.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/leftSidebar.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/leftSidebar.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/leftSidebar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
_s(LeftSidebar, "lraqW0eLc2A1L8+MC5Nhz8YoXFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = LeftSidebar;
const __TURBOPACK__default__export__ = LeftSidebar;
var _c;
__turbopack_context__.k.register(_c, "LeftSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/inputMessage/inputMessage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript) <export default as SendHorizonal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const InputMessage = ({ onAdd, placeholder = 'Digite sua mensagem...', value, onChange, onSubmit })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputMessage.useEffect": ()=>{
            inputRef.current?.focus();
        }
    }["InputMessage.useEffect"], []);
    const onSubmitPrivate = (e)=>{
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        onSubmit?.();
    };
    const handleSubmit = (e)=>{
        if (e) {
            e.preventDefault();
        }
        onSubmit?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "flex flex-col m-1 mb-5 mx-[5%] pb-10 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: onSubmitPrivate,
            className: `
          flex flex-col justify-between m-2 overflow-hidden 
          ${themeSelected.colors.backgroundPrimary} 
          ${themeSelected.borderRadius.xxxlarge} 
          ${themeSelected.shadows.medium}
        `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center p-3 w-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
              flex items-center justify-between w-full p-1
              ${themeSelected.colors.backgroundAccent} 
              ${themeSelected.borderRadius.xxlarge} 
            `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "text",
                                value: value,
                                onChange: onChange,
                                placeholder: placeholder,
                                className: `
                  w-full py-1 px-2 bg-transparent outline-none 
                  ${themeSelected.colors.text}
                  ${themeSelected.typography.fontSize.large}
                `,
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleSubmit(e);
                                        if (inputRef.current) {
                                            inputRef.current.value = '';
                                        }
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-4 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: `
              cursor-pointer
              ${themeSelected.colors.text} 
            `,
                            onClick: onAdd,
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `
              flex justify-center items-center pt-2 
              ${themeSelected.typography.fontSize.medium} 
              ${themeSelected.colors.textSecondary}
            `,
                            children: "Luma Beta - 04/2025"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        value.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__["SendHorizonal"], {
                            className: `
                ${themeSelected.colors.text} 
                cursor-pointer
              `,
                            onClick: handleSubmit,
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                            className: `
                ${themeSelected.colors.text} 
                cursor-pointer
              `,
                            onClick: handleSubmit,
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/inputMessage/inputMessage.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_s(InputMessage, "s5zu9fTODBtyaKJ/DigRMlECPDU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = InputMessage;
const __TURBOPACK__default__export__ = InputMessage;
var _c;
__turbopack_context__.k.register(_c, "InputMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/processMessageStatus.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ProcessMessageStatus = ()=>{
    _s();
    const { loading, valid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ProcessMessageStatus.useSelector": (state)=>state.sendMessage
    }["ProcessMessageStatus.useSelector"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-[1px] ${loading ? 'bg-green-500' : !valid ? 'bg-transparent' : 'bg-transparent'}`
    }, void 0, false, {
        fileName: "[project]/src/components/processMessageStatus.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(ProcessMessageStatus, "3Uz2XxhtNAefe2eevwILQNUja+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ProcessMessageStatus;
const __TURBOPACK__default__export__ = ProcessMessageStatus;
var _c;
__turbopack_context__.k.register(_c, "ProcessMessageStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/interface/chats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "EMessageType": (()=>EMessageType)
});
var EMessageType = /*#__PURE__*/ function(EMessageType) {
    EMessageType["user"] = "user";
    EMessageType["message"] = "message";
    EMessageType["title"] = "title";
    EMessageType["link"] = "link";
    EMessageType["table"] = "table";
    EMessageType["text"] = "text";
    EMessageType["code"] = "code";
    EMessageType["divider"] = "divider";
    EMessageType["groupLink"] = "groupLink";
    EMessageType["imageUrl"] = "imageUrl";
    return EMessageType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/customCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const CustomCard = ({ title, rightIcon, children })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
      w-full bg-[#4f4f4f] p-2 rounded-md
      ${themeSelected.colors.backgroundTertiary}
      ${themeSelected.borderRadius.xxlarge}
      ${themeSelected.colors.textPrimary}
    `,
        children: [
            (title || rightIcon) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-1",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `
            ${themeSelected.colors.text}
            ${themeSelected.typography.fontSize.small}
            ${themeSelected.typography.fontWeight.xbold}
            `,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/customCard.tsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this),
                    rightIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center m-2`,
                        children: rightIcon
                    }, void 0, false, {
                        fileName: "[project]/src/components/customCard.tsx",
                        lineNumber: 25,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/customCard.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        w-full
        ${themeSelected.colors.backgroundPrimary}
        ${themeSelected.borderRadius.medium}
      `,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/customCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_s(CustomCard, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = CustomCard;
const __TURBOPACK__default__export__ = CustomCard;
var _c;
__turbopack_context__.k.register(_c, "CustomCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderCode.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const RenderCode = ({ value, key })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Código",
        rightIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                size: 20,
                className: `
            cursor-pointer
          ${themeSelected.colors.text} 
        `
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderCode.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/components/renderMessage/renderCode.tsx",
            lineNumber: 13,
            columnNumber: 18
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            className: `
        w-full flex flex-wrap
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.small}
        bg-[#151515] p-4 rounded-md overflow-x-auto
      `,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderCode.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/renderMessage/renderCode.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, key, false, {
        fileName: "[project]/src/components/renderMessage/renderCode.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_s(RenderCode, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderCode;
const __TURBOPACK__default__export__ = RenderCode;
var _c;
__turbopack_context__.k.register(_c, "RenderCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderDivider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const RenderDivider = ()=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        w-full flex items-center justify-center py-1 mt-2 mb-2      
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
          w-full h-[2px]
          ${themeSelected.colors.backgroundTertiary}
          ${themeSelected.borderRadius.xxlarge}
          ${themeSelected.shadows.medium}
        `
        }, void 0, false, {
            fileName: "[project]/src/components/renderMessage/renderDivider.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/renderMessage/renderDivider.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_s(RenderDivider, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderDivider;
const __TURBOPACK__default__export__ = RenderDivider;
var _c;
__turbopack_context__.k.register(_c, "RenderDivider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderLink.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const RenderLink = ({ value })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap pb-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            className: `
          text-blue-400 hover:text-blue-600 underline
          ${themeSelected.typography.fontSize.large}
        `,
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/renderMessage/renderLink.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/renderMessage/renderLink.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(RenderLink, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderLink;
const __TURBOPACK__default__export__ = RenderLink;
var _c;
__turbopack_context__.k.register(_c, "RenderLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderGroupLink.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderLink.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const RenderGroupLink = ({ value, type })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
      flex flex-wrap my-3 flex-col
    `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          flex
          ${themeSelected.colors.text}
          ${themeSelected.typography.fontSize.xlarge}
        `,
                children: "Links"
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderGroupLink.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            Array.isArray(value) && value.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: link,
                        type: type
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderMessage/renderGroupLink.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/renderMessage/renderGroupLink.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderMessage/renderGroupLink.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_s(RenderGroupLink, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderGroupLink;
const __TURBOPACK__default__export__ = RenderGroupLink;
var _c;
__turbopack_context__.k.register(_c, "RenderGroupLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderImageUrl.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @next/next/no-img-element */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/keen-slider/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const RenderImageUrl = ({ value })=>{
    _s();
    const imageUrls = typeof value === 'string' ? JSON.parse(value) : value;
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const perView = imageUrls && imageUrls.length > 6 ? 6 : imageUrls && imageUrls.length > 3 ? 4 : 3;
    const [sliderRef, slider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"])({
        initial: 0,
        slides: {
            perView,
            spacing: 15
        },
        created () {
            setLoaded(true);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenderImageUrl.useEffect": ()=>{
            if (!slider) return;
            const autoplay = {
                "RenderImageUrl.useEffect.autoplay": ()=>{
                    timer.current = setInterval({
                        "RenderImageUrl.useEffect.autoplay": ()=>{
                            if (slider.current) {
                                slider.current.next();
                            }
                        }
                    }["RenderImageUrl.useEffect.autoplay"], 3000);
                }
            }["RenderImageUrl.useEffect.autoplay"];
            autoplay();
            return ({
                "RenderImageUrl.useEffect": ()=>{
                    if (timer.current) clearInterval(timer.current);
                }
            })["RenderImageUrl.useEffect"];
        }
    }["RenderImageUrl.useEffect"], [
        slider
    ]);
    const handleKeyDown = (e)=>{
        if (e.key === 'Escape' || e.key === 'Enter') {
            setSelectedImage(null);
        } else if (e.key === 'ArrowLeft') {
            handlePrevImage();
        } else if (e.key === 'ArrowRight') {
            handleNextImage();
        }
    };
    const handlePrevImage = ()=>{
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : imageUrls.length - 1;
        setCurrentImageIndex(newIndex);
        setSelectedImage(imageUrls[newIndex]);
    };
    const handleNextImage = ()=>{
        const newIndex = currentImageIndex < imageUrls.length - 1 ? currentImageIndex + 1 : 0;
        setCurrentImageIndex(newIndex);
        setSelectedImage(imageUrls[newIndex]);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenderImageUrl.useEffect": ()=>{
            if (selectedImage) {
                window.addEventListener('keydown', handleKeyDown);
                return ({
                    "RenderImageUrl.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
                })["RenderImageUrl.useEffect"];
            }
        }
    }["RenderImageUrl.useEffect"], [
        selectedImage,
        currentImageIndex
    ]);
    const handleImageClick = (url, index)=>{
        setCurrentImageIndex(index);
        setSelectedImage(url);
    };
    if (!Array.isArray(imageUrls) || !imageUrls.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-6xl mx-auto pb-6 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: sliderRef,
                        className: "keen-slider overflow-hidden rounded-lg",
                        onMouseEnter: ()=>timer.current && clearInterval(timer.current),
                        onMouseLeave: ()=>{
                            timer.current = setInterval(()=>{
                                if (slider?.current) {
                                    slider.current.next();
                                }
                            }, 3000);
                        },
                        children: imageUrls.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "keen-slider__slide flex justify-center items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full aspect-[17/7] overflow-hidden rounded-md shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: url,
                                        alt: `Imagem ${index + 1}`,
                                        className: "w-full h-full object-cover cursor-pointer hover:opacity-90 transition",
                                        onClick: ()=>handleImageClick(url, index)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    loaded && slider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>slider.current?.prev(),
                                className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition hidden group-hover:block",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>slider.current?.next(),
                                className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition hidden group-hover:block",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
                onClick: ()=>setSelectedImage(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-[90vw] max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedImage,
                            alt: "Imagem ampliada",
                            className: "max-w-full max-h-[90vh] object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedImage(null),
                            className: "absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                handlePrevImage();
                            },
                            className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75",
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleNextImage();
                            },
                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75",
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderImageUrl.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(RenderImageUrl, "fSMy/96+u7LTgyG62kx/owPGFmA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$keen$2d$slider$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeenSlider"]
    ];
});
_c = RenderImageUrl;
const __TURBOPACK__default__export__ = RenderImageUrl;
var _c;
__turbopack_context__.k.register(_c, "RenderImageUrl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderMessage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const RenderMessage = ({ value, key })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        flex flex-wrap py-2 mb-2 text-justify 
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.large}
      `,
        children: value
    }, key, false, {
        fileName: "[project]/src/components/renderMessage/renderMessage.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(RenderMessage, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderMessage;
const __TURBOPACK__default__export__ = RenderMessage;
var _c;
__turbopack_context__.k.register(_c, "RenderMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/interface/tableSchema.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ETableType": (()=>ETableType)
});
var ETableType = /*#__PURE__*/ function(ETableType) {
    ETableType["error"] = "error";
    ETableType["schema"] = "schema";
    return ETableType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file TableHeader.tsx
 * @description Componente responsável por renderizar o cabeçalho da tabela de schema.
 * Importa as interfaces e hooks necessários para a renderização do cabeçalho.
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const TableHeader = ({ fields })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: themeSelected.colors.backgroundTableHeader,
            children: fields[0] && Object.keys(fields[0]).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                    className: `
                px-4 py-2 border-b text-left uppercase tracking-wider
                ${themeSelected.typography.fontSize.small}
                ${themeSelected.colors.text}
                ${themeSelected.borders.default}
              `,
                    children: key.charAt(0).toUpperCase() + key.slice(1)
                }, key, false, {
                    fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableHeader.tsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableHeader.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableHeader.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
};
_s(TableHeader, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = TableHeader;
const __TURBOPACK__default__export__ = TableHeader;
var _c;
__turbopack_context__.k.register(_c, "TableHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableCell.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file TableCell.tsx
 * @description Componente responsável por renderizar uma célula da tabela de schema.
 * Recebe o conteúdo, largura e tema selecionado para exibir as informações formatadas.
 * Suporta tanto conteúdo textual quanto objetos JSON.
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TableCell = ({ content, width, themeSelected })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        className: `
      ${width} px-4 py-2 border-b break-words
      ${themeSelected.borders.default}
      ${themeSelected.typography.fontSize.small}
      ${themeSelected.colors.text}
    `,
        children: typeof content === 'object' ? JSON.stringify(content) : content
    }, void 0, false, {
        fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableCell.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
_c = TableCell;
const __TURBOPACK__default__export__ = TableCell;
var _c;
__turbopack_context__.k.register(_c, "TableCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file TableRow.tsx
 * @description Componente responsável por renderizar uma linha da tabela de schema.
 * Recebe os dados do campo, índice e tema selecionado para exibir as informações formatadas.
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableCell.tsx [app-client] (ecmascript)");
;
;
const TableRow = ({ field, index, themeSelected })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: themeSelected.colors.backgroundTable,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: String(field.field),
                width: "w-[20%]",
                themeSelected: themeSelected
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: String(field.type),
                width: "w-[20%]",
                themeSelected: themeSelected
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: String(field.example),
                width: "w-[20%]",
                themeSelected: themeSelected
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: String(field.description),
                width: "w-[25%]",
                themeSelected: themeSelected
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableCell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: String(field.source),
                width: "w-[15%]",
                themeSelected: themeSelected
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
_c = TableRow;
const __TURBOPACK__default__export__ = TableRow;
var _c;
__turbopack_context__.k.register(_c, "TableRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTable/components/renderTableSchema/renderTableSchema.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file renderTableSchema.tsx
 * @description Componente responsável por renderizar uma tabela de schema com campos personalizados.
 * Exibe informações como campo, tipo, exemplo, descrição e fonte em um formato tabular.
 * Utiliza temas dinâmicos para estilização e suporta dados de exemplo em formato JSON.
 */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTable/components/renderTableSchema/components/TableRow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
// Componente principal que renderiza a tabela de schema
// Recebe os campos e uma chave única como props
// Utiliza o hook useTheme para acessar o tema atual
const RenderTableSchema = ({ fields, key })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return(// Container com scroll horizontal para tabelas grandes
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: `
        w-full
        ${themeSelected.colors.backgroundTable}
        ${themeSelected.borderRadius.xxlarge}
      `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    fields: fields
                }, void 0, false, {
                    fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/renderTableSchema.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: fields.map((field, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$components$2f$TableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            field: field,
                            index: index,
                            themeSelected: themeSelected
                        }, index, false, {
                            fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/renderTableSchema.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/renderTableSchema.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/renderTableSchema.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, key, false, {
        fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableSchema/renderTableSchema.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this));
};
_s(RenderTableSchema, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderTableSchema;
const __TURBOPACK__default__export__ = RenderTableSchema;
var _c;
__turbopack_context__.k.register(_c, "RenderTableSchema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTable/components/renderTableContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file renderTableContent.tsx
 * @description Componente responsável por renderizar o conteúdo da tabela baseado no tipo.
 * Faz o parse do JSON recebido e renderiza o componente apropriado de acordo com o tipo da tabela.
 * Atualmente suporta apenas tabelas do tipo schema.
 */ __turbopack_context__.s({
    "RenderTableContent": (()=>RenderTableContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interface/tableSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$renderTableSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTable/components/renderTableSchema/renderTableSchema.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const RenderTableContent = ({ value, key, setIsTableType })=>{
    _s();
    // Faz o parse do JSON apenas uma vez por valor
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RenderTableContent.useMemo[data]": ()=>{
            try {
                return JSON.parse(value);
            } catch  {
                return undefined;
            }
        }
    }["RenderTableContent.useMemo[data]"], [
        value
    ]);
    // Atualiza o tipo da tabela quando data mudar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenderTableContent.useEffect": ()=>{
            if (data) {
                setIsTableType(data.type);
            }
        }
    }["RenderTableContent.useEffect"], [
        data,
        setIsTableType
    ]);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    switch(data.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETableType"].schema:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableSchema$2f$renderTableSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fields: data.fields
            }, key, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/components/renderTableContent.tsx",
                lineNumber: 39,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    }
};
_s(RenderTableContent, "nx5ZQLFlP0w5z0OGiwlsv2nhYU0=");
_c = RenderTableContent;
var _c;
__turbopack_context__.k.register(_c, "RenderTableContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/strToITable.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file strToITable.ts
 * @description Este arquivo contém uma função utilitária que converte uma string JSON em um objeto ITable.
 * A função faz a validação do tipo de tabela e retorna um objeto ITable com os campos apropriados.
 * Se houver erro na conversão ou o tipo não for schema, retorna um objeto de erro.
 */ __turbopack_context__.s({
    "strToITable": (()=>strToITable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interface/tableSchema.ts [app-client] (ecmascript)");
;
const strToITable = (value)=>{
    try {
        const data = JSON.parse(value);
        if (data.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETableType"].schema) {
            return data;
        }
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETableType"].error,
            fields: []
        };
    } catch (error) {
        return {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETableType"].error,
            fields: []
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTable/modules/downloadTableSchema.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file downloadTableSchema.ts
 * @description Este módulo contém a função responsável por baixar o schema da tabela em formato CSV.
 * A função converte os dados da tabela em um formato CSV, cria um arquivo para download
 * e gerencia as mensagens de feedback para o usuário através de toasts.
 */ __turbopack_context__.s({
    "downloadTableSchema": (()=>downloadTableSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interface/tableSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/toast/slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$strToITable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/strToITable.ts [app-client] (ecmascript)");
;
;
;
const downloadTableSchema = (value, { dispatch })=>{
    if (!dispatch) return;
    try {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$strToITable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strToITable"])(value);
        if (data.type == __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETableType"].error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])({
                message: 'Não foi possível baixar!',
                type: 'error'
            }));
            return;
        }
        if (!data.fields || !Array.isArray(data.fields)) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])({
                message: 'Não foi possível baixar!',
                type: 'error'
            }));
            return;
        }
        const csvRows = [];
        // Cabeçalho dinâmico
        const header = Object.keys(data.fields[0] || {}).map((key)=>key.charAt(0).toUpperCase() + key.slice(1));
        csvRows.push(header.join(","));
        // Linhas
        data.fields.forEach((field)=>{
            csvRows.push(header.map((key)=>{
                const value = field[key.toLowerCase()];
                if (typeof value === 'object') return `"${JSON.stringify(value)}"`;
                return `"${value}"`;
            }).join(","));
        });
        const csvContent = csvRows.join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'tableSchema.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])({
            message: 'Download efetuado com sucesso!',
            type: 'success'
        }));
    } catch (error) {
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])({
            message: 'Não foi possível baixar!',
            type: 'error'
        }));
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTable/renderTable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * @file renderTable.tsx
 * @description Componente responsável por renderizar uma tabela com funcionalidade de download.
 * Permite visualizar dados em formato de tabela e baixar o schema em formato CSV.
 * Implementa proteção contra múltiplos cliques no botão de download.
 */ /* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interface/tableSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTable/components/renderTableContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$modules$2f$downloadTableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTable/modules/downloadTableSchema.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const RenderTable = ({ value, key })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [isTableType, setIsTableType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    let lastClickTime = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col my-4 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Tabela",
            rightIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                    size: 20,
                    className: `
            cursor-pointer
          ${themeSelected.colors.text} 
        `,
                    onClick: ()=>{
                        const now = Date.now();
                        if (now - lastClickTime < 3000) return; // Previne múltiplos cliques em 1 segundo
                        lastClickTime = now;
                        if (isTableType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$tableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ETableType"].schema && typeof value === 'string') {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$modules$2f$downloadTableSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadTableSchema"])(value, {
                                dispatch
                            });
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/renderMessage/renderTable/renderTable.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/renderTable.tsx",
                lineNumber: 29,
                columnNumber: 18
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$components$2f$renderTableContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTableContent"], {
                value: value,
                setIsTableType: setIsTableType
            }, key, false, {
                fileName: "[project]/src/components/renderMessage/renderTable/renderTable.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/renderMessage/renderTable/renderTable.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/renderMessage/renderTable/renderTable.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
};
_s(RenderTable, "i0gQmQxJe5LDxUvqjeLyDwmCEUI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = RenderTable;
const __TURBOPACK__default__export__ = RenderTable;
var _c;
__turbopack_context__.k.register(_c, "RenderTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderText.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const RenderText = ({ value, key })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        flex flex-wrap py-2 text-justify 
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.large}
      `,
        children: value
    }, key, false, {
        fileName: "[project]/src/components/renderMessage/renderText.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(RenderText, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderText;
const __TURBOPACK__default__export__ = RenderText;
var _c;
__turbopack_context__.k.register(_c, "RenderText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderTitle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const RenderTitle = ({ value, key })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        flex flex-wrap text-2xl font-bold py-2 pt-5
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.xxlarge}
      `,
        children: value
    }, key, false, {
        fileName: "[project]/src/components/renderMessage/renderTitle.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(RenderTitle, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderTitle;
const __TURBOPACK__default__export__ = RenderTitle;
var _c;
__turbopack_context__.k.register(_c, "RenderTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/renderUser.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
;
var _s = __turbopack_context__.k.signature();
;
;
const RenderUser = ({ key, value, onReplay })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        flex flex-wrap text-justify items-center flex-row justify-between mt-1 mb-2 py-2 pr-3  
        ${themeSelected.colors.backgroundTertiary} 
        ${themeSelected.borderRadius.xxlarge} 
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          pr-1 pl-1 mx-2
          ${themeSelected.typography.fontSize.medium} 
          ${themeSelected.colors.text} 
        `,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderUser.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                size: 20,
                className: `
          cursor-pointer
          ${themeSelected.colors.text} 
        `,
                onClick: onReplay ? ()=>onReplay(value) : undefined
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/renderUser.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, key, true, {
        fileName: "[project]/src/components/renderMessage/renderUser.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_s(RenderUser, "NbQU9S74sK9CXGSLLRGcNQkjWpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = RenderUser;
const __TURBOPACK__default__export__ = RenderUser;
var _c;
__turbopack_context__.k.register(_c, "RenderUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessage/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/interface/chats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderCode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderDivider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderDivider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderGroupLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderGroupLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderImageUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderImageUrl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderMessage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$renderTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTable/renderTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/renderUser.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const DisplaySentenseUser = (data)=>{
    switch(data.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].user:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 17,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].message:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].title:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 21,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].link:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 23,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].groupLink:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderGroupLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 25,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].table:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderTable$2f$renderTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 27,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].text:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 29,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].code:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 31,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].divider:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderDivider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 33,
                columnNumber: 14
            }, this);
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$interface$2f$chats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMessageType"].imageUrl:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$renderImageUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...data
            }, void 0, false, {
                fileName: "[project]/src/components/renderMessage/index.tsx",
                lineNumber: 35,
                columnNumber: 14
            }, this);
    }
};
_c = DisplaySentenseUser;
const __TURBOPACK__default__export__ = DisplaySentenseUser;
var _c;
__turbopack_context__.k.register(_c, "DisplaySentenseUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/renderMessageChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sendMessage$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/sendMessage/slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/toast/slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessage/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const RenderMessageChat = ({ messageResponse })=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatSelectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "RenderMessageChat.useSelector[chatSelectedState]": (state)=>state.chatSelected
    }["RenderMessageChat.useSelector[chatSelectedState]"]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const formattedMessageToMessage = async (responses)=>{
        try {
            let messages = [];
            if (Array.isArray(responses)) {
                for (const response of responses){
                    messages.push({
                        type: "user",
                        value: response.message,
                        onReplay: ()=>{
                            if (!chatSelectedState.chatId) {
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])({
                                    message: 'Selecione um chat para enviar a mensagem',
                                    type: 'error'
                                }));
                                return;
                            }
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sendMessage$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendMessageRequest"])({
                                chatId: chatSelectedState.chatId,
                                message: response.message
                            }));
                        }
                    });
                    if (Array.isArray(responses)) {
                        for (const responseItem of response.response){
                            messages.push({
                                type: responseItem.type,
                                value: responseItem.value
                            });
                        }
                    }
                    messages.push({
                        type: "divider",
                        value: ""
                    });
                }
            }
            const processedMessages = [];
            let currentLinkGroup = [];
            for(let i = 0; i < messages.length; i++){
                const currentMessage = messages[i];
                if (currentMessage.type === 'link') {
                    if (typeof currentMessage.value === 'string') {
                        currentLinkGroup.push(currentMessage.value);
                    }
                    if (i === messages.length - 1 || messages[i + 1].type !== 'link') {
                        if (currentLinkGroup.length > 1) {
                            processedMessages.push({
                                type: 'groupLink',
                                value: currentLinkGroup
                            });
                            currentLinkGroup = [];
                        } else {
                            processedMessages.push(currentMessage);
                        }
                    }
                } else {
                    processedMessages.push(currentMessage);
                }
            }
            messages = processedMessages;
            setMessages(messages);
            return messages;
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$toast$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])({
                message: 'Erro ao processar as mensagens',
                type: 'error'
            }));
            console.error('Erro ao processar mensagens:', error);
            return [];
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenderMessageChat.useEffect": ()=>{
            formattedMessageToMessage(chatSelectedState?.messages);
        }
    }["RenderMessageChat.useEffect"], [
        chatSelectedState?.messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenderMessageChat.useEffect": ()=>{
            if (messagesRef.current) {
                messagesRef.current.scrollTo({
                    top: messagesRef.current.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }["RenderMessageChat.useEffect"], [
        messages,
        messageResponse
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: messagesRef,
        className: `flex h-full w-full overflow-y-auto px-[6%] pt-10 pb-10`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full",
            children: messages.length > 0 && messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-row ${message.type === 'user' ? 'justify-end' : 'justify-start'} items-center ${themeSelected.spacing.msmall}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessage$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...message
                    }, `${message.type}-${index}`, false, {
                        fileName: "[project]/src/components/renderMessageChat.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/renderMessageChat.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/renderMessageChat.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/renderMessageChat.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
};
_s(RenderMessageChat, "Q+4z6ZafvH30MiUkQav/bmMM2I8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = RenderMessageChat;
const __TURBOPACK__default__export__ = RenderMessageChat;
var _c;
__turbopack_context__.k.register(_c, "RenderMessageChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/customChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$leftSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/leftSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chatSelected$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chatSelected/slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sendMessage$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/sendMessage/slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/themes/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inputMessage$2f$inputMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inputMessage/inputMessage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$processMessageStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/processMessageStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessageChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderMessageChat.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const CustomChat = ()=>{
    _s();
    const { themeSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [isSidebarVisible, setIsSidebarVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const chatSelectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "CustomChat.useSelector[chatSelectedState]": (state)=>state.chatSelected
    }["CustomChat.useSelector[chatSelectedState]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomChat.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chatSelected$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatSelectedMessageClear"])());
        }
    }["CustomChat.useEffect"], []);
    const handleChatSelect = (chatId)=>{
        console.log('Chat selecionado:', chatId);
    };
    const toggleSidebar = ()=>{
        setIsSidebarVisible(!isSidebarVisible);
    };
    const handleSubmit = (e)=>{
        e?.preventDefault();
        if (!message.trim()) return;
        if (!chatSelectedState.chatId) {
            console.error('Chat ID não selecionado');
            return;
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$sendMessage$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendMessageRequest"])({
            chatId: chatSelectedState.chatId,
            message
        }));
        setMessage('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex w-full h-screen ${themeSelected.colors.background}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$leftSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSelectChat: handleChatSelect,
                isSidebarVisible: isSidebarVisible
            }, void 0, false, {
                fileName: "[project]/src/components/customChat.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full  flex-col relative ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            toggleSidebar: toggleSidebar,
                            isSidebarVisible: isSidebarVisible
                        }, void 0, false, {
                            fileName: "[project]/src/components/customChat.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$processMessageStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/customChat.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderMessageChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/customChat.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inputMessage$2f$inputMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: message,
                            onChange: (e)=>setMessage(e.target.value),
                            onSubmit: handleSubmit
                        }, void 0, false, {
                            fileName: "[project]/src/components/customChat.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/customChat.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/customChat.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/customChat.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(CustomChat, "6+JC8LE6Go91xrV3T8ear+ISjqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$themes$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = CustomChat;
const __TURBOPACK__default__export__ = CustomChat;
var _c;
__turbopack_context__.k.register(_c, "CustomChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/chat/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChatPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/session/slice.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ChatPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { valid, loading, token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ChatPage.useSelector": (state)=>state.session
    }["ChatPage.useSelector"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$session$2f$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSessionRequest"])());
        }
    }["ChatPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            if (!loading && !valid || !token) {
                router.push('/splash');
            }
        }
    }["ChatPage.useEffect"], [
        loading,
        valid,
        router,
        token
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/chat/page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(ChatPage, "HYCxvWfQ+4HVvayCkPMeb+iYUf0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_7e0937e9._.js.map