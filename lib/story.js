class Story {
    constructor(name, component) {
        this.name = name
        this.component = component
        this.subStories = []
    }

    add(name, view) {
        if (!view.name) {
            view.name = (this.name + '-' + name)
                .toLowerCase()
                .split('/')
                .join('-')
        }
        this.subStories.push({
            name: name,
            view: view,
        })
        return this
    }
}

const stories = []
export function storiesOf(name, component) {
    const story = new Story(name, component)
    stories.push(story)
    return story
}

export function action(message) {
    console.log(message)
}

export function getStories() {
    return stories
}
