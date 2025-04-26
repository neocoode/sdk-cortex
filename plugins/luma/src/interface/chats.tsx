
export interface ResponseItem {
	type: string,
	origin: string,
	value: string,
}

export interface CoreMessageResponse {
	title: string,
	message: string,
	resume: string,
	response: ResponseItem[],
}

export enum EMessageType {
	user = 'user',
	message = 'message',
	title = 'title',
	link = 'link',
	table = 'table',
	text = 'text',
	code = 'code',
	divider = 'divider',
}

export interface IResponseChat {
	type: EMessageType | string;
	value: string;
}

