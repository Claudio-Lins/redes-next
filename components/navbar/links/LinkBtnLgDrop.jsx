import Link from "next/link";

export default function LinkBtnLgDrop(props) {
  return (
    <>
      <div className="py-2 bg-white mx-2">
        <Link href={props.link}>
          <a className="btnDropdown drop-shadow-md hover:font-semibold hover:drop-shadow-none">{props.label}</a>
        </Link>
      </div>
    </>
  );
}
