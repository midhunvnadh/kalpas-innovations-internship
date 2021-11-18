import SideBar from './components/SideBar'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-center">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
