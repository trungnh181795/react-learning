class DataSource {
    constructor() {
        this.comments = [
            {
                id: 1,
                text: 'Hello, this is a comment!'
            },
            {
                id: 2,
                text: 'Hello, this is an other comment!'
            },
        ]
        this.blogPost = [
            {
                id: 1,
                text: 'Hi, this is a blog post!'
            },
            {
                id: 2,
                text: 'Hi, this is an other blog post!'
            }
        ]
    }

    getComments() {
        return this.comment
    }

    getBlogPost(id) {
        return this.blogPost[id]
    }

}

export default DataSource;