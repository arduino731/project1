import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <label> Movie Name</label>
      <input type="text" name="movieName" />
      <label>Review</label>
      <input type="text" name="review" />

      <button>Submit</button>
    </div>
  );
}

export default App;
