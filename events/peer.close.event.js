export class PeerCloseEvent extends CustomEvent {
  static NAME = 'peer.close'

  constructor(close) {
    super(PeerCloseEvent.name, { detail: { close } })
  }
}
