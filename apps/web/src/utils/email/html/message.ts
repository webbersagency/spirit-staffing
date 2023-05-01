import juice from 'juice'
import layout from './layout'
import header from './header'
import footer from './footer'

/**
 * Build a HTML email.
 * Table copy can be wrapped in a div with class <div class="table"></div>
 *
 * @param slot
 * @returns {string}
 */
const message = (slot: string) => juice(layout(header, slot, footer))

export default message
