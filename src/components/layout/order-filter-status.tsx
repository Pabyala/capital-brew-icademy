import { DefaultData } from "../../interface/default.interface";

interface OrderFilterStatusProps {
    tabs: DefaultData[];
    activeTab: string;
    onClick: (value: DefaultData) => void;
}

export default function OrderFilterStatus({tabs, activeTab, onClick }: OrderFilterStatusProps) {
    return (
        <div className='container bg-white'>
            <div className="mt-4 mb-3 flex space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {tabs.map((tab: DefaultData) => (
                    <button
                        key={tab.id}
                        onClick={() => onClick(tab)} 
                        className={`px-3 py-1.5 text-xs rounded border ${
                            activeTab === tab.name
                            ? "bg-cbColor text-white border-cbColor"
                            : "bg-white border-gray-300"
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
        </div>
    )
}
