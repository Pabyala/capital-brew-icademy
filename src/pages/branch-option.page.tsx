import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/navbar";
import { Location, NextSelect } from "../assets/iconify";
import capitalBrewLogo from '../assets/images/capitalbrew-logos/CB-LOGO-ICON.png'

type Branch = {
    id: number;
    name: string;
    location: string;
};

const branches: Branch[] = [
    { id: 1, name: "Capital Brew Alabang", location: `Ground Floor, Filinvest One Building,
Northgate Cyberzone, Filinvest Ave., Alabang, Muntinlupa City` },
    { id: 2, name: "Capital Brew Techzone", location: "Techzone Building, Malugay St., San Antonio, Makati City" },
    { id: 3, name: "Capital Brew iACADEMY", location: "iACADEMY Nexus Campus, Yakal St., Makati City" },
];

export default function BranchOptionPage() {

    const [openCart, setOpenCart] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const navigate = useNavigate();
    const [selected, setSelected] = useState<number | null>(null);

    const handleSelect = (branch: Branch) => {
        setSelected(branch.id);

        // save selected branch (important for POS context)
        localStorage.setItem("selectedBranch", JSON.stringify(branch));

        // small delay for UX
        setTimeout(() => {
            navigate("/pos"); // or your menu route
        }, 200);
    };

    return (
        <div className='min-h-screen'>
            <div className='h-screen flex flex-col bg-gray-100'>
                <Navbar
                    openCart={() => setOpenCart(true)}
                    openMenu={() => setOpenMenu(true)}
                />
                <div className='h-screen flex flex-col bg-gray-100 pt-[50px]'>
                    <div className='h-screen container mx-auto flex flex-col overflow-hidden bg-white'>
                        <div className="lg:px-8 space-y-2 flex flex-col flex-1 overflow-y-auto">
                            <div className="lg:px-8 space-y-2 flex flex-col flex-1 overflow-y-auto">
                                <div className="flex-1 bg-white rounded py-3">
                                    <div className="w-full max-w-3xl">
                                        
                                        {/* Header */}
                                        <div className="text-center mb-5">
                                            <div className="text-base font-semibold">Select Branch</div>
                                            <div className="text-sm text-gray-500">
                                                Choose where you want to order coffee
                                            </div>
                                            <div className="flex items-center justify-center gap-2 mt-1">
                                                <div className="w-6 h-[1px] bg-[#AA6833]" />
                                                <p className="text-[11px] uppercase tracking-[0.2em] text-[#AA6833] font-medium">
                                                    Sip. Connect. Unwind
                                                </p>
                                                <div className="w-6 h-[1px] bg-[#AA6833]" />
                                            </div>
                                        </div>

                                        {/* Branch grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {branches.map((branch) => (
                                                <div
                                                    key={branch.id}
                                                    onClick={() => handleSelect(branch)}
                                                    className={` grid grid-cols-[auto_1fr_auto] gap-3
                                                        cursor-pointer rounded-lg border p-4 bg-cbLightColor border-cbColorSecond shadow-sm
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
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}