export class PeerMessageEvent extends CustomEvent {
  static NAME = 'peer.message'

  constructor(message) {
    super(PeerMessageEvent.NAME, { detail: { message } })
  }
}
