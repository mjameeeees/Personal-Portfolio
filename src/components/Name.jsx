
export default function Name() {
    return (
        <div className="flex items-end gap-6  pb-6">
            <div className="w-32 h-32 bg-gray-300 rounded-3xl  flex-shrink-0">
                <img className="rounded-3xl " src="./icons/profilepic.png" alt="" />
            </div>
            <div>
                <h1 className="font-fami text-4xl font-bold text-gray-900 mb-1">
                    Mark James Dinong
                </h1>
                <p className="text-base text-gray-600">
                    Software Developer / System Administrator
                </p>
            </div>
        </div>
    )
}