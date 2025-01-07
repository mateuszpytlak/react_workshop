import { ChangeEvent, Ref, useRef } from "react"
import { Input } from "../../ui"

type FormData = {
    name: string,
    surename: string,
}

type Props = {
    nameRef?: Ref<HTMLInputElement>,
    surenameRef?: Ref<HTMLInputElement>,
    onChange?: ChangeEvent<HTMLInputElement>,
// } & ComponentProps<'input'>
}

// const StepOne = ({ nameRef, surenameRef }: { nameRef: Ref<HTMLInputElement>, surenameRef: Ref<HTMLInputElement> }) => {
const StepOne = ({nameRef, surenameRef, onChange}: Props) => {
    return (
        <>
            <Input label='Name' ref={nameRef} />
            <Input label='Surename' ref={surenameRef} />
        </>
    )
}

export const FormWizard = () => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const surenameInputRef = useRef<HTMLInputElement>(null);

    const handleStepOneChange = () => {
        console.log('handleStepOneChange');
        
    }

    return (
        <>
            <h1>Form Wizardx</h1>
            <h2>Step 1</h2>

            <StepOne nameRef={nameInputRef} surenameRef={surenameInputRef} onChange={handleStepOneChange}/>
        </>
    )
}