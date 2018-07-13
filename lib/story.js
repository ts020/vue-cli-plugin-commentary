class Story {
    constructor(name, component) {
        this.name = name
        this.component = component
        this.subStories = []
    }

    add(name, option) {
        this.subStories.push({
            type: 'props',
            name: name,
            props: option.props,
            detail: option.detail,
        })
        return this
    }

    addExample(name, view) {
        if (!view.name) {
            view.name = (
                this.name +
                '-' +
                Math.random()
                    .toString()
                    .split('.')
                    .join('')
            )
                .toLowerCase()
                .split('/')
                .join('-')
        }
        this.subStories.push({
            type: 'example',
            name: name,
            view: view,
        })
        return this
    }
}

export const stories = []
export function storiesOf(name, component) {
    const story = new Story(name, component)
    stories.push(story)
    return story
}

export function getStories() {
    return stories
}
