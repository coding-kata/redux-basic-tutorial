import React, {Component, PropTypes} from 'react'

export default class Footer extends Component {
    renderFilter(filter, name, className) {
        if (filter === this.props.filter) {
            return name
        }

        return (
            <a href='#'
               className={className}
               onClick={e => {
                   e.preventDefault();
                   this.props.onFilterChange(filter)
               }}>
                {name}
            </a>
        )
    }

    render() {
        return (
            <p className="Footer">
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All', 'Footer-all')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed', 'Footer-completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active', 'Footer-active')}
                .
            </p>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};