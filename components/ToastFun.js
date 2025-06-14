"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function FunToast() {
    const router = useRouter();

    useEffect(() => {
        const notify = () =>
            toast((t) => (
                <div className="p-2 text-sm top-10">
                    <p className="font-medium mt-2">Hey there! Want to see something <strong>cool/fun?</strong></p>

                    {/* Link Button... */}
                    <button
                        className="px-3 py-1 bg-purple-600 hover:bg-purple-800 text-white rounded"
                        onClick={() => {
                            toast.dismiss(t.id); // close toast
                            router.push("/fun");
                        }}
                    >
                        Take me there!
                    </button>

                    {/* Close Button (x)... */}
                    <button
                        className="fixed top-0 right-5 mb-2 text-2xl font-bold text-gray-600"
                        onClick={() => toast.dismiss(t.id)} // dismiss the toast
                    >
                        &times;
                    </button>
                </div>
            ), {
                duration: 30000,
            });

        setTimeout(notify, 1500); // show after 1.5 seconds
    }, []);

    return null;
}