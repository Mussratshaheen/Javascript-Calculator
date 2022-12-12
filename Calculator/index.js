
function App() {
    
    const [display, setDisplay] = React.useState('0');
    const handlenumber = (event) => {
        const number = event.target.textContent;
        if (display === '0') {
            setDisplay(number);

        } else {
            setDisplay(display + number);
        }

    };
    const handleoperator = (event) => {
        const operator = event.target.textContent;
        setDisplay(display + ' ' + operator + ' ');
    };
    
    const handleequal = () => {
        setDisplay(eval(display));
        
    };
    const handledecimal=()=>{
const array = display.split(' ');
const lastElement = array[array.length - 1];
    if(
        !lastElement.includes('.')){
        setDisplay(display + '.');
    }
};
const allClear=()=>{
    setDisplay('0');
};
const Clear=()=>{

    setDisplay(0);

};
    return (
        <div className="container">

            <div className="grid">
                <div className="padButton" id="display">
                    
                    
                    <div className="total">{display}</div>
                </div>
                <div onClick={allClear} className="padButton" id="clear">AC</div>
                <div  onClick={Clear}className="padButton" id="clean">C</div>
                <div onClick={handleoperator} className="padButton" id="divide">/</div>
                <div onClick={handleoperator} className="padButton" id="multiply">*</div>
                <div onClick={handlenumber} className="padButton" id="seven">7</div>
                <div onClick={handlenumber} className="padButton" id="eight">8</div>
                <div onClick={handlenumber} className="padButton" id="nine">9</div>
                <div onClick={handleoperator} className="padButton" id="subtract">-</div>
                <div onClick={handlenumber} className="padButton" id="four">4</div>
                <div onClick={handlenumber} className="padButton" id="five">5</div>
                <div onClick={handlenumber} className="padButton" id="six">6</div>
                <div onClick={handleoperator} className="padButton" id="add">+</div>
                <div onClick={handlenumber} className="padButton" id="one">1</div>
                <div onClick={handlenumber} className="padButton" id="two">2</div>
                <div onClick={handlenumber} className="padButton" id="three">3</div>
                <div onClick={handleequal} className="padButton" id="equals">=</div>
                <div onClick={handlenumber} className="padButton" id="zero">0</div>
                <div onClick={handledecimal}className="padButton" id="decimal">.</div>


            </div>
        </div>

    );


}
ReactDOM.render(<App />, document.getElementById('app'));