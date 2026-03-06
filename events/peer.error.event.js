export class PeerErrorEvent extends CustomEvent {
  static NAME = 'peer.error'

  constructor(error) {
    super(PeerErrorEvent.NAME, { detail: { error } })
  }
}
