import Vue from 'vue'
import { setup } from '../lib'
import { storiesOf } from '../lib/story'
import ColorBox from './example/ColorBox'
import TypoTest from './example/TypoTest'

import ColorStory from './example/ColorBox.story'
storiesOf('atoms/ColorBox', ColorBox)
    .add('RED', { props: { color: 'red' }, slot: 'message', detail: 'is Red' })
    .add('BLUE', { props: { color: 'blue' }, detail: 'is Blue' })
storiesOf('atoms/TypoTest', TypoTest)
    .add('t-1', { props: { type: '1' }, slot: 'text' })
    .add('t-2', { props: { type: '2' }, slot: 'text' })
    .add('t-3', { props: { type: '3', bold: true }, slot: 'text bold' })
    .add('t-4', { props: { type: '4', thin: true }, slot: 'text thin' })
    .add('text-1', { props: { type: 'text-1' }, slot: 'text' })
    .add('text-2', { props: { type: 'text-2' }, slot: 'text' })
    .add('text-3', { props: { type: 'text-3' }, slot: 'text' })
    .add('text-4', { props: { type: 'text-4' }, slot: 'text' })
storiesOf('molecules/ColorBox3', ColorBox).addExample('I will arrange the components for explanation', ColorStory)
storiesOf('molecules/ddd/ColorBox4', ColorBox)
storiesOf('orgamisms/ColorBox4', ColorBox)
storiesOf('templates/ColorBox4', ColorBox)

setup(Vue, {
    icons: {
        atoms: require('./icon/atom.svg'),
        molecules: require('./icon/molecule.svg'),
        orgamisms: require('./icon/organism.svg'),
        templates: require('./icon/template.svg'),
    },
})
