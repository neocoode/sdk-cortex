
export interface ResponseItem {
    Type:  string,
	Origin:  string,
	Value:  string,
}

export interface CoreMessageResponse {
    Title: string,
	Message: string,
	Resume: string,
	Response: ResponseItem[],
}

