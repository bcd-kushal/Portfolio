import { ChildrenType } from "@/common/types/reactTypes"
import DetailsTableSidebar from "./components/Sidebar"
import { Heading2 } from "@/components/atomic/Headings"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Achievements from "./components/Acheivements/Acheivements"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Others from "./components/Others"

export default function DetailsTable() {
    const details = [
        { title: "Work Experience", component: <WorkExperience />, id: "work-experience" },
        { title: "Projects", component: <Projects />, id: "projects" },
        { title: "Skills", component: <Skills />, id: "skills" },
        { title: "Education", component: <Education />, id: "education" },
        { title: "Achievements", component: <Achievements />, id: "achievements" },
        { title: "Others", component: <Others />, id: "others" },
    ]

    return (
        <section className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-20 relative mt-16">
            <DetailsTableSidebar elements={details.map(({ title, id }) => ({ label: title, sectionId: id }))} />
            <div className="flex flex-col justify-start gap-y-24">
                {details.map(({ title, component, id }, index) => (
                    <DetailsSection title={title} id={id} key={index}>
                        {component}
                    </DetailsSection>
                ))}
            </div>
        </section>
    )
}

const DetailsSection = ({ title, id, children }: { title: string, id: string, children: ChildrenType }) =>
    <section className="space-y-4">
        <Heading2 useHTag isLink={false} text={title} className="pb-7" id={id || undefined} />
        {children}
    </section>