"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function FunToast() {
    const router = useRouter();

    useEffect(() => {
        const notify = () =>
            toast((t) => (
                <div className="p-2 text-sm">
                    <p className="font-medium">Hey there! Want to see something cool/fun?</p>

                    {/* Link Button... */}
                    <button
                        className="mt-2 px-3 py-1 bg-purple-600 hover:bg-purple-800 text-white rounded"
                        onClick={() => {
                            toast.dismiss(t.id); // close toast
                            router.push("/fun");
                        }}
                    >
                        Take me there!
                    </button>

                    {/* Close Button (x)... */}
                    <button
                        className="fixed top-0 right-5 mb-2 text-xl font-bold text-gray-600"
                        onClick={() => toast.dismiss(t.id)} // dismiss the toast
                    >
                        &times;
                    </button>
                </div>
            ), {
                duration: 20000,
            });

        setTimeout(notify, 1500); // show after 2 seconds
    }, []);

    return null;
}