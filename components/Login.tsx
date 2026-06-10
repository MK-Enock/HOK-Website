'use client'

import {useFormik} from "formik";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Login() {

    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values)=>{
            try {
                setIsPending(true);
                setError("");

                const res = await fetch("/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: values.email,
                        password: values.password,
                    }),
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || "Login failed");
                }

                console.log(data);

                // redirect if needed
                router.push("/admin");

            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsPending(false);
            }
        }
    })
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="/logo.png"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to Admin
                    </h2>
                </div>
                {
                    error !== "" &&
                    <div className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
                        {error}
                    </div>
                }

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-gold sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    onChange={handleChange}
                                    value={values.password}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-gold sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex cursor-pointer w-full justify-center rounded-md bg-primary-gold px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-gold"
                            >
                                {isPending? "Loading.." :"Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
