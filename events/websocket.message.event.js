export class WebSocketMessageEvent extends CustomEvent {
  static NAME = 'websocket.message'

  constructor(message) {
    super(WebSocketMessageEvent.NAME, { detail: { message } })
  }
}
