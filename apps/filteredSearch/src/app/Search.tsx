interface SearchProps {
    value: string;
    setValue: (value: string) => void;
}

export default function Search({ value, setValue }: SearchProps) {
    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}