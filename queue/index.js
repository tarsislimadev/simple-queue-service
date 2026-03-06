import { HTML } from '../libs/afrontend/index.js'
import { Page } from '../elements/page.element.js'

HTML.fromId('app').append(new Page())
HTML.fromElement(document.body).setStyle('margin', '0')
