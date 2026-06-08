import { NextSelect } from "../../assets/iconify"
import { Branch } from "../../pages/branch-option.page"
import capitalBrewLogo from '../../assets/images/capitalbrew-logos/CB-LOGO-ICON.png'

interface BranchItemProps {
    branch: Branch
    handleSelect: (value: Branch) => void;
}

export default function BranchItem({ branch, handleSelect }: BranchItemProps) {
    return (
        <div
            onClick={() => handleSelect(branch)}
            className={`${branch.isActive ? 'bg-cbLightColor' : 'bg-gray-100'} grid grid-cols-[auto_1fr_auto] gap-3
                cursor-pointer rounded-lg border p-4 border-cbColorSecond shadow-sm
            `}
        >
            <div className="flex justify-center items-center">
                <img src={capitalBrewLogo} className="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded" alt="" />
            </div>
            <div className="flex flex-col">
                <div className="font-semibold text-sm">
                    {branch.name}
                </div>
                <div className="mt-1 text-xs text-cbColorDark">
                    {branch.location}
                </div>
            </div>
            <div className="items-center flex justify-center">
                <NextSelect size={20} color="#3B2314"/>
            </div>
        </div>
    )
}
