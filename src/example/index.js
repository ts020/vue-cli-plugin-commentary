import { storiesOf } from '../../lib/story'
import ColorBox from './ColorBox'
import Colors from './colors.story.vue'
import Colors2 from './colors2.story.vue'
storiesOf('atoms/ColorBox', ColorBox)
    .add('aa', Colors)
    .add('bb', Colors2)
