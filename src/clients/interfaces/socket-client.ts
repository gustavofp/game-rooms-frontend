export interface SocketConnection {
    join: (name: string) => Promise<void>
    onMessage: (callback: Function) => void
}

export interface SocketClient {
    join: (name: string) => Promise<void>
    handleEvent: (event: string, callback: (data: any) => void) => void
}