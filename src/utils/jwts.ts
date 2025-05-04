/**
 * @file jwts.ts
 * @description Este arquivo contém funções utilitárias para manipulação de tokens JWT.
 * A função decodeToken decodifica um token JWT e retorna o payload com a estrutura definida.
 * Se houver erro na decodificação, retorna null.
 */

export interface ITokenPayload {
    userId: string;
    logged: boolean;
    sub: string;
    exp: number;
    iat: number;
}

export const decodeToken = (token: string | undefined): ITokenPayload  => {
    try {
        if (!token || token === '<nil>') {
            return {
                userId: '',   
                logged: false,
                sub: '',
                exp: 0,
                iat: 0,
            };
        }

        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );

        return JSON.parse(jsonPayload) as ITokenPayload;
    } catch (error) {
        console.error('Erro ao decodificar token:', error);
        return {
            userId: '',   
            logged: false,
            sub: '',
            exp: 0,
            iat: 0,
        };
    }
};
