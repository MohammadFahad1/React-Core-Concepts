import './App.css';
import District from './components/District/District';
import LoadPosts from './components/LoadPosts/LoadPosts';

function App() {
  return (
    <div className='container'>
      <LoadPosts></LoadPosts>
      <District name="Dhaka" speciality="Capital"></District>
      <District name="Cumilla" speciality="District"></District>
    </div>
  );
}

export default App;
