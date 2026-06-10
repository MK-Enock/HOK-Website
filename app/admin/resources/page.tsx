import React from 'react'
import Link from "next/link";
import {BookOpen, Briefcase, Download, FileText, Heart, Users} from "lucide-react";

const resources = [
    {
        icon: Briefcase,
        title: "Career Development Toolkit",
        description: "Structured worksheets for career exploration, goal setting, and professional planning.",
        price: "R5",
        cover: 'hsl(322, 92.25073142835548%, 25.35844907075699%)'
    },
    {
        icon: Heart,
        title: "Workplace Wellbeing Worksheet",
        description: "Reflection tools to assess and improve your workplace wellbeing and work-life balance.",
        price: "R5",
        cover: 'hsl(166, 86.03664813061621%, 22.96100367931302%)'
    },
    {
        icon: Users,
        title: "Team Functioning Guide",
        description: "Exercises for improving team communication, collaboration, and effectiveness.",
        price: "R5",
        cover: 'hsl(247, 66.1058593671201%, 33.48574455587307%)'
    },
    {
        icon: BookOpen,
        title: "Graduate Readiness Workbook",
        description: "Comprehensive guide for transitioning from education to the professional world.",
        price: "R5",
        cover: 'hsl(293, 67.03717380675282%, 23.920645262628994%)'
    },
    {
        icon: FileText,
        title: "Resilience Building Exercises",
        description: "Practical activities to develop personal and professional resilience.",
        price: "R5",
        cover: 'hsl(202, 84.52549797045401%, 36.575913065198286%)'
    },
    {
        icon: Download,
        title: "Personal Development Planner",
        description: "Structured templates for setting and tracking personal growth objectives.",
        price: "R5",
        cover: 'hsl(298, 71.48353615217206%, 34.18118037779516%)'
    },
]

function Page() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {resources.map((resource, index) => {
                return <div
                    key={resource.title}
                    className="bg-card border w-[160px] lg:w-[190px] flex flex-col justify-between text-white border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
                    style={{background: resource?.cover}}
                >
                    <h3 className="font-medium text-sm lg:text-normal  mb-2 text-center">{resource.title}</h3>

                    <p className="text-sm mb-4 text-center">{resource.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-white">{resource.price}</span>
                        <Link
                            href="/contact"
                            className="text-sm text-white font-medium hover:underline"
                        >
                            Enquire
                        </Link>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Page
