export class WebSocketErrorEvent extends CustomEvent {
  static NAME = 'websocket.error'

  constructor(error) {
    super(WebSocketErrorEvent.NAME, { detail: { error } })
  }
}
