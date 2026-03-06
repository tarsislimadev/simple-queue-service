import { HTML } from '../libs/afrontend/index.js'
import { Page as PageElements } from '../elements/page.element.js'
import { PeerOpenEvent } from '../events/peer.open.event.js'

class Page extends PageElements {
  constructor() {
    super()
    this.setEvents()
  }

  setEvents() {
    super.setEvents()

    window.addEventListener(PeerOpenEvent.NAME, (event) => {
      console.log(PeerOpenEvent.NAME, (event))

      this.queue_id = this.getUrlId()
      this.peer.conect(this.queue_id)
    })
  }

  getUrlId() {
    return new URL(window.location).searchParams.get('id')
  }
}

HTML.fromId('app').append(new Page())
HTML.fromElement(document.body).setStyle('margin', '0')
