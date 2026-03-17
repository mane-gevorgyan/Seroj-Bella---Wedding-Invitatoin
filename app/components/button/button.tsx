'use client'

interface IButtonProps {
    src: string;
}

export default function Button({ src }: IButtonProps) {
    const onClickChurch = () => {
        window.open(src, '_blank')
    };

    return (
        <button
            className="rounded-4xl py-4 px-6 bg-linear-to-r from-[#fdcdea] via-[#ffe5eb] to-[#efe6eb]"
            onClick={onClickChurch}
        >
            Ինչպես հասնել
        </button>)
};