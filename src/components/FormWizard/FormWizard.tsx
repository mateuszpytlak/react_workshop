import { useState } from "react";
import { Button, Input } from "../../ui";

type FormData = {
    name: string;
    surname: string;
    dateBirth: string;
    hobby: string;
};

const StepOne = ({ onChange,}: { onChange: (field: keyof FormData, value: string) => void; }) => (
    <>
        <Input
            label="Name"
            onChange={(e) => onChange("name", e.target.value)}
        />
        <Input
            label="Surname"
            onChange={(e) => onChange("surname", e.target.value)}
        />
    </>
);

const StepTwo = ({onChange,}: { onChange: (field: keyof FormData, value: string) => void; }) => (
    <>
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
);

export const FormWizard = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        surname: "",
        dateBirth: "",
        hobby: "",
    });
    const [currStep, setCurrStep] = useState<number>(0);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleNextClick = () => {
        if (currStep < 1) {
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
                return <StepOne onChange={handleInputChange} />;
            case 1:
                return <StepTwo onChange={handleInputChange} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="">
                <h1>Form Wizard</h1>
                {renderStep()}
                <Button label="Previous" onClick={handlePrevClick} />
                <Button label="Next" onClick={handleNextClick} />
            </div>
            <div>
                <strong>Form Data:</strong>
            </div>
            <div>{`Name: ${formData.name}`}</div>
            <div>{`Surname: ${formData.surname}`}</div>
            <div>{`Date of Birth: ${formData.dateBirth}`}</div>
            <div>{`Hobby: ${formData.hobby}`}</div>
        </>
    );
};
