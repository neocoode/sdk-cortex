
export interface ResponseItem {
    type:  string,
	origin:  string,
	value:  string,
}

export interface CoreMessageResponse {
    title: string,
	message: string,
	resume: string,
	response: ResponseItem[],
}

