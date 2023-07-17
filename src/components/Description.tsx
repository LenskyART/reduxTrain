import React, {useState} from 'react';

interface DescriptionProps {
    text: string
    maxLength?: number
}

export const Description = ({text, maxLength = 150}: DescriptionProps) => {
    const [hidden, setHidden] = useState(true)

    const maxText = text.length > maxLength
        ? text.slice(0, maxLength) + '...'
        : text

    return (
        <div>
            <p>
                {hidden ? maxText : text}
                {(text.length > maxLength) &&
                    <button onClick={() => setHidden(value => !value)}>
                        {hidden ? 'Show Details' : 'Hide Details'}
                    </button>
                }
            </p>


        </div>
    );
};
