import Link from "next/link";

export default function LinkBtn(props) {
  return (
    <>
      <div className="hover:text-green-700 mb-0 py-2 ml-4">
        <Link href={props.link}>
          <a className="hover:text-green-700 px-4">{props.label}</a>
        </Link>
      </div>
    </>
  );
}
