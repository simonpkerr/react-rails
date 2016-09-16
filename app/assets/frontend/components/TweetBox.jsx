export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" />
            <label>What's happening?</label>
            <button className="btn right">Tweets</button>
          </div>
        </form>
      </div>
    )
  }
}
