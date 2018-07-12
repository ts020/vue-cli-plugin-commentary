import Vue from 'vue'
import { setup } from '../lib'
import { storiesOf } from '../lib/story'
import ColorBox from './example/ColorBox'
import ColorStory from './example/ColorBox.story'
storiesOf('atoms/ColorBox', ColorBox)
    .add('赤の説明が出てるはず', { props: { color: 'red' }, detail: '赤だよ' })
    .add('青の説明', { props: { color: 'blue' }, detail: '青だよ' })
    .addExample('説明用のコンポーネント配置してみる', ColorStory)

setup(Vue)
