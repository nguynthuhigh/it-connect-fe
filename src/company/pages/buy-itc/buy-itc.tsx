import Input from "../../../shared/components/input-pattern/input";

const BuyITC = () => {
    return (
        <div className="w-full mx-auto font-inter">
            <h2 className="text-[32px] mb-5">Buy ITC</h2>
            <div className="bg-gray-50 p-5 text-[23px] text-[#6E6E6E] rounded-lg shadow-lg border w-1/2 items-center flex-col flex-wrap flex">
                <div className="my-5">
                    <div className="font-semibold">My Wallet</div>
                    <div className="bg-[#34A4F7] flex items-center rounded-[10px] w-[400px] h-[60px] text-white px-6 py-2 mt-2">
                        Balance Wallet: *** ITC
                    </div>
                </div>
                <div className="mb-6">
                    <Input className="rounded-[10px] w-[400px]" name={"number"} title={"Top up ITC"} placeholder={"0 ITC"} />
                </div>
                <div className="mb-14">
                    <div className="font-semibold mb-3">Select payment method</div>
                    <div className="flex flex-wrap flex-col gap-5 space-y-2">
                        <div className="flex items-center w-[400px] h-[80px] gap-4 shadow-lg shadow-[#BCE0FB] px-5 py-2 border border-[#9ED4FB] rounded-[10px] cursor-pointer">
                            <span className="w-[45px] h-[45px] bg-[#34A4F7] rounded-full"></span>
                            <span className="text-[#ACACAC]">Pointer</span>
                        </div>
                        <div className="flex items-center w-[400px] h-[80px] shadow-lg shadow-[#E7E2E2] gap-3 px-5 py-2 border border-[#E7E2E2] rounded-[10px] cursor-pointer">
                            <div className="relative w-[80px] flex items-center h-full">
                                <span className="w-[45px] absolute h-[45px] bg-[#F37E8C] rounded-full"></span>
                                <span className="w-[45px] absolute ml-8 h-[45px] bg-[#F9CD8C] rounded-full"></span>
                            </div>
                            <span className="text-[#ACACAC]">•••••</span>
                        </div>
                    </div>  
                </div>
                <button className="w-[300px] mb-12 py-3 bg-[#34A4F7] text-white rounded-full text-[32px] focus:outline-none hover:bg-[#3482f7]">
                    Pay now
                </button>
            </div>
        </div>
    );
};

export default BuyITC;
