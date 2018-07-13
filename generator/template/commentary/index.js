import Vue from 'vue'
import { setup, storiesOf } from 'vue-cli-plugin-commentary/lib'
import ColorBox from './example/ColorBox'
import ColorStory from './example/ColorBox.story'
storiesOf('atoms/ColorBox', ColorBox)
    .add('赤の説明が出てるはず', { props: { color: 'red' }, detail: '赤だよ' })
    .add('青の説明', { props: { color: 'blue' }, detail: '青だよ' })

storiesOf('molecules/ColorBox3', ColorBox).addExample('説明用のコンポーネント配置してみる', ColorStory)
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
