function ClickButton({ count, setCount }){
    function soma(){
        setCount(count+1);
    }

    return(
        <>
            <button onClick={soma}>
                Clicked {count} {count === 1 ? <>time</> : <>times</>}
            </button>
        </>
    )
}

function ResetButton({ setCount }){
    function reset(){
        setCount(0);
    }

    return(
        <button onClick={reset}>Reset</button>
    )
}

function Counter(){
    const [count, setCount] = React.useState(0);

    return(
        <div>
            <ClickButton
                count={count}
                setCount={setCount} 
            />
            <ClickButton
                count={count}
                setCount={setCount} 
            />
            <ResetButton
                setCount={setCount}
            />
        </div>
    )
}

function DisplayExercise(){
    const [ inputText, setInputText ] = React.useState('');

    function saveText(event){
        setInputText(event.target.value);
    }

    function removeText(){
        setInputText('');
    }

    function nameExample(){
        const nameExamples = [
            "Lucas Silva",
            "Mariana Souza",
            "Gabriel Oliveira",
            "Beatriz Lima",
            "Matheus Santos",
            "Larissa Costa",
            "Rafael Almeida",
            "Camila Rodrigues",
            "Leonardo Ferreira",
            "Júlia Martins"
        ];

        const indiceAleatorio = Math.floor(Math.random() * nameExamples.length);
        
        setInputText(nameExamples[indiceAleatorio]);
    }

    return(
        <>
            <input
                onChange={saveText} 
                placeholder="Type a name here"
                value={inputText}
            />
            <button onClick={removeText}>Reset</button>
            <button onClick={nameExample}>Example</button>
            <p>Hello {inputText}</p>
        </>
    )
}

function App(){
    return(
        <>
            <Counter />
            <br />
            <DisplayExercise />
        </>
    )
}

const container = document.querySelector('.js-container')
ReactDOM.createRoot(container).render(<App />)