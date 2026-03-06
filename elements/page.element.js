import { Peer } from '../libs/peer/index.js'
import { HTML } from '../libs/afrontend/index.js'
import { PeerOpenEvent } from '../events/peer.open.event.js'
import { PeerMessageEvent } from '../events/peer.message.event.js'
import { PeerErrorEvent } from '../events/peer.error.event.js'
import { PeerCloseEvent } from '../events/peer.close.event.js'

export class Page extends HTML {
  peer = new Peer()
  state = { id : null }

  constructor() {
    super()
    this.setEvents()
  }

  setEvents() {
    window.addEventListener(PeerOpenEvent.NAME, (event) => {
      console.log(PeerOpenEvent.NAME, (event))

      this.update({ id: event.detail.open })
    })

    window.addEventListener(PeerMessageEvent.NAME, (event) => {
      console.log(PeerMessageEvent.NAME, (event))
    })

    window.addEventListener(PeerErrorEvent.NAME, (event) => {
      console.log(PeerErrorEvent.NAME, (event))
    })

    window.addEventListener(PeerCloseEvent.NAME, (event) => {
      console.log(PeerCloseEvent.NAME, (event))
    })

    this.peer.on('open', (open) => window.dispatchEvent(new PeerOpenEvent(open)))
    this.peer.on('message', (message) => window.dispatchEvent(new PeerMessageEvent(message)))
    this.peer.on('error', (error) => window.dispatchEvent(new PeerErrorEvent(error)))
    this.peer.on('close', (close) => window.dispatchEvent(new PeerCloseEvent(close)))
  }

  onCreate() {
    super.onCreate()
  }

  update(data = {}) {
    if (data.id) this.setId(data.id)
  }

  setId(id) {
    this.state.id = id
  }
}
