import {Select} from "../../ui";
import {FormEventHandler, useRef, useState} from "react";

type HTMLElementType = '' | 'button' | 'text' | 'header';

const htmlElements = {
    text: '<p>text element</p>',
    header: '<h1>header element</h1>',
    button: '<button>button element</button>',
    '': ''
};

export const ComponentGenerator = () => {

    const selectElementRef = useRef<HTMLSelectElement>(null);
    const [selectedHTMLElement, setSelectedHTMLElement] = useState<HTMLElementType>('')

    const handleChange: FormEventHandler = (event) => {
        event.preventDefault();
        const value = selectElementRef.current?.value as HTMLElementType;

        setSelectedHTMLElement(value);
    }

    const handleCopy: FormEventHandler = async (event) => {
        event.preventDefault();
        try {
            await navigator.clipboard.writeText(htmlElements[selectedHTMLElement]);
            alert('Copied!');
        } catch (error) {
            console.log('Copy error', error);
        }

    }

    return (
        <>
            <Select ref={selectElementRef} name='htmlElements' onChange={handleChange}/>
            <div className="my-3">output</div>
            <div>
                {selectedHTMLElement === 'text' && <code>{htmlElements.text}</code>}
                {selectedHTMLElement === 'header' && <code>{htmlElements.header}</code>}
                {selectedHTMLElement === 'button' && <code>{htmlElements.button}</code>}
                {selectedHTMLElement === '' && <p>Please select an option above.</p>}
            </div>

            <button onClick={handleCopy}>Kopiuj tekst</button>

        </>
    )
}
