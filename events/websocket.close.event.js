export class WebSocketCloseEvent extends CustomEvent {
  static NAME = 'websocket.close'

  constructor(close) {
    super(WebSocketCloseEvent.name, { detail: { close } })
  }
}
