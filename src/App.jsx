import './app.css';
import Unit from './components/Unit.jsx'

function App() {
    return <>
    <form>
        <fieldset className="general-info">
            <legend>General info</legend>
            <Unit type="text" id="name"/>
            <Unit type="email" id="email"/>
            <Unit type='phone' id="phone"/>
        </fieldset>
        <fieldset className="educational-info">
            <legend>educational info</legend>
            <Unit type="text" id="school-name"/>
            <Unit type="text" id="title-of-study"/>
            <Unit type='month' id="phone"/>
        </fieldset>
        <fieldset className="skill-info">
            <legend>skills</legend>
            <Unit type="text" id="primary"/>
            <Unit type="text" id="secondary"/>
            <Unit type='text' id="others"/>
        </fieldset>
    </form>
    {/* need to check out form from basics in TOP */}
    </>
}

export default App
