/* eslint-disable @next/next/no-html-link-for-pages */
import { ImageType } from "@/common/types/types"
import styles from "./blog.module.css"

export default function BlogArticle({ }: { data: ({ type: "text", content: string } | { type: "image", content: ImageType, caption?: string })[] }) {
    const snippet = `function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("Hi Mom"));
`;

    return (
        <article className={`sm:text-lg leading-[1.75] sm:leading-relaxed space-y-7 ${styles.article}`}>

            <h2>Make v0 a part of your team</h2>

            <p>
                Expanding v0&apos;s offering for fast-moving teams and organizations with strict security requirements.
                Now, v0 is like having an <a href="/">expert programmer</a> sitting next to you. It&apos;s an assistant that specializes in web technologies and frameworks to help you generate functional code and UI from best practices, migrate or debug existing code, or learn to code for the first time.
                Last October we introduced v0—a generative user interface system powered by natural language and AI. Users generated over four million designs, creating everything from sophisticated dashboards to polished marketing pages.
            </p>

            <p>
                Starting today, v0 is available to teams of all sizes, with plans designed to help you collaborate and scale securely. v0 Team and v0 Enterprise plans offer security features like SSO and, for Enterprise, the ability to opt out of data training, while helping you share and reuse knowledge and generations across your whole team.
            </p>

            <h3>v0 enterprise</h3>

            <pre>
                <code>
                    {snippet}
                </code>
            </pre>

            <p>
                Starting today, v0 is available to teams of all sizes, with plans designed to help you collaborate and scale securely. v0 Team and v0 Enterprise plans offer security features like SSO and, for Enterprise, the ability to opt out of data training, while helping you share and reuse knowledge and generations across your whole team.
            </p>

            <ul>
                <li>
                    Data training controls: Your queries, messages, and uploads are excluded from any post-training processes, ensuring that your proprietary information and development strategies remain confidential and secure.
                </li>

                <li>
                    Single sign-on (SSO): Team members can use existing organization credentials to access v0, aligning with your existing compliance and security protocols.
                </li>

                <li>
                    Higher rate limits: Members of your team will get higher rate limits, allowing you to make more queries to work on larger, more complex projects.
                </li>

                <li>
                    Priority access: Your team will always receive the fastest results when working with v0, you’ll never face concurrent user capacity limits.
                </li>
            </ul>


            <h2>Make v0 a part of your team</h2>

            <p>
                Starting today, v0 is available to teams of all sizes, with plans designed to help you collaborate and scale securely. v0 Team and v0 Enterprise plans offer security features like SSO and, for Enterprise, the ability to opt out of data training, while helping you share and reuse knowledge and generations across your whole team.
            </p>

            <ul>
                <li>
                    Data training controls: Your queries, messages, and uploads are excluded from any post-training processes, ensuring that your proprietary information and development strategies remain confidential and secure.
                </li>

                <li>
                    Single sign-on (SSO): Team members can use existing organization credentials to access v0, aligning with your existing compliance and security protocols.
                </li>

                <li>
                    Higher rate limits: Members of your team will get higher rate limits, allowing you to make more queries to work on larger, more complex projects.
                </li>

                <li>
                    Priority access: Your team will always receive the fastest results when working with v0, you’ll never face concurrent user capacity limits.
                </li>
            </ul>

        </article>
    )
}