import {useState} from "react";
import {Button, Input, Text} from "../../ui";

type FormDataType = {
    name: string;
    surname: string;
    dateBirth: string;
    hobby: string;
};

const StepOne = ({onChange}: { onChange: (field: keyof FormDataType, value: string) => void; }) => {
    return (
        <>
            <h2 className="dark: text-slate-300">Step One</h2>
            <Input
                label="Name"
                onChange={(e) => onChange("name", e.target.value)}
            />
            <Input
                label="Surname"
                onChange={(e) => onChange("surname", e.target.value)}
            />
        </>
    )
};

const StepTwo = ({onChange}: { onChange: (field: keyof FormDataType, value: string) => void; }) => {
    return (
        <>
            <h2 className="dark: text-slate-300">Step Two</h2>
            <Input
                label="Date of Birth"
                type="date"
                onChange={(e) => onChange("dateBirth", e.target.value)}
            />
            <Input
                label="Hobby"
                onChange={(e) => onChange("hobby", e.target.value)}
            />
        </>
    )
};

const StepThree = ( {formData}: { formData: FormDataType} ) => {
    return (
        <>
            <h2 className="dark: text-slate-300">Step Three</h2>
            <Text>Summary:</Text>
            <Text>{`Name: ${formData.name}`}</Text>
            <Text>{`Surname: ${formData.surname}`}</Text>
            <Text>{`Date of Birth: ${formData.dateBirth}`}</Text>
            <Text>{`Hobby: ${formData.hobby}`}</Text>
        </>
    )
}

export const FormWizard = () => {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        surname: "",
        dateBirth: "",
        hobby: "",
    });
    const [currStep, setCurrStep] = useState<number>(0);

    const handleInputChange = (field: keyof FormDataType, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleNextClick = () => {
        if (currStep < 2) {
            setCurrStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrevClick = () => {
        if (currStep > 0) {
            setCurrStep((prevStep) => prevStep - 1);
        }
    };

    const renderStep = () => {
        switch (currStep) {
            case 0:
                return <StepOne onChange={handleInputChange}/>;
            case 1:
                return <StepTwo onChange={handleInputChange}/>;
            case 2:
                return <StepThree formData={formData} />
            default:
                return null;
        }
    };

    return (
        <>
            <div className="">
                <h1 className="dark: text-slate-300">Form Wizard</h1>
                {renderStep()}
                <Button label="Previous" onClick={handlePrevClick}/>
                <Button label="Next" onClick={handleNextClick}/>
            </div>
        </>
    );
};
