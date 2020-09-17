import React, { Component } from 'react';

const styleMrg = {
    margin: '20px 0 4px 0',
};


const linksList = [
    {
        title: 'Asynchronous Javascript Internals',
        url: 'https://github.com/fjcalzado/Asynchronous-Javascript',
        group: 'Know Your Concepts (KYC)', 
    },
    {
        title: 'Javascript : Fix Memory Problem',
        url: 'https://developers.google.com/web/tools/chrome-devtools/memory-problems',
        group: 'Javascript Performance',
    },
    { title: 'Fast properties in V8', url: 'https://v8.dev/blog/fast-properties', group: 'Javascript Performance' },
    {
        title: 'A tour of V8: object representation',
        url: 'http://jayconrod.com/posts/52/a-tour-of-v8--object-representation',
        group: 'Javascript Performance',
    },
    { title: 'jsperf.com - Javascript Performance Playground', url: 'https://jsperf.com/', group: 'Javascript Performance'},
    { title: 'jsbench.me - JavaScript performance benchmarking playground', url: 'https://jsbench.me/', group: 'Javascript Performance' },
    { title: 'Javascript Closures', url: 'https://dmitryfrank.com/articles/js_closures', group: 'Javascript Closures' },
    {
        title: 'Grokking V8 closures for fun (and profit?)',
        url: 'https://mrale.ph/blog/2012/09/23/grokking-v8-closures-for-fun.html',
        group: 'Javascript Closures',
    },
    {
        title: 'Git Essential Training: The Basics',
        url: 'https://www.linkedin.com/learning/git-essential-training-the-basics/the-explore-california-website',
        group: 'Git Essential Training',
    },
    {
        title: 'How Git Works',
        url: 'https://www.pluralsight.com/courses/how-git-works',
        group: 'Git Essential Training',
    },
    {
        title: 'Learning React.js',
        url: 'https://www.linkedin.com/learning/learning-react-js-4/render-multiple-react-elements',
        group: 'React',
    },
    {
        title: 'React.js Essential Training',
        url: 'https://www.linkedin.com/learning/react-js-essential-training-3/introducing-state',
        group: 'React',
    },
    {
        title: 'Learning Amazon Web Services (AWS) for Developers',
        url: 'https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers/what-you-should-know',
        group: 'AWS',
    },
    {
        title: 'Learning Fullstack : MongoDB,Node and React',
        url: 'https://www.linkedin.com/learning/learning-full-stack-javascript-development-mongodb-node-and-react/modern-javascript',
        group: 'Node & React',
    },
    {
        title: 'Learning Apollo',
        url: 'https://www.linkedin.com/learning/learning-apollo/course-prerequisites',
        group: 'Apollo & GraphQL',
    },
    {
        title: 'Programming Fundations:Design Patterns',
        url: 'https://www.linkedin.com/learning/programming-foundations-design-patterns-2/what-you-should-know',
        group: 'Design Patterns',
    },
    {
        title: 'Design Patterns in Plain English | Mosh Hamedani',
        url: 'https://www.youtube.com/watch?v=NU_1StN5Tkk&t=1150s',
        group: 'Design Patterns',
    },
    { title: 'Graph Editor', url: 'https://www.yworks.com/products/yed', group: 'Drawing Editors for Diagrams' },
    { title: 'ES6 - New Features', url: 'http://es6-features.org/#Constants', group: 'ES6' },
    { title: 'ES6 - 2020', url: 'https://tc39.es/ecma262/#sec-abstract-equality-comparison', group: 'ES6' },
    { title: 'System Design', url: 'https://github.com/kvasukib/system-design-primer#system-design-topics-start-here', group: 'System Design' },
];

const Group = props => {
    return <h2 style ={styleMrg}> { props.title } </h2>;
};

const Link = props => {
    const { title, url } = props;
    return ( 
        <section>
            <a href = { url } target="_blank"> { title } </a> 
        </section>
    );
};

class Bookmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            groupsCount: 0,
        };
        console.log('Initialising State!!!');
    }

    componentDidMount() {
        console.log('ComponentDidMount is called!!!');
        console.log(`${this.state.groups}`);
        this.setState(prevState => ({
            groupsCount: prevState.groups.length,
            groups: [],
        }));
        console.log(`${this.state.groups.length}`);
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate is called!!!');
        console.log(`${this.state.groups}`);
    }

    render() {
        // console.log(this.props);
        const { links } = this.props;
        return ( 
            <div>
                <h1> Total Groups: { this.state.groupsCount } </h1> 
                {
                    links.map((link, i) => {
                        if (!this.state.groups.includes(link.group)) {
                            this.state.groups.push(link.group); //workaround logic
                            return ( 
                                <div key = { i }><Group title = { link.group }/><Link title={link.title} url={link.url} /></div>
                            );
                        }
                        return ( 
                            <div key = { i } ><Link title = { link.title } url = { link.url }/></div>
                        );
                    })
                } 
            </div>
        );
    }
}


function App() {
  return (
   <Bookmarks links={linksList} />
  );
}

export default App;
