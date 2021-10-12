
function Button(props) {
  
	return (
    <button onClick={props.changeCounter}> Increment counter value </button>
    );
}


function Display(props) {
  
	return (
    <div>value : {props.message} </div>
    );
}


function App() {
  
  const [counter, setCounter]=useState(0) 
  const incrementor = () =>  setCounter(counter+1)
  
	return (
    <div>
      <Button changeCounter={incrementor}/>
      <Display message={counter}/>
    </div>
    );
}


ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
