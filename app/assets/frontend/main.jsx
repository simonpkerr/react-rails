import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

let mockTweets = [
  {
    id: 1,
    name: 'si kerr',
    body: 'tweet body 1'
  },
  {
    id: 2,
    name: 'pete kerr',
    body: 'tweet body 2'
  },
  {
    id: 3,
    name: 'tom kerr',
    body: 'tweet body 3'
  }
];

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <TweetBox />
                <TweetsList tweets={mockTweets} />
            </div>
        );
    };
}

let documentReady = () => {
    ReactDOM.render(
        <Main />,
        document.getElementById('react')
    );
};

$(documentReady);
