import { type FunctionComponent, render } from 'preact'
import Atrament from 'atrament'
import { html, } from 'htm/preact'
import { useEffect } from 'preact/hooks'
import { waitFor } from '@bicycle-codes/dom'
import { example } from '../src/index.js'
import './style.css'

example()

const Example:FunctionComponent<unknown> = function () {
    useEffect(() => {
        (async () => {
            const canvas = await waitFor('canvas')
            console.log('canvas', canvas)
            const atrament = new Atrament(canvas, {
                width: 400,
                height: 400,
                color: 'orange'
            })
            console.log('atrrr', atrament)
        })()
    }, [])

    return html`<canvas width=400 height=400></canvas>`
}

render(html`<${Example} />`, document.getElementById('root')!)
