import CustomerService from "@/components/modules/home/CustomerService";
import LandingSection from "@/components/modules/home/LandingSection";
import React from "react";

const HOME = () => {
    return (
        <div>
            <div className="flex flex-col font-poppins items-start justify-start w-full">
                <LandingSection />
            </div>
            <CustomerService />
        </div>
    );
};

export default HOME;
