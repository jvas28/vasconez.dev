import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="text-gray-600 w-full p-2 text-center text-sm">
                © {new Date().getFullYear()}, Built with
                {' '}<i className="fas fa-heart"></i>{' & '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        )
    }
}
