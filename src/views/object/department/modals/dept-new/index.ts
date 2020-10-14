import {createApp, h, App} from 'vue'

import {ModalProps} from './props'

import ModalComponent from './dept-new.vue'

let ModalComponentInstance: App<Element> | null = null
let wrapperEl: HTMLElement | null = null

export const useDeptNew = (props: ModalProps) => {

    const bodyClick = () => {
        ModalComponentInstance && wrapperEl && ModalComponentInstance.unmount(wrapperEl);
        document.body.removeEventListener('click', bodyClick);
        document.body.removeEventListener('scroll', bodyClick);
        ModalComponentInstance = null;
        wrapperEl?.remove()
    }

    bodyClick()

    if (!ModalComponentInstance) {
        ModalComponentInstance = createApp({
            render() {
                return h(ModalComponent, props)
            }
        })
        wrapperEl = document.createElement('div')
        document.body.appendChild(wrapperEl)
        ModalComponentInstance.mount(wrapperEl)
    }

    document.body.addEventListener('click', bodyClick);
    document.body.addEventListener('scroll', bodyClick);
}


