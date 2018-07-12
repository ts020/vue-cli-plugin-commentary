import { storiesOf } from '../../lib/story'
import ColorBox from './ColorBox'
import ColorStory from './colors.story'
storiesOf('atoms/ColorBox', ColorBox)
    .add('赤の説明が出てるはず', { props: { color: 'red' }, detail: '赤だよ' })
    .add('青の説明', { props: { color: 'blue' }, detail: '青だよ' })
    .addExample('説明用のコンポーネント配置してみる', ColorStory)
