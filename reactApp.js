class Team extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
    }

    shotHandler = () => {
        
        this.setState((state, props) => ({
            shots: state.shots + 1,
            score: Math.random() > 0.5 ? state.score + 1 : state.score
        }))
    }

    resetHandler = () => {

        this.setState((state, props) => ({
            shots: 0,
            score: 0
        }))
    }
    render() {
        return (
            
            <div className="Team">
                <h2>{this.props.name}</h2>
                <div className="id">
                    <img src={this.props.logo} alt={this.props.name} width="200px" height="200px"  />
                </div>
                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>
                <button onClick={this.shotHandler}>Shoot</button>
            </div>
        )
    }
}



function App(props){

    function refreshPage() {
        window.location.reload(false);
      }

    return (
      <div className="App">
            <button onClick={refreshPage}>Refresh Page</button>
            <h1>THIS IS THE ULTIMATE SHOWDOWN</h1>
            <div className="teams">
                <div className="left">
                    <Team
                        name="Conway Wampus Cats"
                        logo="https://pbs.twimg.com/profile_images/1111999900185751553/Oa_5lGTf_400x400.jpg" />
                </div>
                <div className="right">
                <Team
                        name="Butte Pirates"
                        logo="https://pbs.twimg.com/media/BG9MvCQCUAAWoUb.jpg" />
                </div>
            </div>
      </div>
    )
  }
  
  //Render the application
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );