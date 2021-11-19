import SideBar from './components/SideBar'
import Main from './components/Main'

function App() {
  return (
    <div className="App bg-gray-200">
      <div className="flex items-end justify-end">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
