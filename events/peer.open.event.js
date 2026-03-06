export class PeerOpenEvent extends CustomEvent {
  static NAME = 'peer.open'

  constructor(open) {
    super(PeerOpenEvent.NAME, { detail: { open } })
  }
}
