import * as React from 'react';

interface IProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    key?: any;
    className?: string; 
}

export class TextInput extends React.Component<IProps, void> {
    onChange = (el: React.FormEvent<HTMLInputElement>) => {
        const {onChange} = this.props;
        onChange(el.currentTarget.value);
    }

    render() {
        const {placeholder, disabled, value, className} = this.props;
        return (
            <div className={className || 'col-md-12'}>
                <input 
                    type='text' 
                    placeholder={placeholder} 
                    disabled={disabled}
                    onChange={this.onChange}
                    value={value}
                />
            </div>
        )
    }
}