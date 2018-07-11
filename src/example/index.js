import { storiesOf } from '../../lib/story'
import ColorBox from './ColorBox'
storiesOf('atoms/ColorBox', ColorBox)
    .add('赤の説明が出てるはず', { props: { color: 'red' }, detail: '赤だよ' })
    .add('青の説明', { props: { color: 'blue' }, detail: '青だよ' })
