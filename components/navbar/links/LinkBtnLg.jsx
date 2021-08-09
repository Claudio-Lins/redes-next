import Link from "next/link";

export default function LinkBtnLg(props) {
  return (
    <>
      <div className="hover:font-semibold">
        <Link href={props.link}>
          <a className="hover:text-green-600 flex items-center space-x-1">
            {props.label}
          </a>
        </Link>
      </div>
    </>
  );
}
