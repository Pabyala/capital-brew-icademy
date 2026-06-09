interface MessageModalProps {
    onClose: () => void;
    modalTitle: string;
    modalContext: string;
    btnTitle: string;
}

export default function MessageModal({ btnTitle, onClose, modalTitle, modalContext }: MessageModalProps) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4'>
            <div className="w-full max-w-4xl bg-white rounded overflow-hidden shadow max-h-[90vh] my-auto flex flex-col">
                <div className='relative bg-white p-5 space-y-6 rounded-xl shadow-sm flex flex-col max-h-[90vh] justify-between '>
                    <div className='space-y-3'>
                        <div className='text-base font-semibold'>{modalTitle}</div>
                        <div>
                            <p className='text-sm'>{modalContext}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <button onClick={onClose} className='text-sm gap-2 bg-cbColor p-2 rounded text-white'>{btnTitle}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
