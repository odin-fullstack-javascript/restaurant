import Core from './core/Core.js'

const PageOne = (context) => {
    const prototype = Core()

    const title = context?.title || ''

    function renderContent () { 
        const template = /*html*/ `
            <h1 class="title">This is better ${title}</h1>
        `
        this.render(template)
    }

    return {...prototype, renderContent}
}

PageOne({title: 'Rose Mary'}).renderContent()