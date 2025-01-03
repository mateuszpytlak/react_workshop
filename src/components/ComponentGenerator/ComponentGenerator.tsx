import {Input, Select} from "../../ui";
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
    const textInputRef = useRef<HTMLInputElement>(null);
    const [selectedHTMLElement, setSelectedHTMLElement] = useState<HTMLElementType>('');
    const [textProps, setTextProps] = useState<string>('');

    const handleSelectChange: FormEventHandler = (event) => {
        event.preventDefault();
        const value = selectElementRef.current?.value as HTMLElementType;

        setSelectedHTMLElement(value);
    }

    const handleInputChange: FormEventHandler = () => {
        const textValue = textInputRef.current?.value || '';
        setTextProps(textValue);
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
            <Select ref={selectElementRef} name='htmlElements' onChange={handleSelectChange}/>
            <div className="my-3">output</div>
            <div>
                {selectedHTMLElement === '' && <p>Please select an option above.</p>}
                {selectedHTMLElement === 'text' && <code>&lt;p&gt;{textProps}&lt;/p&gt;</code>}
                {selectedHTMLElement === 'header' && <code>{htmlElements.header}</code>}
                {selectedHTMLElement === 'button' && <code>{htmlElements.button}</code>}

                {selectedHTMLElement === 'text' && (
                    <div>
                        <Input label='input props' ref={textInputRef} onChange={handleInputChange}/>
                    </div>
                )}
            </div>
            <button onClick={handleCopy}>Kopiuj tekst</button>
        </>
    )
}
