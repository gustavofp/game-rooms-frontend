import { SocketClient, SocketConnection } from "infra/socket-client";
import { Channel, Socket } from 'phoenix';


export default class SocketClientPhoenix implements SocketClient {
    private socket: Socket
    private channel: Channel | undefined
    constructor(private url: string) {
        this.socket = new Socket(url)
        this.socket.connect()
    }

    async join(name: string): Promise<void> {
        this.channel = this.socket.channel(name, {})
        this.channel.join()

        this.channel.onError((err) => { throw new Error('Socket error') })
    }

    handleEvent(event: string, callback: (data: any) => void): void {
        this.channel?.on(event, callback)
    }
}