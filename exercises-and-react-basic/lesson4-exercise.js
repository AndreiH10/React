
function Inputs(){
    const [ showPassword, setShowPassword ] = React.useState(false);

    function showOrHide(){
        if(showPassword){
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    }

    return(
        <div className="input-container">
            <input
                placeholder="Email"
                className="inputs"
            ></input>
            <div>
                <input
                    placeholder="Password"
                    className="inputs"
                    type={showPassword ? 'text' : 'password'}
                ></input>
                <button
                    onClick={showOrHide}
                >{showPassword ? 'Hide' : 'Show'}</button>
            </div>
        </div>
    )
}

function Buttons(){
    return(
        <div>
            <button className="buttons">Login</button>
            <button className="buttons">Sign up</button>
        </div>
    )
}

function Clock(){
    const [ time, setTime ] = React.useState(dayjs().format('HH:mm:ss'));

    React.useEffect(() => {
        setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'))
            //console.log('run code')
        }, 1000)

    }, )

    return(
        <div>
            <p>Current time: {time}</p>
        </div>
    )
}

const ClickButton = React.forwardRef(({ count, setCount }, ref) => {
    function soma(){
        setCount(count + 1);
    }

    return(
        <>
            <button 
                onClick={soma}
                ref={ref}
                className="click-buttons"
            >Clicked {count} {count === 1 ? 'time' : 'times'}</button>
        </>
    )
});

function ResetButton({ setCount }){
    function reset(){
        setCount(0);
    }

    return(
        <>
            <button 
                onClick={reset}
                className="click-buttons"
            >Reset</button>
        </>
    )
}


function AutoClickButton({ buttonRef }){
    const [ on, setOn ] = React.useState(false);
    const intervalRef = React.useRef(null);

    function click(){
        if(on){
            setOn(false)
            clearInterval(intervalRef.current);
        } else {
            setOn(true);
            autoClick()
        }
    }
    
    function autoClick(){
        intervalRef.current = setInterval(() => {
            const buttonElem = buttonRef.current;

            if(buttonElem){
                buttonElem.click();
            }
        }, 1000)
    }

    return(
        <>
            <button 
                onClick={click}
                className="click-buttons"
            >Auto Click</button>
        </>
    )
}

function AllClickButtons(){
    const [ count, setCount ] = React.useState(0);
    const buttonRef = React.useRef(null);

    return(
        <div className="click-buttons-container">
            <ClickButton
                count={count}
                setCount={setCount} 
                ref={buttonRef}
            />
            <ResetButton
                setCount={setCount}
            />
            <AutoClickButton 
                buttonRef={buttonRef}
            />
        </div>
    )
}

function App(){
    return(
        <div className="app-container">
            <Clock />
            <h1>Hello, welcome to my website</h1>
            <Inputs />
            <Buttons />
            <AllClickButtons />
        </div>
    )
}

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />)