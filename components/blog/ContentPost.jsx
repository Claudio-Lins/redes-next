import ReactMarkdown from "react-markdown"


export default function ContentPost(props) {
    return (
        <div className=" text-sm tracking-wide font-normal text-gray-600 antialiased prose">
            <ReactMarkdown>{props.contentPost.slice(0, 150)}</ReactMarkdown>
        </div>
    )
}