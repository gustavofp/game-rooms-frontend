export interface HttpResponse {
    status: number,
    data: any
}

export interface HttpClient {
    get: (url: string) => Promise<HttpResponse>
}